<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><s:text name="systemName"/></title>
<style type="text/css" media="screen">
html, body { height:100%; background-color: #ffffff;}
body { margin:0; padding:0; overflow:hidden; }
#flashContent { width:100%; height:530px; }
#denglu{width:100%; height:530px; }
</style>
<script language="JavaScript">
function currenUser(){
	return "${session.s_userLoginName}";
}
$(document).ready(function(){
	$("#daohangOther").append($("<span>学生学习室flash</span>"));
});	
</script>
</head>
<body bottommargin="0" topmargin="0" leftmargin="0" rightmargin="0" >
<div id="flashContent">
<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  id="denglu" align="middle">
	<param name="movie" value="flash/student.swf" />
	<param name="quality" value="high" />
	<param name="bgcolor" value="#e8e8e8" />
	<param name="play" value="true" />
	<param name="loop" value="true" />
	<param name="wmode" value="window" />
	<param name="scale" value="showall" />
	<param name="menu" value="true" />
	<param name="devicefont" value="false" />
	<param name="salign" value="" />
	<param name="allowScriptAccess" value="sameDomain" />
	<!--[if !IE]>-->
	<object type="application/x-shockwave-flash" data="flash/student.swf" width="100%" height="500">
		<param name="movie" value="flash/student.swf" />
		<param name="quality" value="high" />
		<param name="bgcolor" value="#e8e8e8" />
		<param name="play" value="true" />
		<param name="loop" value="true" />
		<param name="wmode" value="window" />
		<param name="scale" value="showall" />
		<param name="menu" value="true" />
		<param name="devicefont" value="false" />
		<param name="salign" value="" />
		<param name="allowScriptAccess" value="sameDomain" />
	<!--<![endif]-->
		<a href="http://www.adobe.com/go/getflash">
			<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获得 Adobe Flash Player" />
		</a>
	<!--[if !IE]>-->
	</object>
	<!--<![endif]-->
</object>
</div>
</body>
</html>


