//GET latest release
(function($) {
    $.fn.URLrelease = function( repo, ball ) {
        return this.each(function() {
            var $a, type, api,
                $element = $( this );

            api = 'https://api.github.com/repos/dcdeiv/' + repo + '/releases/latest';

            if ( 'a' !== $element ) {
                $a = $element.children().filter( 'a' );
            } else {
                $a = $element;
            }

            $.getJSON(api, function( data ) {
                if ( undefined === ball ) {
                    $a.attr({
                        href: data.html_url,
                        target: '_blank'
                    });
                } else if ( 'tar' === ball ) {
                    $a.attr('href',data.tarball_url);
                } else if ( 'zip' === ball ) {
                    $a.attr('href',data.zipbal_url);
                }
            });
        });
    };
})(jQuery);
