$(document).ready(function () {
     var hash = (window.location.hash + "").replace("#","");
    if (hash) {
        var src = $("iframe.video").attr("src");
        $("iframe.video").attr("src", src.replace("135445856", hash));

        $("iframe.video").after(' <div class="fb-like" data-href="http://amc-redirect.kriek.io/'+hash+'" data-layout="button" data-action="like" data-show-faces="false" data-share="true"></div>');
    } else {
        $("iframe.video").after(' <div class="fb-like" data-href="http://amc-redirect.kriek.io/135445856" data-layout="button" data-action="like" data-show-faces="false" data-share="true"></div>');
    }
});