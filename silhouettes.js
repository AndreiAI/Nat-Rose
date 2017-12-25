var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img21 = new Image();
var img22 = new Image();
var img23 = new Image();

img1.src = 'res/team/flippedNATALIEGreen.png';
img2.src = 'res/team/BENGreen.png';
img3.src = 'res/team/CHIGreen.png';
img4.src = 'res/team/MARCGreen.png';
img5.src = 'res/team/DANIGreen.png';
img21.src = 'res/team/JOHNGreen.png';
img22.src = 'res/team/flippedPAGEGreen.png';
img23.src = 'res/team/flippedQUESTION%20MARKGreen.png';

function silhouetteImg1Hover(e) {
    document.getElementById('silhouette1').src = '';
    document.getElementById('silhouette1').src = img1.src;
    setTimeout(function () {
        document.getElementById('silhouette1').src = 'res/team/flippedNATALIE.png';
    }, 100);
}

function silhouetteImg2Hover(e) {
    document.getElementById('silhouette2').src = '';
    document.getElementById('silhouette2').src = img2.src;
    setTimeout(function () {
        document.getElementById('silhouette2').src = 'res/team/BEN.png';
    }, 100);
}


function silhouetteImg3Hover(e) {
    document.getElementById('silhouette3').src = '';
    document.getElementById('silhouette3').src = img3.src;
    setTimeout(function () {
        document.getElementById('silhouette3').src = 'res/team/CHI.png';
    }, 100);
}

function silhouetteImg4Hover(e) {
    document.getElementById('silhouette4').src = '';
    document.getElementById('silhouette4').src = img4.src;
    setTimeout(function () {
        document.getElementById('silhouette4').src = 'res/team/MARC.png';
    }, 100);
}

function silhouetteImg5Hover(e) {
    document.getElementById('silhouette5').src = '';
    document.getElementById('silhouette5').src = img5.src;
    setTimeout(function () {
        document.getElementById('silhouette5').src = 'res/team/DANI.png';
    }, 100);
}

function silhouetteImgM1Hover(e) {
    document.getElementById('silhouetteM1').src = '';
    document.getElementById('silhouetteM1').src = img4.src;
    setTimeout(function () {
        document.getElementById('silhouetteM1').src = 'res/team/MARC.png';
    }, 100);
}

function silhouetteImgM2Hover(e) {
    document.getElementById('silhouetteM2').src = '';
    document.getElementById('silhouetteM2').src = img5.src;
    setTimeout(function () {
        document.getElementById('silhouetteM2').src = 'res/team/DANI.png';
    }, 100);
}

function silhouetteImg21Hover(e) {
    document.getElementById('silhouette21').src = '';
    document.getElementById('silhouette21').src = img21.src;
    setTimeout(function () {
        document.getElementById('silhouette21').src = 'res/team/JOHN.png';
    }, 100);
}

function silhouetteImg22Hover(e) {
    document.getElementById('silhouette22').src = '';
    document.getElementById('silhouette22').src = img22.src;
    setTimeout(function () {
        document.getElementById('silhouette22').src = 'res/team/flippedPAGE.png';
    }, 100);
}

function silhouetteImg23Hover(e) {
    document.getElementById('silhouette23').src = '';
    document.getElementById('silhouette23').src = img23.src;
    setTimeout(function () {
        document.getElementById('silhouette23').src = 'res/team/flippedQUESTION%20MARK.png';
    }, 100);
}
