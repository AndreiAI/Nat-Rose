/*
.nav_flex_div0 {
    width: 6vw;
    position: relative;
    border-bottom: 0.1vw solid black;
    transform: translateY(-45%);
    color: black;
}

.nav_flex_div0:hover {
    position: relative;
    border-bottom: 0.1vw solid #928F1B;
    color: #928F1B;
}

.nav_flex_div1 {
    width: 6vw;
    position: relative;
    border-bottom: 0.1vw solid black;
    transform: translateY(-45%);
}

.nav_flex_div1:hover {
    position: relative;
    border-bottom: 0.1vw solid #928F1B;
    color: #928F1B;
}
*/
document.addEventListener("DOMContentLoaded", function () {
    $('.nav_flex_div0').hover(function () {
        $('.nav_flex_div0').css({
            'color': 'black',
            'border-color': 'black'
        });
        $('.nav_flex_div1').css({
            'color': 'black',
            'border-color': 'black'
        });
        $(this).css({
            'color': '#928F1B',
            'border-color': '#928F1B'
        });
    });
    $('.nav_flex_div1').hover(function () {
        $('.nav_flex_div0').css({
            'color': 'black',
            'border-color': 'black'
        });
        $('.nav_flex_div1').css({
            'color': 'black',
            'border-color': 'black'
        });
        $(this).css({
            'color': '#928F1B',
            'border-color': '#928F1B'
        });
    });
    $('.nav_flex_div0').mouseleave(function () {
        $(this).css({
            'color': 'black',
            'border-color': 'black'
        });
    });
    $('.nav_flex_div1').mouseleave(function () {
        $(this).css({
            'color': 'black',
            'border-color': 'black'
        });
    });
});
