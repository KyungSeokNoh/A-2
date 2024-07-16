$(function () {
    //메뉴

    $(".sub , .sub_bg").hide();
    $(".main>li").hover(function () {
        $(".sub , .sub_bg").stop().slideDown();
    }, function () {
        $(".sub , .sub_bg").stop().slideUp();
    })

    //이미지 슬라이드

    // var n =0; // 0 1 2

    // setInterval(function () {
    //     if(n==2){
    //         n = 0
    //     }else{
    //         n++;
    //     } //if

    //     // console.log(n);

    //     pos = n *(-1200) + "px"

    //     $(".left_move").animate({left : pos} , 500)
    // }, 2500);

    setInterval(function(){
        $(".left_move").animate({left : "-1200px"} , 500,function(){
            $(".left_move").append($(".left_move li").first());
            $(".left_move").css({left : "0"})
        })
    }, 3000)

    $(".p_click").click(function(){
        $(".modal , .pop").show();
    })

    $(".close").click(function(){
        $(".modal , .pop").hide();
    })

}) //jquery