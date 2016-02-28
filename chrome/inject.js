
//messages from background js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (!sender.tab)
		switch(request.action){
			case 'showPopup':
				var file={
					css: chrome.extension.getURL("css/inject.css"),
					iframe: chrome.extension.getURL("popup/popup.html")
				}
				sendResponse(yiyeWork.showPopup(file));
			break;
		}
	return true;
});

//messages from iframe
window.addEventListener("message", function (e) {
	switch(e.data.action){
		case 'yiye-initBookmarks':
			yiyeWork.initBookmarks();
		break;

		case 'raindrop-parseURL':
			var mimeTypes = {
		    	'image':['image/jpeg','image/png','image/gif'],
		    	//'html':['text/html',/*'text/plain',*/'application/xhtml+xml']
		    };
		    
			
		break;

		case 'raindrop-getURL':
		break;

		case 'yiye-screenShot':
			$('#'+yiyeWork.injectBoxId).hide();
			setTimeout( function() {
				chrome.runtime.sendMessage({action: "getScreenshot"}, function(response) {
					document.getElementById(yiyeWork.injectIframeId).contentWindow.postMessage({action: 'setScreenshot', dataURI: response},'*');
					$('#'+yiyeWork.injectBoxId).show();
				});
			},200);
		break;

		case 'yiye-closePopup':
			yiyeWork.closePopup();
		break;
	}
});