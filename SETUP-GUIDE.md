#INSTALL GUIDE

##DOWNLOAD
Grab your copy of Simple-Sidebar. You can download it from Github or Bower.

###GIT
Download the package from the [Simple-Sidebar Github Page](https://github.com/dcdeiv/simple-sidebar) or through terminal
`git clone https://github.com/dcdeiv/simple-sidebar`

to update, through your terminal go to the simple-sidebar folder and run this line: `git pull`.

###Bower
Bower is a powerful tool to keep easily track of packages.
To install Bower read [this guide](http://bower.io/#install-bower).

To download the Simple-Sidebar package run this line on your terminal:
`bower install simple-sidebar`.
To update the package run in your terminal `bower update simple-sidebar`.

##SET-UP
Once you got the Simple-Sidebar package, copy the `jquery.simplesidebar.min.js` in the `dist` folder to your server.
Include the file in your page:
**HTML** : `<script src="/path/to/the/plugin/jquery.simplesidebar.min.js"></script>`

###HTML SET-UP
In order to make the plugin work you won't need anything special. You won't need any fancy CSS file. All you will need to make this plugin work is this simple template. (You can use your own, of course).

    <div id="main-wrapper">
      //your content goes here
    </div>
    <div id="top-bar">
      <div id="menu-icon">
      </div>
    </div>
    <div id="sidebar">
      //content of your sidebar
    </div>

`#main-wrapper` (you can choose a class if you want) is necessary to animate the content of your page.
`#top-bar` is the section of your page that will hold the menu-button. It is not necessary. What the plugin needs to fire the function is `#menu-icon` (it can be a picture, a div or whatever you want).
Eventually `#sidebar` is the sidebar itself. You can stylize it as you please! Don't bother positioning it because the plugin will do it for you. However you have to make it more fancy with colors and so on.

###JAVASCRIPT SET-UP
Right before the `</body>` closing tag you have to call the function otherwise it won't work.

    <script>
      $( '#sidebar').simpleSidebar();
    </script>

That's not enough. You have to customize it! That's why I provided some options. For full options list fully commented so you can understand them, you can find the [options.js](dist/options.js) file in the [dist](/dist) folder.

This is an example of options that YOU have to change in order to customize the plug-in:

    $( '#sidebar' ).simpleSidebar({
      settings: {
        opener: '#menu-icon',
        wrapper: '#main-wrapper'
      },
      sidebar: {
        align: 'left',
        width: 250,
        closingLinks: 'a',
        style: {
          zIndex: 100
        }
      }
    });

####To Sum Up
**settings.opener** will call the `#menu-icon` html element;

**settings.wrapper** will call the `#main-wrapper` html element in order to move all elements inside;

**sidebar.align** will align the sidebar to the left or to the right;

**sidebar.width** will set the sidebar width;

**sidebar.closingLinks** will close the sidebar as you click on the element inside the sidebar. In this case, when you click on a link (`a`) the sidebar will close;

**sidebar.style.zIndex** this must be set at an index more than the xIndex you use in your CSS.

####Now the Plugin should work perfectly!
