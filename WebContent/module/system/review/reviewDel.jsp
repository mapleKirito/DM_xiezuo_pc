<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  "http://www.w3.org/TR/html4/loose.dtd">
<%
	String basePath = "http://" + request.getLocalAddr() + ":" + request.getLocalPort() + request.getContextPath();	
%>
<html>
<title>${promptInfo.totalDescInfo}</title>
<head>

</head>
<body style="background-color: #F7F2FF; margin-top: 100;">
<form name="actionForm" method="post" action="operateAction.action" id="actionForm">
<input type="hidden" value="name" name="logColumn" /> 
<input type="hidden" value="true" name="islog" /> 
<input type="hidden" name="code" value="${code}"> 
<input type="hidden" name="paramMap.srID" value="${paramMap.srID}"> 
<input type="hidden" name="imitateStep" value="${pmsIndex.review_mgr.imitationStep}">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="tableC">
	<tr>
		<td class="tableCcenter">
		<table width="100%" border="0" cellpadding="0" cellspacing="1" class="SkyTDLine">
			<tr>
				<td class="SkyTDLine"> 
				<table width="300" align="center" border="0" cellpadding="0" cellspacing="0" class="tableT">
					<tr>
						<td class="tableTleft">&nbsp;</td>
						<td class="tableTcenter">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="100%" valign="middle">
									<table width="100%" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td width="5%">
											<div align="center"><img src="<%=request.getContextPath()%>/images/window/message.png"></div>
											</td>
											<td width="95%" class="tableTBig">${promptInfo.contentDescInfo}</td>
										</tr>
									</table>
									</td>
									
								</tr>
							</table>
						</td>
						<td class="tableTright">&nbsp;</td>
					</tr>
				</table>
				<table width="300" align="center" height="100" border="0" cellpadding="0" cellspacing="0" class="tableC">
					<tr>
						<td class="tableCleft">&nbsp;</td>
						<td class="tableCcenter">
						<table width="100%" height="100" border="0" cellpadding="0" cellspacing="0" class="tableC">
							<tr>
								<td class="tableCcenter">
								<table width="100%" border="0" cellpadding="0" cellspacing="1" class="">
									<tr>
										<td align="center"><span style="background-image: url(<%=request.getContextPath()%>/images/window/icon-info.gif); width: 32px; height: 32px;"></span> &nbsp;是否确认要删除所选择的记录？</td>
									</tr>
								</table>
								</td>
							</tr>
							<tr>
								<td align="center" valign="middle"><input type="submit" value="确定">&nbsp;&nbsp;
								<input type="button" value="取消" onclick="window.history.back();"></td>
							</tr>
						</table>
						</td>
						<td class="tableCright">&nbsp;</td>
					</tr>
				</table>
				<table width="300" align="center" border="0" cellpadding="0" cellspacing="0" class="tableF">
					<tr>
						<td class="tableFleft">&nbsp;</td>
						<td class="tableFcenter">&nbsp;</td>
						<td class="tableFright">&nbsp;</td>
					</tr>
				</table>
				</td>
			</tr>
		</table>
		</td>
	</tr>
</table>
</form>
</body>
</html>
