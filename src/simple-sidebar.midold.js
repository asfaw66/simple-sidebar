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
				var $sidebar = $( this.element ),
					windowWidth = $( window ).width(),
					sidebarWidth = this.setSidebarWidth(
						windowWidth
					);

				$sidebar.css(
					this.setSidebarCSS( sidebarWidth )
				);
			},
			resize: function() {
				$( window ).resize( function() {
					windowWidth = $( window ).width(),
					sidebarWidth = this.setSidebarWidth(
						windowWidth
					);
					
					$sidebar.css(
						this.setSidebarCSS( sidebarWidth )
					);
				});
			},

			// Initialize sidebar css
			setSidebarCSS: function( sidebarWidth ) {
				var privateCSS = this._privateCfgs.sidebar.css,
					customCSS = this.cfg.sidebar.css;

				this.initAlign( sidebarWidth );
				this.injectPrivateStyle( "width", sidebarWidth );

				return $.extend( {}, customCSS, privateCSS );
			},

			// Fix sidebar alignment
			initAlign: function( sidebarWidth ) {
				this.injectPrivateStyle(
					this.checkAlign(), -sidebarWidth
				);
			},

			// Check sidebar alignment
			checkAlign: function() {
				var isRight = [
						undefined,
						"right"
					];

				if ( isRight.indexOf( this.cfg.align ) !== -1 ) {
					return "right";
				} else {
					return "left";
				}
			},

			// Set and fix sidebar width
			setSidebarMaxWidth: function() {
				return this.cfg.sidebar.css.width + this.cfg.sidebar.gap;
			},
			setSidebarWidth: function( windowWidth ) {
				if ( windowWidth < this.setSidebarMaxWidth() ) {
					return windowWidth - this.cfg.sidebar.gap;
				} else {
					return this.cfg.sidebar.css.width;
				}
			},

			injectPrivateStyle: function( key, value ) {
				this._privateCfgs.sidebar.css[ key ] = value;
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
