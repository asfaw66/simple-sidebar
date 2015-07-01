# Simple-Sidebar
[![Flattr Button](https://button.flattr.com/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=dcdeiv&url=https%3A%2F%2Fgithub.com%2Fdcdeiv%2Fsimple-sidebar)

A simple jQuery sidebar.

* [Simple-Sidebar Home Page](http://dcdeiv.github.io/simple-sidebar)
* A *much more simpler* fork: [simpler-sidebar](http://www.github.com/dcdeiv/simpler-sidebar)!

## Getting Started
Download the [production version][min] of the [development version][max].

[min]: https://raw.github.com/dcdeiv/simple-sidebar/master/dist/simple-sidebar.min.js
[max]: https://raw.github.com/dcdeiv/simple-sidebar/master/dist/simple-sidebar.js

Simple-Sidebar is also available via **NPM** and **Bower**:

* `bower install simple-sidebar`.
* `npm install simple-sidebar`.

In order to let simple-sidebar work, you have to set up this template. Classes and Ids are at your discretion.

```html
<div id="wrapper">
	<!--
	All your content must go here.
	This wrapper must be relative posizioned, unless Simple-Sidebar won't work properely.
	* Every POSITION-FIXED ELEMENT must be positioned outside of this wrapper.
	* Every POSITION-ABSOLUTE ELEMENT must be positioned inside a POSITION-RELATIVE div.
	-->
</div>

<div id="navbar">
	<!--
	#navbar is positioned fixed.
	It does not matter what element is this, give it a selector.
	-->
	<span id="toggle-sidebar" class="button icon"></span>
</div>

<div id="sidebar">
	<!--
	Simple-Sidebar will handle #sidebar's positioning.
	Links below are just an example. Give each clickable element, for example links, a class to trigger the closing animation.
	-->
	<a class="close-sidebar" href="#">Link</a>
	<a class="close-sidebar" href="#">Link</a>
	<a class="close-sidebar" href="#">Link</a>
	<a class="close-sidebar" href="#">Link</a>
</div>
```

At the bottom of the web page, just before the `</body>` tag, include the **jQuery** library, if you are interested in better *easing*, include the **jQuery-UI** library too. Eventually include Simple-Sidebar.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="simple-sidebar/dist/jquery.simple-sidebar.min.js"></script>
```

Call the Simple-Sidebar plug-in function and fill it with the options you need. Here is an example of some required options.

```html
<script>
	$(document).ready(function() {
		$('#sidebar').simpleSidebar({
			opener: '#button',
	        wrapper: '#wrapper',
	        sidebar: {
	            align: 'right' //or 'left' - This option can be ignored, the sidebar will authomatically align to right.
	            width: 300 //You can ignore this option, the sidebar will authomatically size itself to 300px.
	            closingLinks: '.close-sidebar' // If you ignore this option, the plugin will look for all links and this can be buggy. Choose a class for every object inside the sidebar that once clicked will close the sidebar.
	            css: {
	                //Here you can add more css rules but you should use your own stylesheet.
	                zIndex: 3000 //Choose the amount of zIndex you want. It must be the higher zIndex number.
	            }
        	}
		});
	});
</script>
```

## Options
This is a full list of options.
You can override the single option by using the plug-in API or directly in the function.

### How to use the public access to plug-in options:
The base API is `$.fn.simpleSidebar.settings` see [option list](#option-list) to the full list of apis available.

```javascript
$.fn.simpleSidebar.settings.opener = '#button';
$.fn.simpleSidebar.settings.wrapper = '#wrapper';
$.fn.simpleSidebar.settings.sidebar.align = 'right';
$.fn.simpleSidebar.settings.sidebar.width = '300';
$.fn.simpleSidebar.settings.sidebar.closingLinks = '.clode-sidebar';
$.fn.simpleSidebar.settings.sidebar.css.zIndex = '3000';

$( '#sidebar' ).simpleSidebar();
```

Overriding multiple options can be buggy, especially when you try to override `sidebar`, the plug-in will crash.

```javascript
$.fn.simpleSidebar.settings.mask.css = {
	//your style
};
```

### Option List:
* **opener**: selector for the button/icon that will trigger the animation.
* **wrapper**: selector for the content of your entire website except all elements that are positioned fixed (for example `#navbar` and `#sidebar`), position absolute elements inside this wrapper must be wrapped inside a div with `position:relative` attribute.
* **ignore**: selector for all elements that must be ignored.
* **add**: selector for all elements that must be added if the plugin is ignoring them accidentally.
* **attr**: the `data-*` attribute to make the plug-in works. If `ssbplugin` is somehow causing you issues, you can change it.
* **animation**
  * **duration**: the duration of the animation in milliseconds.
  * **easing**: the type of animation. For more animations include the *jQuery-UI* library and check out [this page](https://jqueryui.com/easing/). I strongly suggest not to play with easing because they haven't been tested all yet. I suggest to use simple easing like `easeOutQuint`.
* **sidebar**
  * **align**: default is `undefined` which means that is aligned to *right*. If you want to align it to left, wright `left`.
  * **width**: the max width of the sidebar, this option is default to 300, please change it as you please.
  * **gap**: the gap is the space between the left margin of the sidebar and the left side of the window (and viceversa). It is useful so that the user can click that space to close the sidebar.
  * **closingLinks**: are all links or elements that close the sidebar. I suggest to choose a class and give it to all links and other elements such as icons, banner, images, etc, that are links or that are supposed to be clicked. By default it is `a` so every link in the sidebar will close the sidebar.
  * **css** here you can store all css, anyway I suggest not to add more css attributes to the one below.
    * **zIndex**: by default is is 3000 but you have to change it to the higher z-index number in your css plus 1.
* **sbWrapper**
 * **display**: `true` or `false`. `false` will remove this option.
 * **css**: here you can store all css attributes to give the sbWrapper. However I suggest to do it in your stylesheet except for these below. You can call this by its data attribute ex: `[data-ssbplugin="sbwrapper"]`.
   * **position**: 'relative'.
   * **height**: '100%'.
   * **overflowY**: 'auto'.
   * **overflowX**: 'hidden'.
* **mask**:
  * **display**: `true` or `false` false will remove this option.
  * **css**: here you can store all css attributes to give the mask div. However I suggest to do it in your css file except for these below. You can call this div by its data attribute ex: `[data-ssbplugin="mask"]`.
    * **backgroundColor**: the color of the mask. By default is `'black'`.
    * **opacity**: by default is 0.5.
    * **filter**: IE opacity 0.5 = 50 and so on: `'Alpha(opacity=50)'`.

## Release History

* **v2.1.3** (2015-07-01) -
  * Add Grunt. Simple-Sidebar files are moved to `/dist` and are renamed to *jquery.simple-sidebar.js* and *jquery.simple-sidebar.min.js*.
  * Add `/test` folder to better handle actual browser tests.
  * Add jQuery v1~ as dependency of NPM and Bower.
  * Fix #10, and animations functions.
  * Changed *subWrapper* option to *sbWrapper*.
* **v2.0.5** (2015-05-17) - FIXED: right align bug and resize bug.
* **v2.0.4** (2015-05-16) -
  * Animating LEFT and RIGHT instead of margins.
  * Fixed closingLinks AJAX and onResize bug.
* **v2.0.0** (2015-05-15) -
  * Provided public access to options: `$.fn.simpleSidebar.settings`.
  * Users can now disable *subWrapper* and *mask* (see #6).
  * Now you can download simple-sidebar via npm: `npm install simple-sidebar`.
  * Changed `data` to `attr`.
  * Added `add`, `subWrapper.display`, `mask.display`.
  * Fixed absolute elements inside `wrapper` that moved twice.
* **v1.2.2** (2015-05-07) -
  * Changed `sidebar.style` to `sidebar.css` and `mask.style` to `mask.css`.
  * Added `subWrapper.css` and `subwrapper.css.position: 'relative'`.
* **v1.1.2** (2015-03-21) - Fixed #5. Removed #4.
* **v1.1.0** (2014-10-01) - Fixed maskDiv double-click.
* **v1.0.3** (2014-08-04) - Fixed issue #3.
