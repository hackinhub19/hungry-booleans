var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("back.html");

document.body.insertBefore (iFrame, document.body.firstChild);