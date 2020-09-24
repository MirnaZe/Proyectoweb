$(document).ready(function(){ 
  $("form").submit(function(){
    alert("Submitted");
  });
  $("#bot").click(function(){
    var SendInfo={"mail": document.getElementById('correo').value,
"password":document.getElementById('pasw').value};
    $.ajax({
      
      type: 'POST',
      url: 'https://odphl0sbqd.execute-api.us-east-1.amazonaws.com/default/validacuenta',
      data: JSON.stringify(SendInfo),
      contentType: "application/json; charset=utf-8",
      traditional: true,
      success: function (data) {
        console.log("Response: "+data['login']);
        if(data['login']=='success'){
          location.replace("home_Css.html")
        }
      }

  }); 
  });
});