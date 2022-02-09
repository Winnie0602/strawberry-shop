function formCheck(){
  var x=document.querySelector("#userId");
  var p=document.querySelector("#pw1");
  var p2=document.querySelector("#pw2");
  var userId=document.querySelector("#userId");

  //確認使用者名稱是否有值
  if (Number(x.value)==null || Number(x.value)==""){
    var msgId = document.querySelector(".UserIdMsg");
    msgId.textContent='使用者名稱為必填'
  } else{
    var msgId = document.querySelector(".UserIdMsg");
    msgId.textContent='';
    var check1 = true;
  }
  
  //密碼長度是否大於等於8
  if (Number(p.value.length)<8){
    var msgPw = document.querySelector(".PwMsg");
    msgPw.textContent='密碼長度不得小於8'
    
  } else if(Number(p.value.length)>=8){
      var msgPw = document.querySelector(".PwMsg");
      msgPw.textContent='';
      var check2 = true;
    }
  
  //驗證密碼欄位是否一致
  if (p.value == p2.value){
    var msg2Pw = document.querySelector(".Pw2Msg");
    msg2Pw.textContent='';
    var check3 = true;
    
  } else {
    var msg2Pw = document.querySelector(".Pw2Msg");
    msg2Pw.textContent='密碼不一致';
  }


  
  //如過所有表單驗證皆正確,會進入此條件
  if (check1 == true && check2 == true && check3 ==true)  {
    alert("登入成功!");
    window.location.replace("./myCart.html");
  }
 

// console.log('使用者名稱：'+userId.value);
// var autoUserId = document.querySelector(".autoId");
// autoUserId.textContent='使用者名稱：'+autoUserId.value;

  

  // $(document).ready(function(){
  //   $(".buyIt").click(function(){
  //     var name = $("#userId").val();
  //     var pwd = $("#pw1").val();
  //     $.post("https://www.townway.com.tw/auth",{
  //         username:name,
  //         password:pwd
  //     },
  //     function(data){
  //         if (data == "wrong password") {
  //            $("#warr").text("密碼錯誤");
  //         }
  //         else{
  //            alert("登入成功!");
  //            window.location.replace("./myCart.html");
  //         }
  //     });
  //   });
  // });
}
