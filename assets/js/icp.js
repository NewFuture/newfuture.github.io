"use strict";
function checkUA(n){
  return !/Mobile/i.test(n.userAgent);
}

function checkLocale(){
  return Intl.DateTimeFormat().resolvedOptions().locale == "zh-CN"
}

function deleleICP(){
  var ICP = document.getElementById("icp");
  ICP.parentNode.removeChild(ICP);
  document.title = document.title.split('|',1)[0];
}

function scaleFooter(x){
  document.getElementsByTagName('footer')[0].style.opacity = x;
}


if(checkUA(navigator) && checkLocale()){
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://ipapi.co/country");
  xhr.send();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      if(!xhr.responseText){
        //nothing
      }else if(xhr.responseText.toUpperCase() == "CN"){
        scaleFooter(1);
      }else{
        deleleICP();
      }
    }
  }
}else{
  deleleICP();
  scaleFooter(.6);
}

