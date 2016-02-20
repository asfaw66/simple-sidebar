/*! simple-sidebar v3.0.0 (https://github.com/dcdeiv/simple-sidebar)
** Copyright (c) 2014 - 2016 Davide Di Criscito
** Dual licensed under MIT and GPL-2.0
*/
;(function ( $, window, document, undefined ) {
	"use strict";

		// Set plugin name and default options
		var pluginName = "simpleSidebar",
			publicOptions = {
				propertyName: "value"
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
			this.settings = $.extend( {}, publicOptions, options );
			this._publicOptions = publicOptions;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {

				printToConsole( this );
			},
			printToConsole: function( e ) {
				console.log( e );
			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
					if ( !$.data( this, "plugin_" + pluginName ) ) {
						$.data( this, "plugin_" +
							pluginName, new Plugin( this, options ) );
					}
			} );
		};

} )( jQuery, window, document );
