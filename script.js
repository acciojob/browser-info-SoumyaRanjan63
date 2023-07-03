//your JS code here. If required.
const browserName = navigator.appName;
const version = navigator.appVersion;
const browserInfoDiv = document.getElementById('browser-info');
browserInfoDiv.innerText = "You are using " + browserName + " version " + version;