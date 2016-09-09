    /*弹框JS内容*/
    jQuery(document).ready(
	function($){
        //打开窗口
        $('.cd-popup-trigger3').on('click', function(event){
            event.preventDefault();
            $('.cd-popup3').addClass('is-visible3');
            //$(".dialog-addquxiao").hide()
        });
        //关闭窗口
        $('.cd-popup3').on('click', function(event){
            if( $(event.target).is('.cd-popup-close')  || $(event.target).is('.cd-popup3') ) {
                event.preventDefault();
                $(this).removeClass('is-visible3');
            }
        });
        //ESC关闭
        $(document).keyup(function(event){
            if(event.which=='27'){
                $('.cd-popup3').removeClass('is-visible3');
            }
        });
    });


    // fenpeiqiyekaifazhanghao的js部分
    $(function(){
        $(".leftsidebar_box dt").css({"background-color":"hite"});
        $(".navhover dt img").attr("src","../images/nav_x.jpg");
        
        $(".leftsidebar_box dd").hide();
        $(".navhover dt").addClass("menu_ac");
        $(".navhover dd").show();
        $(".leftsidebar_box dt").click(function(){
            $(".leftsidebar_box dt").removeClass("menu_ac");
            $(this).addClass("menu_ac");
            $(".navhover dd").hide();
            $(this).parent().find('dd').removeClass("menu_chioce");
            $(".leftsidebar_box dt img").attr("src","../images/nav_s.jpg");
            $(this).parent().find('img').attr("src","../images/nav_x.jpg");
            $(".menu_chioce").slideUp(); 
            $(this).parent().find('dd').slideToggle();
            $(this).parent().find('dd').addClass("menu_chioce");
        });
    })
	