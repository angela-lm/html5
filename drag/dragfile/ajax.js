function ajax(way,url,data,callBack,flag){
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    way = way.toUpperCase();
    if(way == 'GET'){
        xhr.open(way,url + '?'  + data,flag);
        xhr.send();
    }else if(way == 'POST'){
        xhr.open(way,url,flag);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                callBack(xhr.responseText);
            }
        }
    }
}