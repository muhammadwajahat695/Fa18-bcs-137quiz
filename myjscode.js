  function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    
    if (x == "") {
      document.getElementById("name").id = "newid";
      alert("Name must be filled out");
      return false;
    }
    if (x.length<5){
        document.getElementById("name").id = "newid";
        alert("Name must be greater then 5 letters");
        return false;
    }
    
    var y = document.forms["myForm"]["password"].value;
    var x = document.forms["myForm"]["confirm_password"].value;
    if(y.length<8){
        document.getElementById("password").id = "newid";
        alert("Password must Greater then 8");
        return false;
    }
    if(y!=x){
        document.getElementById("password").id = "newid";
        document.getElementById("password").id = "newid";
        alert("Password must match");
        return false;
    }
    else{
        alert("Form submitted")
        return true;
    }

  }