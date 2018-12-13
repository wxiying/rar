 $(function () {
        $(".wrapper .tab-item").click(function () {
            $(this).addClass("active").siblings().removeClass("active");//
            $(".products .main").eq($(this).index()).show().siblings().hide();
        })
        
        $(".btn").click(function(){
		 $(".show").slideUp(false);
		 $(this).find(".show").slideDown(false);
		})
})