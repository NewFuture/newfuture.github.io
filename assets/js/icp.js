"use strict";
function checkUA(n){
  var l = n.language || n.userLanguage; 
  return !/Mobile/i.test(n.userAgent) && l == "zh-CN";
}

function checkTimeZone(){
  return new Date().getTimezoneOffset() == -480;
}

function deleleICP(){
  var ICP = document.getElementById("icp");
  ICP.parentNode.removeChild(ICP);
  document.title = document.title.split('|',1)[0];
}

function scaleFooter(x){
  document.getElementsByTagName('footer')[0].style.opacity = x;
}

if(checkUA(navigator) && checkTimeZone()){
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

