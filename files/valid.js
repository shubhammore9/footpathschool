function validateForm(){
    var name = document.getElementById("fullName");
     var num = document.getElementById('mob');
     var ftext= document.getElementById("feedbacktext");
     var phoneno = /^[0-9]\d{09}$/;
     if(name.value == ""){
        Window.alert("Name Can not be Empty!");
        name.focus();
        return false;
     }
    
     if(num.value == "") {
      Window.alert("Mobile Number Can not be Empty!");
      num.focus();
      return false;
   }
   if( ftext.value == ""){
    Window.alert("Feedback Can not be Empty!");
    ftext.focus();
    return false;
  }
  
     if(!(num.value.match(phoneno))){
            alert("Inavlid Mobile Number");
            num.focus();
            return false;
      } 
    return true;
  }
  
  function valf(){
    var name = document.getElementById("fullName");
     var num = document.getElementById('mob');
     var usern= document.getElementById("username");
     var mail= document.getElementById("mail");
     var loc = document.getElementById('loc');
     var passwd= document.getElementById("password").value;
     var referencevalue = document.getElementById('selectmenu').value;

     var phoneno = /^[0-9]\d{09}$/;
    var usernval =(new String(usern.value)).length;
  
    if(hasNumber((new String(name.value)))){
      alert("Name Field can't have numbers..!!");
      name.focus();
      return false;
    }
     if( usernval > 16 || usernval <6){
       alert("Username Should have length between 6 to 16");
       usern.focus();
       return false;
     }
  
     if(!validateEmail(mail.value)){
        alert("Incorrect Email!");
        mail.focus();
        return false;
     }
    
     if((new String(passwd)).length <8) {
      alert("Pssword Should be At least 8 Characters Long!");
      return false; 
   }
   if(( new String(loc.value)).length < 3){
    alert("Incorrect Place!");
    loc.focus();
    return false;
  }
  
  if(!(num.value.match(phoneno))){
    alert("Inavlid Mobile Number");
    num.focus();
    return false;
    } 
    return true;
  }
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function hasNumber(myString) {
    return /\d/.test(myString);
  }