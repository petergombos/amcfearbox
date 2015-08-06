$(document).ready(function () {
     var hash = (window.location.hash + "").replace("#","");
    if (hash) {
        var src = $("iframe.video").attr("src");
        $("iframe.video").attr("src", src.replace("135445856", hash));

        // $("iframe.video").after(' <div class="fb-like" data-href="http://amc-redirect.kriek.io/'+hash+'" data-layout="button" data-action="like" data-show-faces="false" data-share="true"></div>');
    }
    
    $("iframe.video").after(' <button onclick="share();" class="share">Megosztás</button>');
});

function share() {
	var hash = (window.location.hash + "").replace("#","");
	FB.ui({
            method: 'feed',
            picture: 'http://amcfearbox.com/img/cover.jpg',
            link: 'http://amc-redirect.kriek.io/'+hash,
            // link: 'http://google.com',
            name: 'AMC Fearbox',
            caption: "AMC",
            // description: '',
            source: 'https://vimeo.com/moogaloop.swf?clip_id=' + hash,
            type: 'video',
      });
}



