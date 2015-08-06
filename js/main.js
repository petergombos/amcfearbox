$(document).ready(function () {
     var hash = (window.location.hash + "").replace("#","");
    if (hash) {
        var src = $("iframe.video").attr("src");
        $("iframe.video").attr("src", src.replace("135445856", hash));

        $("iframe.video").after(' <div class="fb-like" data-href="http://amc-redirect.kriek.io/'+hash+'" data-layout="button" data-action="like" data-show-faces="false" data-share="true"></div>');
        $("iframe.video").after(' <button onclick="share();">share</button>');
    } else {
        $("iframe.video").after(' <div class="fb-like" data-href="http://amc-redirect.kriek.io/135445856" data-layout="button" data-action="like" data-show-faces="false" data-share="true"></div>');
        $("iframe.video").after(' <button onclick="share();">share</button>');
    }
});

function share() {
	FB.ui({
            method: 'feed',
            picture: 'https://amcfearbox.com/img/cover.jpg',
            link: 'http://amc-redirect.kriek.io/134951164',
            name: 'AMC Fearbox',
            description: 'This is a description',
            source: 'https://player.vimeo.com/video/134951164',
            type: 'video',
      });
}



