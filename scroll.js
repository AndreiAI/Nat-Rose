var doc = document.documentElement;
var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

function onScroll(e) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
   
    if (top / document.documentElement.clientHeight > 0.5) {
        //document.getElementById('arrowScroll').style.display = "inline-block";
        document.getElementById('arrowScrollBack').style.display = "inline-block";
    } else {
        //document.getElementById('arrowScroll').style.display = "none";
        document.getElementById('arrowScrollBack').style.display = "none";
    }
}

function scrollUp(e) {
    window.scrollTo(0, 0);
}