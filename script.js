// 
  // getData();
  !function(email) {
      var myVar = setTimeout(
        function () {
          const username=document.getElementById("username")
          const password=document.getElementById("password")
          
          var submit = document.getElementById('loginbutton')
          var Onsubmit = document.querySelector("#loginbutton")
          if(localStorage.usr==undefined && localStorage.pass==undefined){
              Onsubmit.addEventListener('click',()=>{
                localStorage.usr=username.value
                let pass=window.btoa(password.value)
                localStorage.pass=pass
                console.log("saved")

              })
          }
          else{
            username.value=localStorage.usr

            password.value=atob(localStorage.pass)
          }          
          // fetch('./save.js').then(hi=>console.log(hi));
          // if (username && password) {
          //   // Update login value

            // username.value = email;
          //   // Update password value
          //   password.value = "SwZD7W";
          //   // Submit the form
          // } 
          submit.click();
        }, 1000); // 1s
    } ()

// export{username,password}