$(function(){
	//鼠标移入显示二级目录
	
		$(".na_li").hover(function(){
			$(".nav_ul").fadeOut();
			$(this).find(".nav_ul").fadeIn();
		},
		function(){
			console.log(123)
			$(this).find(".nav_li").fadeOut();
		})
	
})
