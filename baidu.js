var name=document.getElementById('name');
var phone=document.getElementById('phone');
var pwd=document.getElementById('pwd');
var yztext=document.getElementById('yztext');
var yzbut=document.getElementById('yzbut');
var yzmsg=document.getElementById('yzmsg')
var zhuce=document.getElementById('zhuce');
var i=30;

zhuce.onclick=function(){
  legality('name');
  legality('phone');
  legality('pwd')

}
document.getElementById('name').onblur=function(){
  console.log(555)
  legality("name")
}
phone.onblur=function(){
  legality("phone")
}
pwd.onblur=function(){
  legality("pwd")
}

function legality(para){
  var msg=document.getElementById(para+"msg")
  var one=document.getElementById(para);
  switch (para){
    case "name":
      if(one.value===""){
        msg.innerHTML="用户名不能为空";
        return false
      }
      if(!new RegExp( /^(?!(\d+)$)[\u4e00-\u9fff\w]+$/).test(one.value)){
        msg.innerHTML="用户名仅支持中英文、数字和下划线,且不能为纯数字";
        return false
      }
      break;
    case "phone":
      if(one.value===""){
        msg.innerHTML="手机号不能为空";
        return false
      }
      if(!new RegExp(/0?(13|14|15|17|18)[0-9]{9}/).test(one.value)){
        msg.innerHTML="手机号格式不正确";
        return false
      }
      break;
    case "pwd":
      if(one.value===""){
        msg.innerHTML="密码不能为空";
        return false
      }
      if(!new RegExp(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/).test(one.value)){
        msg.innerHTML="密码设置不符合要求";
        return false
      }
      
  }
  msg.innerHTML=""
}
yzbut.onclick=function(){
  yzbut.setAttribute('disabled',"true");
  var timer=setInterval(function(){
    i--;
    if(i==0){
      clearInterval(timer);
      yzbut.value="获取验证码";
      yzbut.removeAttribute('disabled')
      yzmsg.innerHTML="请求超时,请稍后再试"
    }
    else{
      yzbut.value="获取验证码（"+i+"s)"
  
    }
  },1000);
  
}
