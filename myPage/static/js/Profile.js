document.getElementById("pageMax").setAttribute("pageMax", "1");

// click and slide page
function slideToLeft(){
    // 중간에 마우스 오버 방지
    document.getElementById('hoveringSpace_left').onmouseout = null;
    bck = document.getElementById("bck");
    // 화살표 제거
    var arrow = document.getElementById("arrowL");
    $(".arrow").stop().animate({opacity: 0}, 850);
    // 애니메이션
    bck.style.animation = "2s sildeToLeft";
    setTimeout(function(){
        location.href = document.getElementById("languageLink").getAttribute("link");
    }, 800)
}
function slideToRight(){
    // 중간에 마우스 오버 방지
    document.getElementById('hoveringSpace_right').onmouseout = null;
    bck = document.getElementById("bck");
    // 화살표 제거
    var arrow = document.getElementById("arrowR");
    $(".arrow").stop().animate({opacity: 0}, 850);
    // 애니메이션
    bck.style.animation = "2s sildeToRight";
    setTimeout(function(){
        location.href = document.getElementById("projectsLink").getAttribute("link");
    }, 800)
}
