// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });
function onExtButtonClick(e) {
	chrome.tabs.query(
		{currentWindow:true, active:true},
		function(tabs) {
			console.log('bg.js: onExtButtonClick');
			// on step 2, should inject graphy.js into every page
			// then analyse and display page-action logos
			
			// but for now, we inject js/css by clicking the browser event
			var specTab = tabs[0];
			chrome.tabs.insertCSS(specTab.id, {file:"style.css"});
			chrome.tabs.executeScript(specTab.id, {file:"graphy.js"});
		}
	);
}

chrome.browserAction.onClicked.addListener(onExtButtonClick);