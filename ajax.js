/*
	封装ajax 
		1. method: get/post 传递格式
		2. url 提交的地址
		3. data 提交的数据
		4. success 请求成功返回来的数据
*/
function ajax(method, url, data, success){
	var xhr = "";
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if( method === "get" ){
		url += "?"+data;
	}

	xhr.open(method,url,true);
	if( method === "get"){
		xhr.send();
	}else{
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	xhr.onreadystatechange = function(){
		if( xhr.readyState === 4 ){
			if(xhr.status === 200){
				success && success(xhr.responseText);
			} else {
				alert('出错了,Err：' + xhr.status);
			}
		}
	}
}