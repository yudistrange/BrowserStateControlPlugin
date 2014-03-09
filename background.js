var sockets = {};
var currentURL;
var serverURL;

// Listening to the click on the extension icon in the browser.
chrome.browserAction.onClicked.addListener(function (tab) {
    
    if (!serverURL) {
        serverURL = prompt('Enter server URL', '127.0.0.1:3100');
    }
    //Opening a new connection for each new tab(client) to the node server
    // Intial hand shake between server and client.
    var socket = sockets[tab.id] = io.connect(serverURL,  {'force new connection': true});

    
    // Listening to Server for action command to the client.
    socket.on('action', function(data) {
        chrome.tabs.sendMessage(tab.id, {action: 'dispatchSerialEvent', data: data});
    });        
    
    chrome.tabs.sendMessage(tab.id, {action: 'start', url: currentURL});
    
    if (!currentURL)
        currentURL = tab.url;

});

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.action) {
        case 'sendEvent':
            sockets[sender.tab.id].emit('action', message.eventString);
            break;
        case 'shouldStart':
            sendResponse(sender.tab.id in sockets);
            break;
    }
});

chrome.tabs.onUpdated.addListener(function (tabid, changeInfo, tab) {
    if (tabid in sockets) {
        sockets[tabid].emit('action', JSON.stringify({ type:'locationchange', url: changeInfo.url }));

       if (changeInfo.url) currentURL = changeInfo.url;
    }
});
