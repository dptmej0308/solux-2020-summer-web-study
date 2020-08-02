//라이트 박스
$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("sample_popup.html","popup01","width=800, height=550, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
})

//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","block");
    //$("#layer").show();
    //$("#layer").fadein();
    $("#layer").slideDown();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","block");
    //$("#layer").hide();
    //$("#layer").fadeout();
    $("#layer").slideUp();
});


//탭메뉴
var $tab_list = $(".tab_menu"); //jquery에서 쓰기 좋게 변수화

$tab_list.find("ul ul").hide();//css의 display:none 역할
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//배너
//html 마크업 셋팅 -> css연동 ->제이쿼리 연동 --> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplayspeed: 3000,
    speed: 300,
    slideToshow: 1
});

$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});

$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});

$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});


//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown(); 한번밖에 못쓴다는 단점이 있음
    //$("#cont_nav").toggle(); 나타났다가 없애기 가능
    //$("#cont_nav").fadeToggle(); 서서히 나타났다가 서서히 없어지는 효과 
    $("#cont_nav").slideToggle(200); //내려가면서 나타났다가 올라가면서 없어지는 효과
    $(this).toggleClass("on"); //addclass 버튼을 누르면 버튼 이름에 on이 붙음, toggleclass 버튼을 누르면 이름에 on이 붙었다가 다시 누르면 on이 사라짐 CSS로 추가 작업
});