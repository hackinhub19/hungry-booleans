chrome.webRequest.onBeforeRequest.addListener(
function(details) {
    return {cancel: true}; 
}, filter = urls: [ '*://github.com/*', ] , webRequestFlags = ['blocking']);