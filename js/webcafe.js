$(function() {
    // 메인 메뉴 제어를 위한 스크립트
    $(".main-menu > li").hover(
        function() {
            $(this).find("ul").css("display", "block");
        },
        function() {
            $(this).find("ul").css("display", "none");
        }
    );
    $(".main-menu span").focusin(
        function() {
            $(this).siblings("ul").css("display", "block");
        }
    );

    // 탭메뉴 제어를 위한 자바스크립트
    $(".board h2").focus(function() {
        $(this).parent().addClass("act")
            .siblings().removeClass("act");
    });
});