$(function(){
				$('.pic_list li').click(function(){
					$(this).addClass('active').siblings().removeClass('active');
					$('.big_pic li').eq($(this).index()).fadeIn().siblings().fadeOut();
					$('.preview li').eq($(this).index()).show().siblings().hide();
				});
				$('.choosesize dd').click(function(){
					$(this).addClass('active').siblings().removeClass('active');
					var num=$(this).index()-1;
					if(num>=$('.pic_list li').length){
						num=num-$('.pic_list li').length;
					}
					$('.pic_list li').eq(num).addClass('active').siblings().removeClass('active');
					$('.big_pic li').eq(num).fadeIn().siblings().fadeOut();
					$('.preview li').eq(num).show().siblings().hide();
				});
				var showNum=1;
				$('.addtocart .plus_off .num_plus').click(function(){
					$('.shownum').val(showNum)
					showNum++;	
				});
				$('.addtocart .plus_off .num_off').click(function(){
					$('.shownum').val(showNum);
					showNum--;
					if(showNum<1){
						showNum=1;
					}
				});
				var oSpan=$('.big_pic span');
				$('.big_pic').mousemove(function(ev){
					oSpan.show();
					$('.preview').show();
					var l=ev.pageX-$(this).offset().left-oSpan.width()/2;
					var t=ev.pageY-$(this).offset().top-oSpan.height()/2;
					
					if(l<0){
						l=0;
					};
					if(t<0){
						t=0;
					};
					if(t>($(this).height()-oSpan.height())){
						t=$(this).height()-oSpan.height();
					};
					if(l>($(this).width()-oSpan.width())){
						l=$(this).width()-oSpan.width();
					}
					oSpan.css({'left':l,'top':t});
					$('.preview img').css({'left':-l*2,'top':-t*2})
					$('.big_pic').mouseleave(function(){
						oSpan.hide()
						$('.preview').hide();
					})
				});
				$('.mb_header li').click(function(){
					$(this).addClass('active').siblings().removeClass('active');
					$('.mb_content').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
				})
			})