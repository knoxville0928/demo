$(function(){
				$('#navigation_list li').each(function(i){//遍历导航里的li来绑定点击事件
					$(this).hover(function(){
						$('.section').eq($(this).index()).show().siblings().hide();//显示该层二级导航
						$('.p_top .popup').show()//弹框的display属性要设置成block
						$('.section').hover(function(){//给二级导航页面设置鼠标进出事件保证一级导航的li依旧保持效果
							$(this).show().siblings().hide()
							$('.p_top .popup').show()
							$('#navigation_list li').eq($(this).index()).addClass('activeli').siblings().removeClass('activeli')
						},function(){
							$('#navigation_list li').removeClass('activeli');
							$(this).hide()
							$('.p_top .popup').hide()
						})
					},function(){
						$('.section').hide()
						$('.p_top .popup').hide()
					})
				})
				function slideicon(){//icon的滑动效果
					var timer;
					$('.icon_act').hover(function(){
						var _this=$(this)
						timer=setTimeout(function(){
							$('.icon_act').animate({'top':-40},500);
							$('.iconslide').animate({'top':30},500);							
						},500);
						$('.slidecon').eq(_this.index()).show().siblings().hide();
					},function(){
						clearTimeout(timer);
					});
					$('.closeup').click(function(){//设置点击小x关闭滑出的盒子
						$('.iconslide').animate({'top':'208px'});
						$('.icon_act').animate({'top':'0'})
					})
				};
				slideicon();
				
				$(window).scroll(function(){
					var s_t=$(window).scrollTop();//滚轮的高度
					if(s_t>$('.page3').eq(0).offset().top-200){
						$(".floor_guide").show();
					}else{
						$(".floor_guide").hide();
					}
					$(".page3").each(function(i){
						if(s_t>=$(this).offset().top-200){
							$('li').eq(  i   ).addClass('ac').siblings().removeClass("ac");
						}
					})
				})
				$(".floor_guide li").each(function(i,ele){
					$(this).click(function(){
						$("html,body").stop().animate({"scrollTop":$(".page3").eq(i).offset().top+"px"},1000);
					});	
					
				});
				
				function tab(){
					var k=1;
					var timer;
					$('.bannerul li').eq(0).show().siblings().hide();
					$('.bannerol li').click(function(){
						$(this).addClass('ac').siblings().removeClass('ac');
						$('.bannerul li').eq($(this).index()).fadeIn().siblings().fadeOut();
						k=$(this).index();
					})
					function run(){
						timer=setInterval(function(){
							$('.bannerul li').eq(k).fadeIn().siblings().fadeOut();	
							$('.bannerol li').eq(k).addClass('ac').siblings().removeClass('ac');
							k++;
							if(k>=$('.bannerul li').length){
								k=0;
							};
							
						},2000)
					}
					run();
					$('.banner').hover(function(){
						clearInterval(timer);
					},function(){
						run();
					})
					
				};
				tab();
				

			})