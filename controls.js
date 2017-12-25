/*
<input id="navMenuTop" type="number" step="0.01" onchange="navMenuTop(this)" /><br/>
        <!-- done -->
        <label>Menu: left margin</label>
        <input id="navMenuLeft" type="number" step="0.01" onchange="navMenuLeft(this)" /><br/>
        <!-- done -->
        <label>Menu: border thickness</label>
        <input id="navMenuBorderThickness" type="number" step="0.01" onchange="navMenuBorderThickness(this)" /><br/>
        <!-- done -->
        <label>Menu: border color</label>
        <input id="navMenuBorderColor" type="color" onchange="navMenuBorderColor(this)" value="#D9D9D9" /><br/>
            
            */

function navMenuTop(e) {
    var all = document.getElementById("menu");
    
    all.style.top = e.value + "vw";
}

function navMenuLeft(e) {
    var all = document.getElementById("menu");
    
    all.style.left = e.value + "vw";
}

function navMenuBorderThickness(e) {
    var all = document.getElementById("menu");
    
    all.style.borderWidth = e.value + "vw";
}

function navMenuBorderColor(e) {
    var all = document.getElementById("menu");
    
    all.style.borderColor = e.value;
}

function navweight(e) {
    var all = document.getElementsByClassName('nav_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.height = e.value + "vw";
    }
}

function navMarginTop(e) {
    var all = document.getElementsByClassName('nav_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}

function navMargins(e) {
    var all = document.getElementsByClassName('nav_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function navFont(e) {
    var all = document.getElementsByTagName('nav');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function navLogoSize(e) {
    var all = document.getElementsByClassName('logo');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function navDivWidth(e) {
    var all = document.getElementsByClassName('nav_flex_div0');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }

    var all = document.getElementsByClassName('nav_flex_div1');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function tuneMarginTop(e) {
    var all = document.getElementsByTagName('h1');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}

function tuneFontSize(e) {
    var all = document.getElementsByClassName('tuneIn');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function octagonsMarginTop(e) {
    var all = document.getElementsByClassName('octagons_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}

function pingsMarginTop(e) {
    var all = document.getElementsByClassName('ping_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.top = e.value + "vw";
    }
}

function pingsMarginBottom(e) {
    var all = document.getElementsByClassName('ping_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.bottom = e.value + "vw";
    }
}

function pingsMarginLeft(e) {
    var all = document.getElementsByClassName('ping_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.left = e.value + "vw";
    }
}

function pingsMarginRight(e) {
    var all = document.getElementsByClassName('ping_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.right = e.value + "vw";
    }
}

function pingsHeight(e) {
    var all = document.getElementsByClassName('ping_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.height = e.value + "vw";
    }
}

//
function ping1MarginTop(e) {
    var all = document.getElementById('octagon_img1');

    all.style.top = e.value + "vw";
}

function ping1MarginLeft(e) {
    var all = document.getElementById('octagon_img1');

    all.style.left = e.value + "vw";
}

function ping1Height(e) {
    var all = document.getElementById('octagon_img1');

    all.style.height = e.value + "vw";
}

function ping2MarginTop(e) {
    var all = document.getElementById('octagon_img2');

    all.style.top = e.value + "vw";
}

function ping2MarginLeft(e) {
    var all = document.getElementById('octagon_img2');

    all.style.left = e.value + "vw";
}

function ping2Height(e) {
    var all = document.getElementById('octagon_img2');

    all.style.height = e.value + "vw";
}

function ping3MarginTop(e) {
    var all = document.getElementById('octagon_img3');

    all.style.top = e.value + "vw";
}

function ping3MarginLeft(e) {
    var all = document.getElementById('octagon_img3');

    all.style.left = e.value + "vw";
}

function ping3Height(e) {
    var all = document.getElementById('octagon_img3');

    all.style.height = e.value + "vw";
}
//

function octagonsMargins(e) {
    var all = document.getElementsByClassName('octagons_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function octagonMargins(e) {
    var all = document.getElementsByClassName('octagons_flex_div');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function octagonSize(e) {
    var all = document.getElementsByClassName('octagon_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function comeMarginTop(e) {
    var all = document.getElementsByClassName('come');

    for (var i = 0; i < all.length; i++) {
        all[i].style.top = e.value + "vw";
    }
}

function comeFontSize(e) {
    var all = document.getElementsByClassName('come');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function circlesMarginTop(e) {
    var all = document.getElementsByClassName('circle_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}

function circlesMargins(e) {
    var all = document.getElementsByClassName('circle_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function circleMargins(e) {
    var all = document.getElementsByClassName('circle_flex_div');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function circleSize(e) {
    var all = document.getElementsByClassName('circle_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function circleTextMarginTop(e) {
    var all = document.getElementsByClassName('circle_text');

    for (var i = 0; i < all.length; i++) {
        all[i].style.top = e.value + "%";
    }
}

function circleTextFontSize(e) {
    var all = document.getElementsByClassName('circle_text');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function footerMarginBottom(e) {
    var all = document.getElementsByTagName('footer');

    for (var i = 0; i < all.length; i++) {
        all[i].style.bottom = e.value + "vw";
    }
}

function footerFontSize(e) {
    var all = document.getElementsByTagName('footer');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function arrowBackgroundBottom(e) {
    var all = document.getElementsByClassName('arrowBack');

    for (var i = 0; i < all.length; i++) {
        all[i].style.bottom = e.value + "vw";
    }
}

function arrowBackgroundRight(e) {
    var all = document.getElementsByClassName('arrowBack');

    for (var i = 0; i < all.length; i++) {
        all[i].style.right = e.value + "vw";
    }
}


function arrowBackgroundWidth(e) {
    var all = document.getElementsByClassName('arrowBack');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function arrowBackgroundHeight(e) {
    var all = document.getElementsByClassName('arrowBack');

    for (var i = 0; i < all.length; i++) {
        all[i].style.height = e.value + "vw";
    }
}

function arrowBottom(e) {
    var all = document.getElementsByClassName('arrow');

    for (var i = 0; i < all.length; i++) {
        all[i].style.bottom = e.value + "vw";
    }
}

function arrowRight(e) {
    var all = document.getElementsByClassName('arrow');

    for (var i = 0; i < all.length; i++) {
        all[i].style.right = e.value + "vw";
    }
}


function arrowWidth(e) {
    var all = document.getElementsByClassName('arrow');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function arrowHeight(e) {
    var all = document.getElementsByClassName('arrow');

    for (var i = 0; i < all.length; i++) {
        all[i].style.height = e.value + "vw";
    }
}
