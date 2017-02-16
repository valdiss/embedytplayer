$(document).ready(function() {

    $(".trailer").click(function(e) {

        e.preventDefault();
        $.fancybox({
            'padding': 0,
            'type': 'swf',
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });
    });

});
