$(document).ready(function() {

    //media cards
    profileImages = ["picA.jpeg", "picB.jpeg", "picC.jpeg"]
    mediaImages = ["fb.png", "github.png", "linkedin.png"]
    text = ["Friend me on", "Checkout My Work on", "Add me on"]
    urls = ["https://www.facebook.com/login", "https//github.com/lbarberiscanoni", "https://www.linkedin.com/in/lorenzo-barberis-canonico-612734aa"]
    alts = ["facebook logo", "github icon", "linkedin logo"]

    for (i = 0; i < profileImages.length; i++) {
        $(".columns#af").append("<div class='column'><div class='card'><div class='.card-image'><figure class='image'><img src='images/" + profileImages[i] + "'></img></figure></div><div class='card-content'><div class='media-content'><p class='title is-4 text-center'>" + text[i] + "</p><a href='" + urls[i] + "' target='blank'><img src='images/" + mediaImages[i] + "' alt='" + alts[i] + "' class='image is-128x128'></a></div></div></div></div>");
    };
});
