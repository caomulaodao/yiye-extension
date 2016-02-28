//add canvas to blob
!function(a){"use strict";var b=a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype,c=a.Blob&&function(){try{return Boolean(new Blob)}catch(a){return!1}}(),d=c&&a.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(a){return!1}}(),e=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,f=(c||e)&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&function(a){var b,f,g,h,i,j;for(b=a.split(",")[0].indexOf("base64")>=0?atob(a.split(",")[1]):decodeURIComponent(a.split(",")[1]),f=new ArrayBuffer(b.length),g=new Uint8Array(f),h=0;h<b.length;h+=1)g[h]=b.charCodeAt(h);return i=a.split(",")[0].split(":")[1].split(";")[0],c?new Blob([d?g:f],{type:i}):(j=new e,j.append(f),j.getBlob(i))};a.HTMLCanvasElement&&!b.toBlob&&(b.mozGetAsFile?b.toBlob=function(a,c,d){d&&b.toDataURL&&f?a(f(this.toDataURL(c,d))):a(this.mozGetAsFile("blob",c))}:b.toDataURL&&f&&(b.toBlob=function(a,b,c){a(f(this.toDataURL(b,c)))})),"function"==typeof define&&define.amd?define(function(){return f}):a.dataURLtoBlob=f}(this);

//add md5 js
!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);

//add jquery resize plugin
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);

//add yiyeLib for usually function
(function($){

	var yiyeLib = {
		site : 'http://127.0.0.1:3000',//web主域名
		user : '',//当前用户对象
		postOked : false, //当前书签是否已经提交到服务器端
		cdn : 'http://yiye.qiniudn.com/'
	};
	yiyeLib.testUserUrl = yiyeLib.site + '/api/user/me';
	yiyeLib.userLoginApi = yiyeLib.site + '/api/account/login';
	yiyeLib.showChannelApi = yiyeLib.site + '/api/channel/all';
	yiyeLib.uptoken = yiyeLib.site + '/uptoken';
	yiyeLib.qiniuUpload = "http://up.qiniu.com";
	yiyeLib.postBookmarks = yiyeLib.site + "/api/bookmarks/post";
	yiyeLib.home = yiyeLib.site + "/home";

	//检测用户是否登录
	yiyeLib.testUser = function(callback){
		var  that = this;
		$.get(this.testUserUrl,function(data,status,xhr){
			if(data.code == 0){
					that.user  = data.data;
					callback(data.data);
			}else{
					callback(false);
			}
			
		});
	};

	//用户登录
	yiyeLib.userLogin = function(form,callback){
		if(!this.verificationForm(form)) return false;
		$.post(yiyeLib.userLoginApi,form.serialize(),function(data,status,xhr){
			if(data.code == 0){
				callback(data.data);
			}else{
				yiyeLib.showSigninError(data.msg);
			}
		});
	};

	//本地验证提交数据是否合法
	yiyeLib.verificationForm = function(form){
	    var formArray = form.serializeArray();
	    if(!this.verification.isEmail(formArray[0]['value']))  {this.showSigninError("请输入有效的邮箱地址");return false;}
	    if(!this.verification.len(formArray[1]['value'],6,20)) {this.showSigninError("密码长度为6到20位");return false;}
	    return true;
	}
	//提示注册错误
	yiyeLib.showSigninError = function(err){
	    $("#login-errorInfo").text(err).show();
	}
    //表单验证类
	yiyeLib.verification = {
		//验证email
		isEmail : function(email){
		    var emailModel = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		    if(typeof email !==  "string")  return false;
		    return emailModel.test(email);
		} ,
		//验证字符串位数
		len : function(str,min,max){
		    if(str.length >= min && str.length <= max){
		        return true;
		    }else{
		        return false;
		    }
		}

	};
	
	//关闭popup
	yiyeLib.closePopup = function(){
		window.parent.postMessage({action: 'yiye-closePopup'},'*');
	};
	//向inject请求bookmarks信息
	yiyeLib.initBookmarks = function(){
		window.parent.postMessage({action: 'yiye-initBookmarks'},'*');
	};
	//初始化用户信息
	yiyeLib.initUser = function(){
		$("#main-user-img").attr('src',this.cdn+this.user.avatar);
		$("#main-user-url").attr('href',this.home);		
	}
	//成功页面，用户信息
	yiyeLib.initUserInSuccess = function(){
		$("#success-user-img").attr('src',this.cdn+this.user.avatar);
		$("#success-user-url").attr('href',this.home);		
	}
	//书签完成度验证
	yiyeLib.testBookmarks = function(){
		if(!$("#main-title-content").text()){ $("#bookmark-errorInfo").text("标题不能为空").show();return false;}
		if(!$("#main-description-content").text()){ $("#bookmark-errorInfo").text("描述不能为空").show();return false;}
		if(!$("#main-img-content").attr('src')){ $("#bookmark-errorInfo").text("未选择书签图片").show();return false;}
		return true;
	}
	//设置bookmarks信息
	yiyeLib.setBookmarks = function(item,app){
		this.BookmarksInfo = item;
		this.BookmarksInfo.screenshot = '';
		this.BookmarksInfo.channels = [];
		this.BookmarksInfo.picIndex = -1;
		var that = this;
		app.render("#yiye-main");
		this.initUser();
		$('#main-title-content').text(this.BookmarksInfo.title);
		$('#main-description-content').text(this.BookmarksInfo.description);
		if(this.BookmarksInfo.images.length === 0){
			$('.left').hide();
			$('.right').hide();
			$('main-img-screenShot').show();
		}else{
			$('.left').click(function(){
				switch(that.BookmarksInfo.picIndex){
					case -1:
						that.BookmarksInfo.picIndex = that.BookmarksInfo.images.length -1;
						$('#main-img-screenShot').hide();
						$('#main-img-content').attr('src',that.BookmarksInfo.images[that.BookmarksInfo.picIndex]);
						break;
					case 0:
						that.BookmarksInfo.picIndex--;
						$('#main-img-content').attr('src',that.BookmarksInfo.screenshot);
						$('#main-img-screenShot').show();
						break;
					default:
						that.BookmarksInfo.picIndex--;
						$('#main-img-content').attr('src',that.BookmarksInfo.images[that.BookmarksInfo.picIndex]);
						break;
				}
			});
			$('.right').click(function(){
				switch(that.BookmarksInfo.picIndex){
					case -1:
						that.BookmarksInfo.picIndex++;
						$('#main-img-screenShot').hide();
						$('#main-img-content').attr('src',that.BookmarksInfo.images[that.BookmarksInfo.picIndex]);
						break;
					case that.BookmarksInfo.images.length - 1:
						that.BookmarksInfo.picIndex = -1;
						$('#main-img-content').attr('src',that.BookmarksInfo.screenshot);
						$('#main-img-screenShot').show();
						break;
					default:
						that.BookmarksInfo.picIndex++;
						$('#main-img-content').attr('src',that.BookmarksInfo.images[that.BookmarksInfo.picIndex]);
						break;
				}
			});
		};
		//监听截屏事件
		$('#main-slide-picture').on('click','#main-img-screenShot',function(){
			window.parent.postMessage({action: 'yiye-screenShot'},'*');
		});

		//提交书签
		$('#main-form-submit>button').click(function(){
			if(!that.testBookmarks()){
				return false;
			}
			app.go('yiye.post');
		});

	};

	//设置屏幕截图
	yiyeLib.setScreenshot = function(dataURI){
		$('#main-img-screenShot').remove();
		this.BookmarksInfo.screenshot = dataURI;
		$('#main-img-content').attr('src',this.BookmarksInfo.screenshot);
	};

	//获取已关注的频道
	yiyeLib.showChannel = function(){
		$.get(yiyeLib.showChannelApi,function(data){
			if(data.code == 0){
				$('#post-channel-list').html(yiyeLib.helpers.channelList(data.data));
			}else{
				$('#post-channel-list').html("网络异常");
			}
		})
	};

	//添加频道
	yiyeLib.addChannel = function(channel){
		if(this.BookmarksInfo.channels.length == 0){
			$('#post-channel-selected').empty();
		}
		if(this.BookmarksInfo.channels.length == 5){
			return ;
		}
		if(this.BookmarksInfo.channels.indexOf(channel.data('id')) > -1){
			return ;
		}

		//展示选择的书签
		$('#post-channel-selected').append(yiyeLib.helpers.channelItem(channel));
		
		//选择书签的id加入channels列表
		this.BookmarksInfo.channels.push(channel.data('id'));

	};

	//提交书签
	yiyeLib.saveBookmarks = function(app){
		var bookmarks = {};
		bookmarks.title = $("#main-title-content").text();
		bookmarks.description = $("#main-description-content").text();
		bookmarks.tags = $("#main-form-tags>input").val();
		bookmarks.url = this.BookmarksInfo.url;
		bookmarks.channels = this.BookmarksInfo.channels;
		var that = this;
        this.uploadImg(function(imageName){
        	bookmarks.image = imageName;
        	$.post(yiyeLib.postBookmarks,bookmarks,function(data){
        		if(data.code == 0){
        			that.postResult = data.data;
        		}else{
        			that.postResult = [];
        		}
        		app.go('yiye.success');
        	});
        });    
	}

	//上传图片到云存储
	yiyeLib.uploadImg = function(callback){
		if(this.BookmarksInfo.screenshot !=='' || this.BookmarksInfo.picIndex !== -1){
			var bkImgForm = new FormData();
			var imgPath = 'bImage/';
			if(this.BookmarksInfo.picIndex > -1){
				var image = this.BookmarksInfo.images[this.BookmarksInfo.picIndex];
				var fix = yiyeLib.getImageType(image);
				var imgName = imgPath + (md5(image)).slice(0,16)+(md5(this.BookmarksInfo.title+Date.now())).slice(0,16)+"."+fix;
				var canvas = document.createElement('canvas');
				if (canvas.getContext) {
				    var ctx = canvas.getContext('2d');
				}
				var img = new Image();
				img.onload = function() { 
				    if (img.width != canvas.width) canvas.width = img.width;
				    if (img.height != canvas.height) canvas.height = img.height;
				    ctx.clearRect(0, 0, canvas.width, canvas.height);
				    ctx.drawImage(img, 0, 0);
				    canvas.toBlob(
				        function (blob) {
				        	bkImgForm.append('key', imgName );
				            bkImgForm.append('file', blob, imgName);
				            $.get(yiyeLib.uptoken,function(data){
				            	bkImgForm.append('token', data.uptoken);
				            	$.ajax({
								  url: yiyeLib.qiniuUpload,
								  type: "POST",
								  data: bkImgForm,
								  processData: false,  // 告诉jQuery不要去处理发送的数据
								  contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
								  success:function(data){
					  					callback(data.key)
					  			  }
								});
				            })

				        },
				        'image/'+fix
				    );
				} 
				img.src = image;

			}else{
				var imgName = imgPath + (md5(Math.floor(Math.random()*10000))).slice(0,16)+(md5(this.BookmarksInfo.title+Date.now())).slice(0,16)+".png"
				var blob = window.dataURLtoBlob && window.dataURLtoBlob(this.BookmarksInfo.screenshot);
				bkImgForm.append('key', imgName );
	            bkImgForm.append('file', blob, imgName);
	            $.get(yiyeLib.uptoken,function(data){
	            	bkImgForm.append('token', data.uptoken);
	            	$.ajax({
					  url: yiyeLib.qiniuUpload,
					  type: "POST",
					  data: bkImgForm,
					  processData: false,  // 告诉jQuery不要去处理发送的数据
					  contentType: false,   // 告诉jQuery不要去设置Content-Type请求头
					  success:function(data){
					  		callback(data.key)
					  }
					});
	            })

			}                    
		}else{
       		callback('');
		}
	}

	//判断图片类型
	yiyeLib.getImageType = function(url) {
        var res, suffix = "";
        var imageSuffixes = ["png", "jpg", "jpeg", "gif", "bmp"];
        var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

        if (!url || !suffixMatch.test(url)) {
            return false;
        }
        res = suffixMatch.exec(url);
        suffix = res[1].toLowerCase();
        for (var i = 0, l = imageSuffixes.length; i < l; i++) {
            if (suffix === imageSuffixes[i]) {
                return suffix;
            }
        }
        return false;
    };

    //成功页面
    yiyeLib.showResult = function(){
    	this.initUserInSuccess();
    	var result = this.helpers.resultChannel(this.postResult);
    	$("#success-channel-list").append(result);
    	this.successAnimation();
    }

    //频道搜素
    yiyeLib.serchChannel = function(query){
    	var channel = $("#post-channel-list>li:contains('"+query+"')").clone();
    	if(channel.length == 0) return false;
    	$("#post-channel-list").hide();
    	$("#search-channel-list").show();
    	$("#search-channel-list").html(channel);
    }

    //一叶书签
    yiyeLib.successAnimation = function(){
    	setTimeout(function(){
    		$("#success-animation").addClass("start");
    	},1000);
    }

	//html 代码构造器
	yiyeLib.helpers = {
		channelList  : function(channels){
			console.log(channels);
			var channelList = '';
			for (var i = 0; i < channels.length; i++) {
				channelList += '<li data-id="'+channels[i]['channelId']+'" data-name="'+channels[i]['name']+'"><img src="'+yiyeLib.cdn+'/'+channels[i]['logo']+'-extendChannel" />'+channels[i]['name']+'<button class="btn">添加</button></li>';
			}
			return channelList;
		},
		channelItem : function(channel){
			return "<span data-id='"+ channel.data('id') +"'>" + channel.data('name') + "<i>ⅹ</i></span>";
		},
		resultChannel : function(datas){
			var result = "";
			if(datas instanceof Array){
				for(var i = 0; i < datas.length; i++){
					result +='<li><img src="'+yiyeLib.cdn+'/'+datas[i]["logo"]+'" />'+datas[i]["name"]+'<span class="'+( datas[i]["type"] !== "follower" ? "success" : "wait")+'">'+( datas[i]["type"] !== "follower" ? "成功" : "等待审核")+'</span></li>';
				}
			} else{
				result +="对不起，无法连接服务器。"
			}
			return result;
		}
	};


	$.yiyeLib =  yiyeLib;

})(jQuery);

//three mvc  single control
(function($){
      
    $(function() {
    	var app = $.three('#yiye', function(app) {
      		
    		//初始化主页
    		app.build('yiye.init',function(app){
    			//监听页面关闭事件
    			app.$view().on('click','#main-close, #connect-close,#success-close,#success-button-close',function(){
    				$.yiyeLib.closePopup();
    			});
    			//检测用户是否登录
    			$.yiyeLib.testUser(function(userInfo){
    				if(userInfo){
    					app.go('yiye.main');
    				}else{
    					app.go('yiye.login');
    				}
    			});
    		});

      		//构建登陆主页
	     	app.build('yiye.login',function(app){
	     		app.render("#yiye-login");
	     		$('#login-submit').on('click',function(){
	     			$.yiyeLib.userLogin($('#login-form'),function(data){
	     				app.go('yiye.main');
	     			});
	     		});
	     	});

	     	//主界面
	     	app.build('yiye.main',function(app){
	     		//app.render("#yiye-main");
	     		$.yiyeLib.initBookmarks();
	     	});

        	//post界面
        	app.build('yiye.post',function(app){

        		if(app.isHave('#yiye-post-wrapper')){
        			app.show('#yiye-post-wrapper');
        			return ;
        		}else{
        			app.cover('#yiye-post');
        		}

        		//返回上一页
        		$('#post-back').click(function() {
        			app.hide('#yiye-post-wrapper');
        		});

        		//保存书签
        		$('#post-ok').click(function(){
        			if($.yiyeLib.postOked || ($.yiyeLib.BookmarksInfo.channels.length <= 0)){
        				return false;
        			}
        			$.yiyeLib.postOked = true;
        			$('#post-ok-button').val("提交中..");
        			$.yiyeLib.saveBookmarks(app);
        		});

        		//搜索频道
        		$('#post-search').bind('input', function() {
        			var  query  = $(this).val();
    				if(!query){
    					$("#post-channel-list").show();
    					$("#search-channel-list").hide();
    				}else{
    					$.yiyeLib.serchChannel(query);
    				}
				});

				//监听post-header变化，从而改变布局
				$("#post-header").resize(function(event){
					$("#post-channel").css("top",$(this).height());
				});


				//选择频道
				$("#post-channel-list,#search-channel-list").on('click','.btn',function(){
					$.yiyeLib.addChannel($(this).parent());
				});

				//展示用户订阅频道
				$.yiyeLib.showChannel();

				$('#post-channel-selected').on('click','span i',function(){
					var  channel = $(this).parent();
					var  channelId = channel.data('id');
					var  channelsIndex = $.yiyeLib.BookmarksInfo.channels.indexOf(channelId);
					$.yiyeLib.BookmarksInfo.channels.splice(channelsIndex,1);
					channel.remove();
				});
        	});

        	//success界面
        	app.build('yiye.success',function(app){
        		app.render('#yiye-success');
        		$.yiyeLib.showResult();
        	});

    	});   

    	app.run('yiye.init');
    	//messages from inject js
		window.addEventListener("message", function (e) {
			switch(e.data.action){
				case 'setBookmarks':
					$.yiyeLib.setBookmarks(e.data.item,app);
				break;
				case 'setScreenshot':
					$.yiyeLib.setScreenshot(e.data.dataURI);
				break;
			}
		});
	});
      
})(jQuery);

