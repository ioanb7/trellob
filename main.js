function addScript(scriptPath) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = chrome.extension.getURL(scriptPath);
    document.head.appendChild(script);
}

window.onload = function() {
    var scripts = ["common.js", "script.js"];
    for (script in scripts)
        addScript(scripts[script]);
};
