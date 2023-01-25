let mouseClicks = 0; 
let keysPressed = 0;
let charsTyped = 0;
let startTime = new Date();
// document.addEventListener('onmousedown', trackMouse());
document.addEventListener('keydown', (event) => {
    let element = document.getElementById("keysPressed");
    element.innerHTML = '<p id = "keysPressed">Keys pressed = ' + keysPressed + '</p>';
    let element2 = document.getElementById("charsTyped");
    element2.innerHTML = '<p id = "charsTyped">Chars typed = ' + charsTyped + '</p>';
    console.log(event.keyCode);
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        charsTyped++;
    }
    keysPressed++;
});
document.addEventListener('mousedown', (event) => {
    let element = document.getElementById("mouseClicks");
    element.innerHTML = '<p id = "mouseClicks"> Mouse clicks = ' + mouseClicks + ' </p>';
    // console.log(mouseClicks);
    mouseClicks++;
})

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

