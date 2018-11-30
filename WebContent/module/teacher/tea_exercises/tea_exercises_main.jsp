<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>智能答题管理</title>
<style type="text/css">
#create_1_div{background: #606373;padding: 4px 15px;float: left;}
</style>
</head>
<body>
<script type="text/javascript">
//按钮背景色#7c6d5b(def);#e64747(selected)
$(function(){
	var defaultBG="#7c6d5b",selectedBG="#e64747";
	//默认选中第一项
	$("#btn1").css("background",selectedBG);
	$("#askFrameWelcome").height($(window).height());
	$("#btn1").click(function(){
		clearBtnSelected();
		$(this).css("background",selectedBG);
		$("#askFrameWelcome").attr("src","decorateForwardAction.action?code=${pmsIndex.tea_exercises_exam.code}");
	});
	
	$("#btn2").click(function(){
		clearBtnSelected();
		$(this).css("background",selectedBG);
		$("#askFrameWelcome").attr("src","decorateForwardAction.action?code=${pmsIndex.tea_exercises_assign.code}");
	});
	
	$("#btn3").click(function(){
		clearBtnSelected();
		$(this).css("background",selectedBG);
		$("#askFrameWelcome").attr("src","decorateForwardAction.action?code=${pmsIndex.tea_exercises_dataFeedback.code}");
	});
	
	
	function clearBtnSelected(){
		$(".lt-command a").css("background",defaultBG);
		
	}
});
</script>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="list-table" >
	<tr>
        <td class="tableCcenter">
        	<div class="lt-title">${pmsIndex.tea_exercises.name}</div>
			<div class="lt-command">
				<a href="javascript:void(0)" id="btn1">
					<span>${pmsIndex.tea_exercises_exam.name}</span>
				</a>
			 	<a href="javascript:void(0)" id="btn2">
					<span>${pmsIndex.tea_exercises_assign.name}</span>
				</a>
				<a href="javascript:void(0)" id="btn3">
					<span>${pmsIndex.tea_exercises_dataFeedback.name}</span>
				</a>
		 	</div>
        </td>
    </tr>
</table>                      
<iframe id="askFrameWelcome" name="askFrameWelcome" scrolling="no" marginheight="0" marginwidth="0" frameborder="0" src="decorateForwardAction.action?code=${pmsIndex.tea_exercises_exam.code}" width="100%" ></iframe>
</body>
</html>