function solveOverflow(e) {
    if (e.clientWidth < e.scrollWidth) {
        e.style.fontSize = (parseFloat(window.getComputedStyle(e, null).getPropertyValue('font-size')) * 0.9) + 'px';
    }
}

function toggleChoice(n) {
    var docs = document.getElementsByClassName('typeEnquiry_form_flex_div_rectangle');
    Array.from(docs).forEach(function (doc) {
        doc.src = "res/roundedRectangle.png";
    });
    docs[n].src = "res/roundedRectangleGreen.png";
}

function checkColorEnquiry(e) {
    if (window.location.href.includes('#enquiryBox')) {
        toggleChoice(2);
    }
}
