$(document).ready(function () {
     var hash = (window.location.hash + "").replace("#","");
    if (hash) {
        var src = $("iframe.video").attr("src");
        $("iframe.video").attr("src", src.replace("135445856", hash));

        // $("iframe.video").after(' <div class="fb-like" data-href="http://amc-redirect.kriek.io/'+hash+'" data-layout="button" data-action="like" data-show-faces="false" data-share="true"></div>');
    }

    $("iframe.video").after(' <button onclick="share();" class="share"></button>');
});

function share() {
	var hash = (window.location.hash + "").replace("#","");
	if (hash === 135445856 || !hash) {
		FB.ui({
	            method: 'feed',
	            picture: 'http://amcfearbox.com/img/cover.jpg',
	            link: 'http://amc-redirect.kriek.io/',
	            // link: 'http://google.com',
	            name: 'Fear The Walking Dead',
	            caption: "AMC",
	            description: 'Az idei nyár legvártabb sorozata. Világpremier: augusztus 24. 03:00/22:00 AMC',
	            source: 'https://vimeo.com/moogaloop.swf?clip_id=135445856',
	            type: 'video',
	      });
	} else {
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
}



