//当程序新安装或是更新版本后触发
chrome.runtime.onInstalled.addListener(function(details){
	var openURLafter=function(){
		//chrome.tabs.create({url:'http://yiye.me'});
	}

	switch(details.reason){
		case 'install':
			openURLafter();
		break;

		case 'update':
			if (details.previousVersion=='0.9.0')
				openURLafter();
		break;
	}
});

//浏览器按钮点击
chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.sendMessage(tab.id, {action: "showPopup", url:tab.url}, function(response) {
		if (typeof response != 'undefined')
			console.log(response);
		else
			console.log('inject false');
		//tabs.setIcon(response);
	});
});


//Messages from inject js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.action){
		case 'getScreenshot':
			chrome.tabs.captureVisibleTab(null, {format:'jpeg', quality: 100}, function(dataURI) {
				sendResponse(dataURI);
			});
		break;

		case 'refreshPage':
			chrome.tabs.reload(null);
		break;

		case 'removePopup':
		break;

		case 'close':
			//tabs.setIcon(0);
		break;
	}
	return true;
});