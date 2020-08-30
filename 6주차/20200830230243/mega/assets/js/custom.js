(function($){
    //배너 이미지 슬라이드//
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
    });


    //영화차트 이미지 슬라이드//
    var mySwiper = new Swiper('.swiper-container2', { //이름 swiper-container2로 통일한 것, 한쪽에서 작동시 다른 쪽도 움직일 수 있음->이름 분리사용으로 해결 가능//
        slidesPerView: 4,
        spaceBetween: 24,
        //mousewheel: {
        //    invert: true,
        //},
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }
    });

    //영화차트 탭 메뉴
    var movBtn = $(".movie_title > ul >li");
    var movCont = $(".movie_chart > div");

    movCont.hide().eq(0).show();

    movBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        movBtn.removeClass("active");
        target.addClass("active");
        movCont.css("display","none");
        movCont.eq(index).css("display","block");
    });

    //공지사항 탭 메뉴
    var tabMenu = $(".notice");

    //컨텐츠 내용을 숨겨주세요!
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("li.active>ul").show();

    function tabList(e){
        e.preventDefault(); //#의 기능을 차단
        var target = $(this);
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        //버튼 클릭시 ul을 보여줌
        //부모의 li 태그에 클레스 추가
        //형제 li 태그에 클레스 제거
        //제거한 자식의 ul 태그 숨겨줌
    }

    tabMenu.find("ul > li > a").click(tabList).focus(tabList);
})(jQuery);   