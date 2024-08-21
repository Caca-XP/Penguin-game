/*
Import the required classes
*/

// Get the canvas and ctx
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 300;
const PLAYER_WIDTH = 30*2;//60;
const PLAYER_HEIGHT = 47*2;//94;
const MAX_JUMP_HEIGHT = GAME_HEIGHT - 150;
const MIN_JUMP_HEIGHT = 100;
const MIN_DIVE_HEIGHT = 100;
const MAX_DIVE_HEIGHT = GAME_HEIGHT - 150;
const GROUND_HEIGHT = 150;


// Game objects
let player= null;

// Game variables


/**
 * Method to initialize the game
 */
function createSprites(){
    // calculate the scaled player width and height and the jump height
    
    // create the player object

    // create the ground object

    // create the obstacles array map

    // create obstacle Controller object

    // create the score object
}

let screenScaleRatio = 0;
let previousTime = null;
/**
 * 
 */
function setScreen(){
    screenScaleRatio = getScaleRatio();// get the screen scale ratio
    canvas.width = GAME_WIDTH * screenScaleRatio; // set the canvas width
    canvas.height = GAME_HEIGHT * screenScaleRatio; // set the canvas height
}

// use setScreen method to set the screen size
setScreen();
// add window resize event listener to set the screen size when the window is resized and rotated
window.addEventListener('resize', setScreen);
screen.orientation.addEventListener('change', setScreen);

/**
 * Method to get the ratio of the screen so that the game and components fits in any screen size
 */
function getScaleRatio(){
    // calculate the screen height and width
    const screenHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
    const screenWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
    // calculate whether the window is wider than game width
    console.log(screenHeight);
        console.log(screenWidth);
        console.log(screenHeight/GAME_HEIGHT);
        console.log(screenWidth/GAME_WIDTH);
    if (screenHeight/screenWidth < GAME_WIDTH/GAME_HEIGHT){// if true: window is wider than game width
        return screenWidth/GAME_WIDTH; // return the width scale ratio
    } else{
        return screenHeight/GAME_HEIGHT; // return the scale
    }
}

/**
 * Method to show the game over
 */
function showGameOver(){
    // draw the game over text
}

/**
 * Method to restart the game
 */
function setupGameReset(){
    // add event listener to restart the game
}

/**
 * Method to restart the game
 */
function restartGame(){
    // reset the game variables
}

/**
 * Method to show the start screen
 */
function showStartScreen(){
    // draw the start screen text
}

/**
 * Method to increase the game speed
 */
function updateGameSpeed(){
    // increase the game speed
}


/**
 * Method to set the screen of the ctx
 */
function clearScreen(){
    // fill style
    ctx.fillStyle = 'white';
    // fill rect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Method for each frame of the game, should loop by using recursive requestAnimationFrame method
 * @param {number} currentTime the current time of the frame
 */
function gameLoop(currentTime){
    if (previousTime === null){
        previousTime = currentTime;
        requestAnimationFrame(gameLoop);
        return;
    }
    // clear the screen
    clearScreen();
    // calculate the time difference between the current frame and the last frame to get the delta time
    //to make the game frame rate independent
    const frameTime = currentTime - previousTime;
    
    previousTime = currentTime;

    // Update game objects



    // Draw game objects
    requestAnimationFrame(gameLoop);
}

// requestAnimationFrame method to start the game loop
requestAnimationFrame(gameLoop);
// add event listener to start the game when the screen is touched or a key is pressed
