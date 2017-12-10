function solveOverflow(e) {
    if (e.clientWidth < e.scrollWidth) {
        e.style.fontSize = (parseFloat(window.getComputedStyle(e, null).getPropertyValue('font-size')) * 0.9) + 'px';
    }
}

function toggleChoice(n, type) {
    var docs = document.getElementsByClassName('typeEnquiry_form_flex_div_rectangle');
    Array.from(docs).forEach(function (doc) {
        doc.src = "res/roundedRectangle.png";
    });
    docs[n].src = "res/roundedRectangleGreen.png";
    
    document.getElementById("inputType").value = type;
    console.log(document.getElementById("inputType").value);
}

function checkColorEnquiry(e) {
    if (window.location.href.includes('#enquiryBox')) {
        toggleChoice(2, 'news/other');
    }
    
    console.log(document.getElementsByTagName("h1")[0].innerHTML);
}
