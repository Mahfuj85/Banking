document.getElementById('error').style.display = "none";

document.getElementById('login-btn').addEventListener('click', function(){
    //get email from email-input field
    const emailField = document.getElementById('email-input');
    const email = emailField.value; 

    //get password from password-input field
    const passwordField = document.getElementById('password-input'); 
    const password = passwordField.value;

    document.getElementById('error').style.display = "none";

    //indirect to one page to another page
    if (email == "admin@gmail.com" && password == 123456){
        document.getElementById('error').style.display = "none";
        window.location.href = "../banking.html";
    }else{
        document.getElementById('error').style.display = "block";
    }
    emailField.value = "";
    passwordField.value = "";
})