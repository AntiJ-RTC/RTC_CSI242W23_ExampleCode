//we need our fields
let container;
let box;
//we need some timers
let boxTimer;
let containerTimer;

//we need an x coordinate and a y coordinate
let xPosition;
let yPosition;

let stopButton;
//lets add a direction
let xDirection;
let yDirection;

window.addEventListener('load', function(){
    container = document.getElementById('container');
    box = document.getElementById('box');
    stopButton = document.getElementById('stopBox');
    //assign starting values to xPos and yPos
    xPosition = 0;
    yPosition = 0;
    xDirection = 2;
    yDirection = 2;

    //Timers, there are two method to start a timer
    //setTimeout - runs something once, after a given amount of time
    //setInterval - runs something repeatedly every given amount of time
    containerTimer = setTimeout(displayContainer, 2000);
    //add a click listener
    stopButton.addEventListener('click', function(){
        clearInterval(boxTimer);
    });
});

function displayContainer(){
    container.style.display = "block";
    //once this container hass appeared lets move our box
    boxTimer = setInterval(moveBox, 17);
}

function moveBox(){
    //
    if(yPosition >= 370 || yPosition < 0){
        yDirection *= -1;
    }
    if(xPosition >= 570 || xPosition < 0){
        xDirection *= -1;
    }
    //first we add to the xPos and yPos and then we move the box
    xPosition += xDirection;
    yPosition += yDirection;
    //we update the top property of the box
    //we update the left property of the box
    box.style.top = yPosition + 'px';
    box.style.left = xPosition + 'px';
}