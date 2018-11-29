package com.ow.framework.listener.event.impl;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.ow.framework.common.Constant;
import com.ow.framework.data.po.ResultData;
import com.ow.framework.exception.DetailException;
import com.ow.framework.listener.event.EventExecutor;
import com.ow.framework.listener.event.EventListener;




public class SelectTodayInfoEvent implements EventListener{

	static Logger log = Logger.getLogger(Constant.FRAMEWORK);
	private ResultData resultData;
	public SelectTodayInfoEvent()
	{
		resultData = new ResultData();
	}		
	
	
	public ResultData event(EventExecutor eventExecutor) throws Exception {
		try
		{
			String[] sid = eventExecutor.getSqlidArr();
			int ans=0;
			for(int i = 0 ; i < sid.length; i ++){
				if (sid[i] != null && !sid[i].equals(""))
				{
					if(i<2){
						ans=eventExecutor.getSqlSession().update(sid[i], eventExecutor.getBaseAction().getParamMap());
						resultData.setIntResult(1);
					}else{
						ServletActionContext.getResponse().setCharacterEncoding("utf-8");
						HttpServletResponse resp = ServletActionContext.getResponse();
						PrintWriter out = resp.getWriter();
						JSONObject json = new JSONObject(); 
						HashMap paramMap = eventExecutor.getBaseAction().getParamMap();
						String sql = eventExecutor.getSqlidByIndex(i);
						SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
						paramMap.put("tcCreateTime", format.format(new Date()));
						List list=eventExecutor.getSqlSession().selectList(sql,paramMap);
						//int flag=eventExecutor.getSqlSession().insert(sql, paramMap);
						json.put("data", list);
						
						resultData.setIntResult(1);
						out.println(json);
						//System.out.println(json);
						out.flush();
						out.close();
					}
					
				}		
			}
			return resultData;
		}
		catch (Exception e)
		{
			resultData.setIntResult(0);
			String error = DetailException.expDetail(e, SelectTodayInfoEvent.class);
			log.error(error);
			throw e;
		}
	}
}
