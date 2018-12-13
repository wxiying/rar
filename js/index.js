
$(document).ready(function(){
	$("a").click(function(){
		$(this).blur();
	})
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
//		$("#show").toggleClass("none");
		$("#hidden").slideToggle("slow");
	});  
//	小平图片显示Campus
var btn=document.getElementById("btn");//按钮
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多 +"){
	      	$(".over").css("display","block");
	      	btn.innerHTML="关闭";
	      }else{
	      	$(".over").css("display","none");
	      	btn.innerHTML="查看更多 +";
	      }
      }
//	小平图片显示Works
var btn_sec=document.getElementById("btn_sec");//按钮
      btn_sec.onclick=function(){
	      if(btn_sec.innerHTML=="查看更多 +"){
	      	$(".over1").css("display","block");
	      	$(".overfir").css("display","none");
	      	btn_sec.innerHTML="关闭";
	      }else{
	      	$(".over1").css("display","none");
	      	$(".overfir").css("display","none");
	      	btn_sec.innerHTML="查看更多 +";
	      }
      }
//	小平图片显示Star
var btn_third=document.getElementById("btn_third");//按钮
      btn_third.onclick=function(){
	      if(btn_third.innerHTML=="查看更多 +"){
	      	$(".over2").css("display","block");
	      	btn_third.innerHTML="关闭";
	      }else{
	      	$(".over2").css("display","none");
	      	btn_third.innerHTML="查看更多 +";
	      }
      }
//	小平图片显示Employment
var btn_four=document.getElementById("btn_four");//按钮
      btn_four.onclick=function(){
	      if(btn_four.innerHTML=="查看更多 +"){
	      	$(".over3").css("display","block");
	      	$(".overfour").css("display","none");
	      	btn_four.innerHTML="关闭";
	      }else{
	      	$(".over3").css("display","none");
	      	$(".overfour").css("display","none");
	      	btn_four.innerHTML="查看更多 +";
	      }
      }
});
function refresh(){
	if($(window).width()>1200){
		$(".aside_online").show();
		$("#up").hide();
		$(".aside_title").click(function(){
			$(this).parent().animate({right:"0"},400)
			$(this).css("display","none")
		})
		$("#del").click(function(){
			$(this).parents(".aside_online").animate({right:"-145"},400,function(){
				$(".aside_title").css("display","block")
			})
		})
		$(".upSlide").click(function(){
			$('body,html').animate({scrollTop:0},500);
				return false;
		});
	}else{
		$(".aside_online").hide();
		$("#up").show();
		$(window).scroll(function(){
		var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//鍏煎娴忚鍣�
			 if($scrollTop >350){
			    $("#up").show();
			    if($(window).width()>1200){
			    	$("#up").hide();
			    }
			}else{ $("#up").hide();};	
			});
			$("#up").click(function(){
			$('body,html').animate({scrollTop:0},500);
					return false;
				});
	}
}
$(document).ready(function(){
	refresh();
})
$(window).resize(function  () {
			$(".nav_1").hide();
			refresh();
})