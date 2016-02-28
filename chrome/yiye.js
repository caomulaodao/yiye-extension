//自定义对象
var yiyeWork  = {

	injectBoxId : "inject-yiye-popup",
	injectIframeId : "inject-yiye-popup-iframe",

	showPopup : function(file){

		injectTemplate = '<div id="'+this.injectBoxId+'"><link rel="stylesheet" href="'+file.css+'"><iframe id="'+this.injectBoxId+'-iframe" src="'+file.iframe+'" frameborder="0" allowtransparency=""></iframe></div>';
		$('body:eq(0)').append(injectTemplate);
		$('#'+this.injectBoxId).hide().show();
		return true;
	},
	closePopup : function(){
		$('#'+this.injectBoxId).remove();
	},
	initBookmarks : function(){
		item = {};
		item.title = $('title:eq(0)').text();
		item.description = $('meta[name="description"]').attr("content") || $('p').text().replace(/\s/g,"").slice(0,100);
		item.images =  $('img').map(function(){
			return this.src;
		}).get();
		item.url = window.location.href;
		document.getElementById(this.injectIframeId).contentWindow.postMessage({action: 'setBookmarks', item: item},'*');
	}
}