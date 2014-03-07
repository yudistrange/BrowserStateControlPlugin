chrome.app.runtime.onLaunched.addListener(function(intentData) {
    chrome.app.window.create('popup.html', {
        width: 500,
        height: 309
    });
});
