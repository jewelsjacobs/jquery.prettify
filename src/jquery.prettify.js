/**
 * Created with JetBrains WebStorm.
 * User: jjacobs
 * Date: 5/15/13
 * Time: 6:53 PM
 * To change this template use File | Settings | File Templates.
 */

(function ($) {

    $.fn.prettify = function (o, obj) {

        // Set up options (and defaults)
        o = (o) ? o: {
            highlight : false
        };

        this.each(function() {
            var i = $(this);
            var json = JSON.stringify (obj, undefined, 4);
            format(i, json, o.highlight);
        });

        return this;
    };


    var format = function (el, json, highlight){
        if (highlight) {
            el.append($('<pre />').html(syntaxHighlight(json)));
        } else {
            el.append($('<pre />').html(json));
        }
    };

    function syntaxHighlight (json) {
        json = json.replace (/&/g, '&amp;').replace (/</g, '&lt;').replace (/>/g, '&gt;');
        return json.replace (/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
                             function (match) {
                                 var cls = 'number';
                                 if (/^"/.test (match)) {
                                     if (/:$/.test (match)) {
                                         cls = 'key';
                                     } else {
                                         cls = 'string';
                                     }
                                 } else if (/true|false/.test (match)) {
                                     cls = 'boolean';
                                 } else if (/null/.test (match)) {
                                     cls = 'null';
                                 }
                                 return '<span class="' + cls + '">' + match + '</span>';
                             });
    }
})(jQuery);