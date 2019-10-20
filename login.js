// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }

function validateForm( event ){
  event.preventDefault()

  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var repassword = document.getElementById('repassword').value
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


  if( email.match(mailformat)){
    if( password.match(re) ){
      if( password === repassword ){
alert("ok");
        }
      else{
        alert('Password donot match yet')
      }
    }else{
      alert('at least one number, one lowercase and one uppercase letter, at least six characters')
    }
  }else{
    alert("type a valid email")
  }
}
