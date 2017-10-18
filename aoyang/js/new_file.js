window.onload=function () {
	$(".lunbo_dian_2").click(function  () {
		$(".lunbo").animate({left:-$(".lunbo li").width() });
		$(".lunbo_dian span").css("background-color","#d5d5d5");
		$(".lunbo_dian_2").css("background-color","#f39800");
	})
	$(".lunbo_dian_1").click(function  () {
		$(".lunbo").animate({left:0 });
		$(".lunbo_dian span").css("background-color","#d5d5d5");
		$(".lunbo_dian_1").css("background-color","#f39800");
	})
	$(".lunbo_dian_3").click(function  () {
		$(".lunbo").animate({left:-$(".lunbo li").width()*2 });
		$(".lunbo_dian span").css("background-color","#d5d5d5");
		$(".lunbo_dian_3").css("background-color","#f39800");
	})
	$(".lunbo_dian_4").click(function  () {
		$(".lunbo").animate({left:-$(".lunbo li").width()*3 });
		$(".lunbo_dian span").css("background-color","#d5d5d5");
		$(".lunbo_dian_4").css("background-color","#f39800");
	})
	var a=1;
	function move() {
		$(".lunbo").animate({left:-$(".lunbo li").width()*a },function  () {
			$(".lunbo_dian span").css("background-color","#d5d5d5");
			if (a==1) {
				a++;
				$(".lunbo_dian :nth-child(2)").css("background-color","#f39800");
			}else if(a==2){
				a++;
				$(".lunbo_dian :nth-child(3)").css("background-color","#f39800");
			}
			else if(a==0){
				a++;
				$(".lunbo_dian :nth-child(1)").css("background-color","#f39800");
			}
			else{
				a=0;
				$(".lunbo_dian :nth-child(4)").css("background-color","#f39800");
			}
		});
	}
	var timer=setInterval(move,2000);
	$(".lunbo").hover(function () {
		clearInterval(timer);
	},function () {
		timer=setInterval(move,2000);
	})
	$(".lunbo_dian").hover(function () {
		clearInterval(timer);
	},function () {
		timer=setInterval(move,2000);
	})
}