$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	$(".js-gotop").click(function () {//gotop
		$("html,body").animate({ scrollTop: 0 }, 300);
		return false;
	})
	$('#member').on('click', function () {//會員下拉選單收闔設定
        $(this).collapse('toggle');
    });
	$('.js-nav-link').on('click', function () {//手機版主下拉選單收闔設定
        if(WINDOW < 992){
			$("#member-menu").collapse('toggle');
		}
    });
	$('#top-menu').on('click', function () {//手機版主下拉選單收闔設定
	if(WINDOW < 992){
			$(this).collapse('toggle');

		}
        
    });

	$(".js-side-menu-toggler").click(function () {
		$('.js-side-menu').toggleClass("close");
		$(".js-side-content").toggleClass("close");
		$(".js-navbar").toggleClass("w-100");
		$(".js-footer").toggleClass("w-100");
	})
	

	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
			$(this).addClass("active");
			$(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
		}

	});

	//----------------gotop功能-----------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
			$(".gotop").fadeIn("fast");
			$("header").addClass("godown");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$("header").removeClass("godown");
		}

		var index = 0;//各單元區塊順序
		var st = $(window).scrollTop();//現在捲軸位置
		var wh = $(window).height();//視窗高度
	});

	//主選單設定
	$(".navbar-nav").find('a').click(function () {
		var section = $(this).attr("href");
		$("html,body").animate({ scrollTop: $(section).offset().top - 66 }, 300);
		$(".navbar-collapse").removeClass("show");
		return false;
	});




	/*匯出視窗-未輸入條件示意*/
	$("#info-export-default").modal("show");
	/*匯出視窗-查無資料示意*/
	$('#info-export-noinfo').modal("show");
	/*個人資料視窗-編輯示意*/
	$('#info-personal-edit').modal("show");




	

})//JS尾端	