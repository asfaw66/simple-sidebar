;(function ( $, window, document, undefined ) {
	"use strict";

		// Set plugin name and default options
		var pluginName = "simpleSidebar",
			publicOptions = {
				attr: "simplersidebar",
				init: "opened",
				animation: {
					duration: 500,
					easing: "swing"
				},
				sidebar: {
					gap: 64,
					closingLinks: "a",
					css: {
						width: 300,
						zIndex: 3000
					}
				}
			},
			privateOptions = {
				sidebar: {
					css: {
						position: "fixed",
						top: 0,
						bottom: 0
					}
				}
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
			this.cfg = $.extend( true, publicOptions, options );
			this._publicCfgs = publicOptions;
			this._privateCfgs = privateOptions;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {
				var w = $( window ).width(),
					sidebarWidth = this.setSidebarWidth( w );

				console.log(sidebarWidth);

				$(window).resize(function(){
					var w = $( window ).width(),
						sidebarWidth = this.setSidebarWidth( w );

					console.log(sidebarWidth);
				});
			},

			setSidebarWidth: function( windowWidth ) {
				var sidebarMaxWidth = this.cfg.sidebar.css.width + this.cfg.sidebar.gap;

				if ( windowWidth < sidebarMaxWidth ) {
					return windowWidth - this.cfg.sidebar.gap;
				} else {
					return this.cfg.sidebar.css.width;
				}
			},

			// For development
			printToConsole: function() {
				for ( var i = 0; i < arguments.length; i++ ) {
					console.log( arguments[i] );
				}
			}
		} );

		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
					if ( !$.data( this, "plugin_" + pluginName ) ) {
						$.data( this, "plugin_" +
							pluginName, new Plugin( this, options ) );
					}
			} );
		};

} )( jQuery, window, document );
