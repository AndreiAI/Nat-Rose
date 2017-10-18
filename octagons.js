var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
img1.src = 'res/cycle_blck_bg_copyGreen.png';
img2.src = 'res/corn_copy-1Green.png';
img3.src = 'res/wind_mill_copy-3Green.png';

function octagon_img1Hover(e) {
    document.getElementById('octagon_img1').src = '';
    document.getElementById('octagon_img1').src = img1.src;
    setTimeout(function () {
        document.getElementById('octagon_img1').src = 'res/cycle_blck_bg_copy.png';
    }, 100);
}

function octagon_img2Hover(e) {
    document.getElementById('octagon_img2').src = '';
    document.getElementById('octagon_img2').src = img2.src;
    setTimeout(function () {
        document.getElementById('octagon_img2').src = 'res/corn_copy-1.png';
    }, 100);
}

function octagon_img3Hover(e) {
    document.getElementById('octagon_img3').src = '';
    document.getElementById('octagon_img3').src = img3.src;
    setTimeout(function () {
        document.getElementById('octagon_img3').src = 'res/wind_mill_copy-3.png';
    }, 100);
}
