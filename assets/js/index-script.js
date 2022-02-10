var mainPhotos = ["https://cdn-japantimes.com/wp-content/uploads/2017/03/p21-nicol-monkeys-a-20170305-e1488613957200.jpg", "https://ak.picdn.net/shutterstock/videos/1060157504/thumb/1.jpg", "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700037674.jpg", "https://getwalls.io/media/large/2020/07/monkey-4k-5k-8k-hd-display-pictures-backgrounds-images-for-whatsapp-mobile-pc-large-1137442621.jpg", "https://media.istockphoto.com/videos/4k-footage-scene-of-monkey-in-bayon-temple-at-angkor-wat-in-cambodia-video-id1176771761?s=640x640"]
document.getElementById("monkey-photo").src = mainPhotos[0]

function toLeft() {
    var currentImage = document.getElementById("monkey-photo").src;
    if (currentImage == mainPhotos[1]) {
        document.getElementById("monkey-photo").src = mainPhotos[0]
    } else if (currentImage == mainPhotos[2]) {
        document.getElementById("monkey-photo").src = mainPhotos[1]
    } else if (currentImage == mainPhotos[3]) {
        document.getElementById("monkey-photo").src = mainPhotos[2]
    } else if (currentImage == mainPhotos[4]) {
        document.getElementById("monkey-photo").src = mainPhotos[3]
    } else if (currentImage == mainPhotos[0]) {
        document.getElementById("monkey-photo").src = mainPhotos[4]
    }
}

function toRight() {
    var currentImage = document.getElementById("monkey-photo").src;
    if (currentImage == mainPhotos[0]) {
        document.getElementById("monkey-photo").src = mainPhotos[1]
    } else if (currentImage == mainPhotos[1]) {
        document.getElementById("monkey-photo").src = mainPhotos[2]
    } else if (currentImage == mainPhotos[2]) {
        document.getElementById("monkey-photo").src = mainPhotos[3]
    } else if (currentImage == mainPhotos[3]) {
        document.getElementById("monkey-photo").src = mainPhotos[4]
    } else if (currentImage == mainPhotos[4]) {
        document.getElementById("monkey-photo").src = mainPhotos[0]
    }
}
document.getElementById("monkey-photo2").src = mainPhotos[0]

function toLeft1() {
    var currentImage = document.getElementById("monkey-photo2").src;
    if (currentImage == mainPhotos[1]) {
        document.getElementById("monkey-photo2").src = mainPhotos[0]
    } else if (currentImage == mainPhotos[2]) {
        document.getElementById("monkey-photo2").src = mainPhotos[1]
    } else if (currentImage == mainPhotos[3]) {
        document.getElementById("monkey-photo2").src = mainPhotos[2]
    } else if (currentImage == mainPhotos[4]) {
        document.getElementById("monkey-photo2").src = mainPhotos[3]
    } else if (currentImage == mainPhotos[0]) {
        document.getElementById("monkey-photo2").src = mainPhotos[4]
    }
}

function toRight1() {
    var currentImage = document.getElementById("monkey-photo2").src;
    if (currentImage == mainPhotos[0]) {
        document.getElementById("monkey-photo2").src = mainPhotos[1]
    } else if (currentImage == mainPhotos[1]) {
        document.getElementById("monkey-photo2").src = mainPhotos[2]
    } else if (currentImage == mainPhotos[2]) {
        document.getElementById("monkey-photo2").src = mainPhotos[3]
    } else if (currentImage == mainPhotos[3]) {
        document.getElementById("monkey-photo2").src = mainPhotos[4]
    } else if (currentImage == mainPhotos[4]) {
        document.getElementById("monkey-photo2").src = mainPhotos[0]
    }
}
document.getElementById("monkey-photo3").src = mainPhotos[0]

function toLeft2() {
    var currentImage = document.getElementById("monkey-photo3").src;
    if (currentImage == mainPhotos[1]) {
        document.getElementById("monkey-photo3").src = mainPhotos[0]
    } else if (currentImage == mainPhotos[2]) {
        document.getElementById("monkey-photo3").src = mainPhotos[1]
    } else if (currentImage == mainPhotos[3]) {
        document.getElementById("monkey-photo3").src = mainPhotos[2]
    } else if (currentImage == mainPhotos[4]) {
        document.getElementById("monkey-photo3").src = mainPhotos[3]
    } else if (currentImage == mainPhotos[0]) {
        document.getElementById("monkey-photo3").src = mainPhotos[4]
    }
}

function toRight2() {
    var currentImage = document.getElementById("monkey-photo3").src;
    if (currentImage == mainPhotos[0]) {
        document.getElementById("monkey-photo3").src = mainPhotos[1]
    } else if (currentImage == mainPhotos[1]) {
        document.getElementById("monkey-photo3").src = mainPhotos[2]
    } else if (currentImage == mainPhotos[2]) {
        document.getElementById("monkey-photo3").src = mainPhotos[3]
    } else if (currentImage == mainPhotos[3]) {
        document.getElementById("monkey-photo3").src = mainPhotos[4]
    } else if (currentImage == mainPhotos[4]) {
        document.getElementById("monkey-photo3").src = mainPhotos[0]
    }
}