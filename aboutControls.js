function headerTop(e) {
    var all = document.getElementsByTagName('h1');

    for (var i = 0; i < all.length; i++) {
        all[i].style.top = e.value + "vh";
    }
}

function headerFontSize(e) {
    var all = document.getElementsByTagName('h1');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function articleTop(e) {
    var all = document.getElementsByTagName('article');

    for (var i = 0; i < all.length; i++) {
        all[i].style.top = e.value + "vh";
    }
}

function articleLeft(e) {
    var all = document.getElementsByTagName('article');

    for (var i = 0; i < all.length; i++) {
        all[i].style.left = e.value + "vw";
    }
}

function articleWidth(e) {
    var all = document.getElementsByTagName('article');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

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

function listMarginTop(e) {
    var all = document.getElementsByTagName('ul');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vh";
    }
}

function listPaddingLeft(e) {
    var all = document.getElementsByTagName('ul');

    for (var i = 0; i < all.length; i++) {
        all[i].style.paddingLeft = e.value + "vw";
    }
}