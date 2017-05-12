/*左侧产品树展开和关闭*/
$(function(){
	   $(".m-treeview > li > span").click(function(){
			    var $ul = $(this).siblings("ul");
				if($ul.is(":visible")){
					$(this).parent().attr("class","m-collapsed");
					$ul.hide();
				}else{
					$(this).parent().attr("class","m-expanded");
					$ul.show();
				}
				return false;
	   })
})