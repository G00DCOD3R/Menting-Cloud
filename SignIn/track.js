let mouseClicks = 0; // number of mouse clicks
let keysPressed = 0; // number of keys that was pressed (such as 'a', 'backspace', etc.)
let charsTyped = 0; // number of characters that was pressed (letters A - Z)

let startTime = new Date(); // time when user entered page 

// listener for keys 
// tracks every key, only some keys represent characters
document.addEventListener('keydown', (event) => {

    // where changes in document has to be made
    let element = document.getElementById("keysPressed");
    let element2 = document.getElementById("charsTyped");

    // make changes 
    element.innerHTML = '<p id = "keysPressed">Keys pressed = ' + keysPressed + '</p>';
    element2.innerHTML = '<p id = "charsTyped">Chars typed = ' + charsTyped + '</p>';

    // update counters 
    console.log(event.keyCode);
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        charsTyped++;
    }
    keysPressed++;
});

// listener for tracking mouse clicks 
document.addEventListener('mousedown', (event) => {
    let element = document.getElementById("mouseClicks");
    element.innerHTML = '<p id = "mouseClicks"> Mouse clicks = ' + mouseClicks + ' </p>';
    // console.log(mouseClicks);
    mouseClicks++;
})

// updating time every 100ms. Body event 'onload' calls this function every 100ms
function getTime() {
    let element = document.getElementById("timeSpent");
    let time = new Date() - startTime; 
    time = Math.round(time / 1000); 
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    element.innerHTML = '<p id = "timeSpent">Time spent = ' + minutes + 'm' + seconds + 's</p>';
}

function trackMouse() {
    let element = document.getElementById("mouseClicks");
    element.innerHTML = '<p id = "mouseClicks"> Mouse clicks = ' + mouseClicks + ' </p>';
    // console.log(mouseClicks);
    mouseClicks++;
}

