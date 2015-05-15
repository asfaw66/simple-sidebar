//Simple Sidebar v2.0.0
//http://www.github.com/dcdeiv/simple-sidebar
// GPLv2 http://www.gnu.org/licenses/gpl-2.0-standalone.html
(function($) {
    $.fn.simpleSidebar = function(options) {
        var opts = $.extend(true, $.fn.simpleSidebar.settings, options);

        return this.each(function() {
            var align, ssbCSS, ssbStyle, maskCSS, maskStyle, sbw,
                attr = opts.attr,
                $sidebar = $(this),
                $btn = $(opts.opener),
                $wrapper = $(opts.wrapper),
                $ignore = $(opts.ignore),
                $add = $(opts.add),
                $links = $(opts.sidebar.closingLinks),

                duration = opts.animation.duration,
                easing = opts.animation.easing,

                sbMaxW = opts.sidebar.width,
                gap = opts.sidebar.gap,
                winMaxW = sbMaxW + gap,

                w = $(window).width(),

                animationStart = {},
                animationReset = {},

                overflowFalse = function() {
                    $('body, html').css({
                        overflow: 'hidden'
                    });
                },
                overflowTrue = function() {
                    $('body, html').css({
                        overflow: 'auto'
                    });
                },

                $subWrapper = $('<div>')
                .attr('data-' + attr, 'subwrapper')
                .css(opts.subWrapper.css),

                $mask = $('<div>')
                .attr('data-' + attr, 'mask'),

                //defining elements to move
                $siblings = $wrapper.siblings().not('script noscript'),
                $elements = $wrapper.not($ignore)
                .not($mask)
                .add($siblings)
                .add($sidebar)
                .add($add);

            //Mask plugin style
            maskCSS = {
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: opts.sidebar.css.zIndex - 1,
                display: 'none'
            };
            maskStyle = $.extend(true, maskCSS, opts.mask.css);

            //Appending Mask if mask.display is true
            if (true === opts.mask.display) {
                $mask.appendTo('body')
                    .css(maskStyle);
            }

            //Defining initial Sidebar width
            if (w < winMaxW) {
                sbw = w - gap;
            } else {
                sbw = sbMaxW;
            }

            //Sidebar plugin style
            ssbCSS = {
                position: 'fixed',
                top: 0,
                bottom: 0,
                width: sbw
            };

            //Checking sidebar align
            if (opts.sidebar.align === undefined || opts.sidebar.align === 'right') {
                align = 'right';
            } else if (opts.sidebar.align === 'left') {
                align = 'left';
            }

            //pushing align to ssbCSS
            ssbCSS[align] = -sbw;

            //Overriding user style
            ssbStyle = $.extend(true, ssbCSS, opts.sidebar.css);

            //Sidebar initial status
            $sidebar.css(ssbStyle)
                .attr('data-' + attr, 'disabled');

            //Wrapping sidebar inner content if wrapInner.display is TRUE
            if (true === opts.subWrapper.display) {
                $sidebar.wrapInner($subWrapper);
            }

            //Animating the sidebar
            $btn.click(function() {
                //Checking if sidebar is active or disabled
                var isWhat = $sidebar.attr('data-' + attr),
                    csbw = $sidebar.width();

                //Defining what margins must be animated
                if ('right' === align) {
                    animationStart = {
                        marginRight: '+=' + csbw,
                        marginLeft: '-=' + csbw
                    };
                    animationReset = {
                        marginRight: '-=' + csbw,
                        marginLeft: '+=' + csbw
                    };
                } else if ('left' === align) {
                    animationStart = {
                        marginRight: '-=' + csbw,
                        marginLeft: '+=' + csbw
                    };
                    animationReset = {
                        marginRight: '+=' + csbw,
                        marginLeft: '-=' + csbw
                    };
                }

                if ('disabled' === isWhat) {
                    $elements.animate(animationStart, {
                        duration: duration,
                        easing: easing,
                        complete: overflowFalse
                    });

                    $sidebar.attr('data-' + attr, 'active');

                    $mask.fadeIn(duration);

                } else if ('active' === isWhat) {
                    $elements.animate(animationReset, {
                        duration: duration,
                        easing: easing,
                        complete: overflowTrue
                    });

                    $sidebar.attr('data-' + attr, 'disabled');

                    $mask.fadeOut(duration);
                }
            });

            //Closing Sidebar
            $links.add($mask).each(function() {
                $(this).click(function() {
                    var isWhat = $sidebar.attr('data-' + attr),
                        csbw = $sidebar.width();

                    //Redefining animationReset
                    if ('right' === align) {
                        animationReset = {
                            marginRight: '-=' + csbw,
                            marginLeft: '+=' + csbw
                        };
                    } else if ('left' === align) {
                        animationReset = {
                            marginRight: '+=' + csbw,
                            marginLeft: '-=' + csbw
                        };
                    }

                    if (isWhat === 'active') {

                        $elements.animate(animationReset, {
                            duration: duration,
                            easing: easing,
                            complete: overflowTrue
                        });

                        $sidebar.attr('data-' + attr, 'disabled');

                        $mask.fadeOut(duration);
                    }
                });
            });

            //Adjusting width and resetting sidebar on window resize
            $(window).resize(function() {
                var rsbw,
                    isWhat = $sidebar.attr('data-' + attr),
                    nw = $(window).width();

                if (nw < winMaxW) {
                    rsbw = nw - gap;
                } else {
                    rsbw = sbMaxW;
                }

                //Redefining animationReset
                if ('right' === align) {
                    animationReset = {
                        marginRight: '-=' + rsbw,
                        marginLeft: '+=' + rsbw
                    };
                } else if ('left' === align) {
                    animationReset = {
                        marginRight: '+=' + rsbw,
                        marginLeft: '-=' + rsbw
                    };
                }

                if (isWhat === 'active') {

                    $elements.animate(animationReset, {
                        duration: duration,
                        easing: easing,
                        complete: overflowTrue
                    });

                    $sidebar.attr('data-' + attr, 'disabled');

                    $mask.fadeOut(duration);
                }


            });
        });
    };

    $.fn.simpleSidebar.settings = {
        opener: undefined,
        wrapper: undefined,
        ignore: undefined,
        add: undefined,
        attr: 'ssbplugin',
        animation: {
            duration: 500,
            easing: 'swing'
        },
        sidebar: {
            align: undefined,
            width: 300,
            gap: 64,
            closingLinks: 'a',
            css: {
                zIndex: 3000
            }
        },
        subWrapper: {
            display: true,
            css: {
                position: 'relative',
                height: '100%',
                overflowY: 'auto',
                overflowX: 'hidden'
            }
        },
        mask: {
            display: true,
            css: {
                backgroundColor: 'black',
                opacity: 0.5,
                filter: 'Alpha(opacity=50)'
            }
        }
    };
})(jQuery);
