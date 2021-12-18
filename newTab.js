chrome.runtime.onStartup.addListener(function() { 
    var newURL = "http://10.10.10.2:8090/httpclient.html";
    chrome.tabs.create({ url: newURL })
})