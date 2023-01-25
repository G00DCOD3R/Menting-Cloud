function validate_form1() {
    const username = document.getElementById("username").value.split('');
    const name_f = document.getElementById("name_f").value.split('');
    const name_l = document.getElementById("name_l").value.split('');
    const password = document.getElementById("password").value.split('');
    const email = document.getElementById("email").value.split('');
    let valid_username = false;
    if(
        username.length >= 5 && 
        username.length <= 12 && 
        username[0] >= 'A' &&
        username[0] <= 'Z' &&
        "!@#$%^&*0123456789".includes(username[username.length - 1])
    ) valid_username = true;
    let valid_names = name_f.length != 0 && name_l.length != 0;
    let valid_password = password.length >= 12;
    let valid_email = true;
    if(valid_username && valid_email && valid_password && valid_names) 
        window.location.replace("./sign-up2.html");
}

function validate_form2() {
    
}