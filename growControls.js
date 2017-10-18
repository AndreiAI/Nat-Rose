function articleFontSize(e) {
    var all = document.getElementsByTagName('article');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function paragraphsMarginsTB(e) {
    var all = document.getElementsByTagName('p');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = all[i].style.marginBottom = e.value + "vh";
    }
}

function image1MarginsTopDown(e) {
    var all = document.getElementsByClassName('img1');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = all[i].style.marginBottom = e.value + "vh";
    }
}

function image1Width(e) {
    var all = document.getElementsByClassName('img1');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function image1Height(e) {
    var all = document.getElementsByClassName('img1');

    for (var i = 0; i < all.length; i++) {
        all[i].style.height = e.value + "vh";
    }
}

function image2MarginsTopDown(e) {
    var all = document.getElementsByClassName('img2');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = all[i].style.marginBottom = e.value + "vh";
    }
}

function image2Width(e) {
    var all = document.getElementsByClassName('img2');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function image2Height(e) {
    var all = document.getElementsByClassName('img2');

    for (var i = 0; i < all.length; i++) {
        all[i].style.height = e.value + "vh";
    }
}
