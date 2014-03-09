chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.action) {
        case 'dispatchSerialEvent':
            dispatchSerialEvent(message.data);
            break;
        case 'start':
            start(message.url);
    }
});

chrome.extension.sendMessage({'action': 'shouldStart'}, function (shouldStart) {
    if (shouldStart) {
        start(null);
    }
});


var lastScrollTop = 0, lastScrollLeft = 0;
var lastVal;

// Encodes the event on webPage to json String.
function stringifyEvent(event){
    var obj = {};
    for(var i in event){
        if (event[i] instanceof Node|| typeof event[i] === 'function' || i === 'view' || 
            i === 'currentTarget' || i === 'originalEvent' || i === 'delegateTarget' || i === 'handleObj') {
            continue;
        }
        else{
            obj[i] = event[i];
        }
    }//End of for loop

    return JSON.stringify(obj);
}

// Decodes the JSON string and applies the changes
// on the current page.
function dispatchSerialEvent(str){
    
    var obj = JSON.parse(str);
    var target;
    if (obj.val !== undefined) lastVal = target.value = obj.val;

    if(obj.type === 'scroll'){
        target = document.body;
        target.scrollTop = obj.scrollTop;
        target.scrollLeft = obj.scrollLeft; 

        lastScrollTop = obj.scrollTop;
        lastScrollLeft = obj.scrollLeft;    
    }
    else if(obj.type === 'locationchange'){
        if(obj.url)
            location.href = obj.url;
    }
}

// Entry point for the extension. Creates listener for the events on page.
function start(url) {
    console.log('initialize', url);
    if (url) location.href = url;

    var mouseEvents = ['mousedown', 'mouseup', 'click'];
    var keyboardEvents = ['keydown', 'keyup', 'keypress', 'scroll'];    
    var eventTypes = [mouseEvents, keyboardEvents];

    var repeater = function (e) {
        if (true) {
            if (e.type === 'scroll') {
                var target = (document.isEqualNode(e.target)) ? document.body : e.target;

                // This is required to stop loop of events.
                if (target.scrollTop == lastScrollTop && target.scrollLeft == lastScrollLeft) {
                    // do not send if scroll positions not updated
                    return;
                }
                e.scrollTop = target.scrollTop;
                e.scrollLeft = target.scrollLeft;
            }

            if (lastVal != e.target.value) {
                e.val = e.target.value;
            }
            chrome.extension.sendMessage({action: 'sendEvent', eventString: stringifyEvent(e)});
        }
    };

    for (var i = 0, count = eventTypes.length; i < count; i++) {
        for (var j = 0, count2 = eventTypes[i].length; j < count2; j++) {
            var eventType = eventTypes[i][j];
            window.addEventListener(eventType, repeater, true);
        }
    }
}

