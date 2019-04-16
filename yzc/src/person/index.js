$(function(){
	//操作dom
	//鼠标移入显示二级目录
	$(".na_li").hover(function(){
		$(".nav_ul").fadeOut();
		//计算高度
		//这里可以使用css3的方法来代替
		nHeight = $(this).find(".nav_ul li").length * 0.8;
		$(this).find(".nav_ul").css("display","block").animate({height:nHeight + "rem"});
	},
	function(){
		$(this).find(".nav_ul").css("display","none").animate({height:"0rem"});
	})
	//主页轮播图
	WSCMobileSlide({
		"WSCSlideTransition": "WSCSlideTransition",
		"WSCSlideWrapper": $(".WSCSlideWrapper"),
		"WSCSlide": $(".WSCSlide"),
		"WSCSlide_img": $(".WSCSlide_img"),
		"timerNum": 3000
	});
	
})
