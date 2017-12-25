function thePlanetMarginTop(e) {
    var all = document.getElementsByClassName('thePlanet');

    for (var i = 0; i < all.length; i++) {
        all[i].style.top = e.value + "vw";
    }
}

function thePlanetFontSize(e) {
    var all = document.getElementsByClassName('thePlanet');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

function silhouettesMarginTop(e) {
    var all = document.getElementsByClassName('silhouettes_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}


function silhouettesMargins(e) {
    var all = document.getElementsByClassName('silhouettes_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function silhouetteMargins(e) {
    var all = document.getElementsByClassName('silhouettes_flex_div');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function silhouetteSize(e) {
    var all = document.getElementsByClassName('silhouettes_img');

    for (var i = 0; i < all.length; i++) {
        all[i].style.width = e.value + "vw";
    }
}

function letsMarginTop(e) {
    var all = document.getElementsByClassName('thePlanet2');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}

function letsFontSize(e) {
    var all = document.getElementsByClassName('thePlanet2');

    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = e.value + "vw";
    }
}

//
function silhouette1MarginTop(e) {
    var all = document.getElementById('silhouette1');

    all.style.top = e.value + "vw";
}

function silhouette1MarginLeft(e) {
    var all = document.getElementById('silhouette1');

    all.style.left = e.value + "vw";
}

function silhouette1Height(e) {
    var all = document.getElementById('silhouette1');

    all.style.height = e.value + "vw";
}

//
function silhouette2MarginTop(e) {
    var all = document.getElementById('silhouette2');

    all.style.top = e.value + "vw";
}

function silhouette2MarginLeft(e) {
    var all = document.getElementById('silhouette2');

    all.style.left = e.value + "vw";
}

function silhouette2Height(e) {
    var all = document.getElementById('silhouette2');

    all.style.height = e.value + "vw";
}

//
function silhouette3MarginTop(e) {
    var all = document.getElementById('silhouette3');

    all.style.top = e.value + "vw";
}

function silhouette3MarginLeft(e) {
    var all = document.getElementById('silhouette3');

    all.style.left = e.value + "vw";
}

function silhouette3Height(e) {
    var all = document.getElementById('silhouette3');

    all.style.height = e.value + "vw";
}

//
function silhouette4MarginTop(e) {
    var all = document.getElementById('silhouette4');

    all.style.top = e.value + "vw";
}

function silhouette4MarginLeft(e) {
    var all = document.getElementById('silhouette4');

    all.style.left = e.value + "vw";
}

function silhouette4Height(e) {
    var all = document.getElementById('silhouette4');

    all.style.height = e.value + "vw";
}

//
function silhouette5MarginTop(e) {
    var all = document.getElementById('silhouette5');

    all.style.top = e.value + "vw";
}

function silhouette5MarginLeft(e) {
    var all = document.getElementById('silhouette5');

    all.style.left = e.value + "vw";
}

function silhouette5Height(e) {
    var all = document.getElementById('silhouette5');

    all.style.height = e.value + "vw";
}


function silhouettes2MarginTop(e) {
    var all = document.getElementsByClassName('silhouettes2_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}

function silhouette2Margins(e) {
    var all = document.getElementsByClassName('silhouettes2_flex_div');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}

function silhouettesMiddleMarginTop(e) {
    var all = document.getElementsByClassName('silhouettesM_flex');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = e.value + "vw";
    }
}

function silhouetteMiddleMargins(e) {
    var all = document.getElementsByClassName('silhouettesM_flex_div');

    for (var i = 0; i < all.length; i++) {
        all[i].style.marginLeft = all[i].style.marginRight = e.value + "vw";
    }
}


//
function silhouette21MarginTop(e) {
    var all = document.getElementById('silhouette21');

    all.style.top = e.value + "vw";
}

function silhouette21MarginLeft(e) {
    var all = document.getElementById('silhouette21');

    all.style.left = e.value + "vw";
}

function silhouette21Height(e) {
    var all = document.getElementById('silhouette21');

    all.style.height = e.value + "vw";
}

//
function silhouette22MarginTop(e) {
    var all = document.getElementById('silhouette22');

    all.style.top = e.value + "vw";
}

function silhouette22MarginLeft(e) {
    var all = document.getElementById('silhouette22');

    all.style.left = e.value + "vw";
}

function silhouette22Height(e) {
    var all = document.getElementById('silhouette22');

    all.style.height = e.value + "vw";
}

//
function silhouette23MarginTop(e) {
    var all = document.getElementById('silhouette23');

    all.style.top = e.value + "vw";
}

function silhouette23MarginLeft(e) {
    var all = document.getElementById('silhouette23');

    all.style.left = e.value + "vw";
}

function silhouette23Height(e) {
    var all = document.getElementById('silhouette23');

    all.style.height = e.value + "vw";
}

function silhouettesLineMarginTop(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes_flex_div:after {top: " + e.value + "vw;}";
}

function silhouettesLineMarginLeft(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes_flex_div:after {margin-left: " + e.value + "vw;}";
}

function silhouettesLineWidth(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes_flex_div:after {width: " + e.value + "vw;}";
}

function silhouettesLineThickness(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes_flex_div:after {height: " + e.value + "vw;}";
}

function silhouettes2LineMarginTop(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes2_flex_div:after {top: " + e.value + "vw;}";
}

function silhouettes2LineMarginLeft(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes2_flex_div:after {margin-left: " + e.value + "vw;}";
}

function silhouettes2LineWidth(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes2_flex_div:after {width: " + e.value + "vw;}";
}

function silhouettes2LineThickness(e) {
    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = ".silhouettes2_flex_div:after {height: " + e.value + "vw;}";
}
