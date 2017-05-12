/*模块横向滚动*/
$(function(){
    var page = 1;
    var i = 4; //每版放4个图片
	var len = $(".prolist_content ul li").length;
	var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
	var none_unit_width = $(".prolist").width(); //获取框架内容的宽度,不带单位
	var $parent = $(".prolist_content"); 
    //向右 按钮
    $(".goRight").click(function(){ 
		if( !$parent.is(":animated") ){
			if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$parent.animate({ left : 0}, 800); //通过改变left值，跳转到第一个版面
				page = 1;
			}else{
				$parent.animate({ left : '-='+none_unit_width}, 800);  //通过改变left值，达到每次换一个版面
				page++;
			}
		}
   });
    //往左 按钮
    $(".goLeft").click(function(){
	    if( !$parent.is(":animated") ){
			if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$parent.animate({ left : '-='+none_unit_width*(page_count-1)}, 800); //通过改变left值，跳转到最后一个版面
				page = page_count;
			}else{
				$parent.animate({ left : '+='+none_unit_width }, 800);  //通过改变left值，达到每次换一个版面
				page--;
			}
		}
    });
    /*滑过图片出现放大镜效果*/
     $(".content_right .prolist ul li").each(function(index){
			  var position = $(this).position();
			  var li_left = position.left;
			  var li_top = position.top;
			  var img_width = $(this).find("img").width();
			  var img_height = $(this).find("img").height();
              var spanHtml = '<span style="position: absolute; top: '+li_top+'px; left: '+li_left+'px; width:'+img_width+'px; height: '+img_height+'px; cursor: pointer;" class="imageMask"></span>';
			  $(spanHtml).hover(function(){
						$(this).addClass("imageOver");
				    },function(){
						$(this).removeClass("imageOver");
				 }).appendTo( $(this).find("a") );
		 })
});