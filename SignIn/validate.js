

function validate1() {

    // get all attributes 
    let uname = document.getElementById("uname");
    let fName = document.getElementById("fName");
    let lName = document.getElementById("lName");
    let pwd = document.getElementById("password");
    let pwd2 = document.getElementById("password2");
    let email = document.getElementById("email");

    // reset all validities for input fields except from email
    // email already has "auto" validity 
    let inputFields = document.getElementsByClassName("inputField");
    for(let input of inputFields) {
        input.setCustomValidity("");
    }

    // check length of username
    if(uname.value.length < 5) {
        uname.setCustomValidity("Too short! Username length should be between 5 and 12 characters");
        // console.log("too short");
        return;
    }
    if(uname.value.length > 12) {
        uname.setCustomValidity("Too long! Username length should be between 5 and 12 characters");
        return;
    }

    // starting capital letter in name
    if(uname.value[0] < 'A' || uname.value[0] > 'Z') {
        // console.log("not capital letter");
        uname.setCustomValidity("First letter should be capital");
        return;
    }

    const specialChars = "`~!@#$%^&*()_-+={[}}|\:;<,>.?/0123456789";
    
    // last char is special or number
    let lastCharacter = uname.value[uname.value.length-1];
    if(!specialChars.includes(lastCharacter)) {
        console.log("last character not special");
        console.log(lastCharacter);
        uname.setCustomValidity("Last character should be a number or special character");
        return;
    }

    // length of password 
    if(pwd.value.length < 12) {
        pwd.setCustomValidity("Too short password, should be at least 12 characters long");
        return;
    }
    

    // name can only contain letters 
    for(let char of [...fName.value]) {
        if((char < 'a' || char > 'z') && (char < 'A' || char > 'Z')) {
            console.log("letter not in alphabet");
            fName.setCustomValidity("name can only contain letters");
            return;
        }
    }
    for(let char of [...lName.value]) {
        if((char < 'a' || char > 'z') && (char < 'A' || char > 'Z')) {
            console.log("letter not in alphabet");
            lName.setCustomValidity("name can only contain letters");
            return;
        }
    }

    // passwords doesn't match 
    if(pwd.value !== pwd2.value) {
        pwd2.setCustomValidity("Oopsie doopsie, wrong password!");
        console.log("wrong pwd");
        return;
    }


    if(email.checkValidity()) {
        console.log("udalo sie");
        window.location = "../SignIn/sign-up2.html";
        return;
    }
    
    return;
}
function validate2() {
    let zip = document.getElementById("zipCode"); 
    let country = document.getElementById("country");
    let language = document.getElementById("language");
    // zip.setCustomValidity("");

    // if there is zip code (it was optional) then it must be valid dutch code
    if(zip.value.length != 0) {
        if(zip.value.length != 6) {
            zip.setCustomValidity("Please provide valid dutch zip code");
            return;
        } 
        // first 4 are digits, last two are big letters
        for(let i = 0; i < 4; i++) {
            if(zip.value[i] < '0' || zip.value[i] > '9') { 
                zip.setCustomValidity("Please provide valid dutch zip code");
                // console.log("invalid");
                return;
            }
        }
        for(let i = 4; i < 6; i++) {
            if(zip.value[i] < 'A' || zip.value[i] > 'Z') {
                zip.setCustomValidity("Please provide valid dutch zip code");
                // console.log("invalid");
                return;
            }
        }
    } 

    if(!country.checkValidity() || !language.checkValidity()) {
        return;
    }

    let inputs = document.getElementsByClassName("inputFields");
    window.location = "./sign-up3.html";
}

function validate3() {

    let sex = document.getElementById("sex"); 
    let type = document.getElementById("personType");
    if(type.checkValidity && sex.checkValidity()) {
        window.location = "./sign-in.html";
    }

}