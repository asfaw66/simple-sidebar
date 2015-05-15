simple-sidebar
==============
A simple jQuery sidebar plugin

With this simple plug-in you can choose to use the right-sidebar or the left-sidebar and switch from one to the other in just one type! [see options](#options).

<a href="https://flattr.com/submit/auto?user_id=dcdeiv&url=http%3A%2F%2Fwww.github.com%2Fdcdeiv%2Fsimple-sidebar" target="_blank"><img src="http://button.flattr.com/flattr-badge-large.png" alt="Flattr this" title="Flattr this" border="0"></a>

## A *much more simpler* fork: [simpler-sidebar](http://www.github.com/dcdeiv/simpler-sidebar)!

## DEMO:
* [DEMO](http://dcdeiv.github.io/simple-sidebar);
* [Right-Sidebar DEMO](http://dcdeiv.github.io/simple-sidebar/demo-right/index.html);
* [Left-Sidebar DEMO](http://dcdeiv.github.io/simple-sidebar/demo-left/index.html);
* [AJAX](http://dcdeiv.github.io/simple-sidebar/demo-ajax/index.html);
* [Material-Designed](http://materialdesigned.tumblr.com/)

## DOWNLOAD
* **Git**: `git clone https://github.com/dcdeiv/simple-sidebar`;
* **Bower**: `bower install simple-sidebar`;
* **npm**: `npm install simple-sidebar`.

## SET-UP
In order to let the plugin work, you have to set up this template.
It does not matter what classes or id you will choose.

	//position-relative
	<div id="wrapper">
		//all your content must go here.
		//Every POSITION-FIXED ELEMENT must be positioned outside of this wrapper.
		//Every POSITION-ABSOLUTE ELEMENT must be positioned inside a POSITION-RELATIVE div.
	</div>
	
	//position-fixed to top
	<div id="navbar">
		<span id="button" class="icon icon-whatever"></span>
	</div>
	
	//position-fixed to left or right
	<div id="sidebar" class="sidebar sidebar-whatever">
		//content of your sidebar
		<a class="close-sidebar" href="#">Link</a>
		<a class="close-sidebar" href="#">Link</a>
		<a class="close-sidebar" href="#">Link</a>
		<a class="close-sidebar" href="#">Link</a>
	</div>
	
Include the minified version of this plugin and run the function with at least these options:
	
	<script src="path/to/simple-sidebar/jquery.simplesidebar.min.js"></script>
	<script>
		$('#sidebar').simpleSidebar({
			opener: '#button',
			wrapper: '#wrapper',
			sidebar: {
				align: 'right' //or 'left' - This option can be ignored, the sidebar will authomatically align to right.
				width: 300 //You can ingnore this option, the sidebar will authomatically size itselt to 300px.
				closingLinks: '.close-sidebar' // If you ignore this option, the plugin will lool for all links and can be buggy. Choose a class for every object inside the sidebar that once clicked will close the sidebar.
				css: {
					//Here you can add more css rules but you should use your own stylesheet.
					zIndex: 3000 //Choose the amount of zIndex you want. It must be the higher zIndex number.
				}
			}
		});
	</script>
	
## OPTIONS
This is a full list of options.
You can override the single option by using the plugin api or directly in the function.
To override options directly in the function see [Set-Up](#set-up).

### How to use the public access to plugin options:
The base api is `$.fn.simpleSidebar.settings` see [option list](#option-list) to the full list of apis available.
	
		$.fn.simpleSidebar.settings.opener = '#button';
		$.fn.simpleSidebar.settings.wrapper = '#wrapper';
		$.fn.simpleSidebar.settings.sidebar.align = 'right';
		$.fn.simpleSidebar.settings.sidebar.width = '300';
		$.fn.simpleSidebar.settings.sidebar.closingLinks = '.clode-sidebar';
		$.fn.simpleSidebar.settings.sidebar.css.zIndex = '3000';
		
		$( '#sidebar' ).simpleSidebar();

If you want to override multiple options:
This way can be buggy, especially when you try to override `sidebar`, the plugin will crash.

		$.fn.simpleSidebar.settings.mask.css = {
			//your style
		};
	
### Option List:
* **opener**: is the selector for the button/icon that will trigger the animation, see [Set-Up](#set-up);
* **wrapper**:
* **ignore**
* **add**
* **attr**: is the `data-*` attribute to make the plugin works. If `ssbplugin` is somehow causing you issues, you can change it;
* **top**: is the `position-top` of the entire plugin. You can choose whatever number you want (better if you choose it according to the navbar's height) or let it to be 0;
* **animation**
 * **duration**: the duration of the animation in milliseconds;
 * **easing**: the type of animation. For more animations include the `jQuery-UI` library and check out [this page](https://jqueryui.com/easing/). I strongly suggest not to play with easing because they haven't been tested all yet. I suggest to use simple easing like `easeOutQuint`;
* **sidebar**
 * **align**: default is `undefined` which means that is aligned to the *right*, if you want to align it to the left, wright `left`;
 * **width**: the max width of the sidebar, this option is default to 350, please change it as you please;
 * **gap**: the gap is the space between the left margin of the sidebar and the left side of the window. It is useful when you position the plugin `top: 0`, so that the user can click that space to close the sidebar;
 * **closingLinks**: are all links or elements that close the sidebar. I suggest to choose a class and give it to all links and other elements such as icons, banner, images, etc, that are links. By default it is `a` so every link in the sidebar will close the sidebar;
 * **css** here you can store all css, anyway I suggest not to add more css attributes to the one below;
 * **zIndex**: by default is is 3000 but you have to change it to the higher z-index number in your css plus 1;
* **subWrapper**
 * **display**: `true` or `false` false will remove this option;
 * **css**: here tou can store all css attributes to give the subWrapper. However I suggest to do it in your stylesheet except for these below. You can call this by its data attribute ex: `[data-ssbplugin="subwrapper"]`;
   * **position**: 'relative';
   * **height**: '100%';
   * **overflowY**: 'auto';
   * **overflowX**: 'hidden';
* **mask**:
 * **display**:  `true` or `false` false will remove this option;
 * **css**: here you can store all css attributes to give the mask div. However I suggest to do it in your css file except for these below. You can call this div by its data attribute ex: `[data-ssbplugin="mask"]`;
   * **backgroundColor**: the color of the mask. By default is `'black'`;
   * **opacity**: by default is 0.5;
   * **filter**: IE opacity 0.5 = 50 and so on: `'Alpha(opacity=50)'`.

## Enjoy!
