/*
Import the required classes
*/

// Get the canvas and ctx


// Constants


// Game objects


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

/**
 * 
 */
function setScreen(){

}

// use setScreen method to set the screen size

// add window resize event listener to set the screen size when the window is resized

/**
 * Method to get the ratio of the screen so that the game and components fits in any screen size
 */
function getScaleRation(){
    // calculate the screen height and width

    // calculate whether the window is wider than game width

    // return the scale ratio

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
    // fill rect
}

/**
 * Method for each frame of the game, should loop by using recursive requestAnimationFrame method
 * @param {number} currentTime the current time of the frame
 */
function gameLoop(currentTime){
    // calculate the time difference between the current frame and the last frame to get the delta time


    // Update game objects



    // Draw game objects
}

// requestAnimationFrame method to start the game loop

// add event listener to start the game when the screen is touched or a key is pressed
