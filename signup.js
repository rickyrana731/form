
function validateForm( event ){
  event.preventDefault()

  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


  if( email.match(mailformat)){
    if( password.match(re) ){
      alert('ok');
    }else{
      alert('at least one number, one lowercase and one uppercase letter, at least six characters')
    }
  }else{
    alert("type a valid email")
  }
}
