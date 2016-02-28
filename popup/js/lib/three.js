//name : Three
//version : 0.1


(function(factory){
  // Support module loading scenarios
  if (typeof define === 'function' && define.amd){
    // AMD Anonymous Module
    define(['jquery'], factory);
  } else {
    // No module loader (plain <script> tag) - put directly in global namespace
    jQuery.three  = window.Three = factory(jQuery);
  }
})(function($){
	var Three = function(view,callback){
		var app = new App();
		app.view = $(view);
		callback(app);
		return app;
	}

	var App = function(){
		this.$view = function(){
			return this.view;
		}
	}

	$.extend(App.prototype,{
		//构建一个页面活状态
		build: function(page,callback) {
			var that = this;
			this.$view().on(page,function(event){
				// that 为app
				callback(that);
			});
		},

		//到达某个页面或是状态
		go: function(page){
			console.log('go:'+page);
			this.$view().trigger(page);
		},

		//运行three 
		run: function(page){
			console.log('run:'+page);
			this.go(page);
		},

		//渲染视图
		render: function(selector){
			this.$view().empty();
			this.$view().append(this.template(selector));
		},

		//获取某个页面模板
		template: function(selector){
			return $(selector).html();
		},

		//向当前视图覆盖层
		cover: function(selector){
			this.$view().append(this.template(selector));
		},

		//隐藏当前视图中的某个层
		hide: function(selector){
			$(selector).hide();
		},

		//展示一个被隐藏的层
		show: function(selector){
			$(selector).show();
		},

		//移除当前视图中的某个层
		remove: function(selector){

		},

		//视图中是否存在某元素
		isHave: function(selector){
			return this.$view().find(selector).length;
		}

	});
	

	return Three;
})