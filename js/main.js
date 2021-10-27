$(document).ready(function () {
    $('.slider_wrap').slick({
        slidesToShow : 3,
        nextArrow : "button.next",
        prevArrow : "button.prev",
        infinite: true,
        centerMode : true,
        centerPadding : 0
      /*
        버튼을 누르면 가운데 이미지 크기 강조 (w h 368px) , 
        나머지 양 옆에 이미지 크기(w h 240px) opacity 낮추기, 
        버튼 ,스크롤으로 반응하기
       */
    
       
      });
});