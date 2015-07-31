$(document).ready(function () {
     var hash = (window.location.hash + "").replace("#","");
    if (hash) {
        var src = $("iframe.video").attr("src");
        $("iframe.video").attr("src", src.replace("135038204", hash));
    }
});