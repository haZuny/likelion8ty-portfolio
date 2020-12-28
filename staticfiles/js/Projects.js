// 최고 페이지 설정
document.getElementById("pageMax").setAttribute("pageMax", "5");

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
        location.href = document.getElementById("profileLink").getAttribute("link");
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
        location.href = document.getElementById("languageLink").getAttribute("link");
    }, 800)
}

// 페이지별 이미지 마진 설정
var imgBoxes = document.getElementsByClassName("imgBox");
for(i = 0; i < imgBoxes.length; i++){
    imgBoxes[i].style.margin = 42*imgBoxes.childElementCount + "vw";
}

// 이미지 슬라이드
var id;
var vw40;
var margin;
var imgBoxWidth;
// 데이터 업데이트 함수
function updateImgMargin(){
    id = "imgBox"+document.getElementById("page").getAttribute("page");
    if (id == "imgBox0"){return id;}
    vw40 = $(window).width() / 100*40;
    margin = Number($("#"+id).css("marginLeft").split('p')[0]);
    imgBoxWidth = Number($("#"+id).css("width").split('p')[0]);
}
updateImgMargin()

function imgSlideL(){
    if (margin < -3){
        $("#"+id).stop().animate({marginLeft: margin + vw40 + "px"}, 200);
        margin = margin + vw40;
    }
}
function imgSlideR(){
    if (margin - vw40 > -1* imgBoxWidth+3){
        $("#"+id).animate({marginLeft: margin - vw40 + "px"}, 200);
        margin = margin - vw40;
    }
}