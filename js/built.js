  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63064972-1', 'auto');
  ga('send', 'pageview');

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
