$(function(){
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		// navigation: true,
		navigationPosition: 'right',
		navigationTooltips:['홈','바로고란','상점주 문의','기사 문의'],
		scrollingSpeed: 1000,
		controlArrows: true,
		showActiveTooltip:true,
		onLeave: function(origin, destination, direction){
			// console.log(origin,'넘어가는페이지')
		},
		afterLoad: function(origin, destination, direction){
			// console.log(destination,"불러오기 완료")
				if(destination==1){
					$('.section_wrap>.coment').fadeIn(500)
				}else{
					$('.section_wrap>.coment').hide()
				}
			},
		afterSlideLoad: function(section, origin, destination, direction){
			if(destination==1){
				$('.map_coment').delay(250).fadeIn(300)
			}else{
				$('.map_coment').hide()
			}
		}
	});
	$('.fp-tableCell>.location>.bg>.info>.cls').on('click',function(evt){
		evt.preventDefault();
		$('.fp-tableCell>.location').fadeOut(300);
	})
	$('.fp-tableCell>.shop>.shopcont>a.map').on('click',function(evt){
		evt.preventDefault();
		$('.fp-tableCell>.location').fadeIn(300);
	})
});