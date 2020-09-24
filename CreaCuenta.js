$(document).ready(function(){ 
  $("form").submit(function(){
    alert("Submitted");
  });
  $("#bot").click(function(){
    var SendInfo={"mail": document.getElementById('correo').value,
"password":document.getElementById('pasw').value,
"nombre":document.getElementById('user').value,
"trato":"mss",
"apPaterno":document.getElementById('app').value,
"apMaterno":document.getElementById('apm').value,
"telefono":document.getElementById('tel').value};
    $.ajax({
      
      type: 'POST',
      url: 'https://0n59x9xn4l.execute-api.us-east-1.amazonaws.com/default/crearCuentaA01373852',
      data: JSON.stringify(SendInfo),
      contentType: "application/json; charset=utf-8",
      traditional: true,
      success: function (data) {
        console.log("Response: "+data['result']);
      }
      if(data['result']=='success'){
          location.replace("home_Css.html")
        }

  }); 
  });
});