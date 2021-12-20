chrome.runtime.setUninstallURL("http://10.10.10.2:8090/httpclient.html",()=> { 
    
    console.log("hi")
    localStorage.clear();
    
})