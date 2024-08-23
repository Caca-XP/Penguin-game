/*
Import the required classes
*/
import Player from './player.js';
import Ground from './ground.js';
import ObstacleController from './obstacle_controller.js';


// Get the canvas and ctx
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 300;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 47;
const MAX_JUMP_HEIGHT = GAME_HEIGHT - 150;
const MIN_JUMP_HEIGHT = 100;
const MIN_DIVE_HEIGHT = 100;
const MAX_DIVE_HEIGHT = GAME_HEIGHT - 150;
const GROUND_HEIGHT = 24;
const GROUND_WIDTH = 2400;
const GROUND_AND_OBSTACLE_SPEED = 0.5;

//Array of iceberg objects
//for each object:
//width, height, midpoint from the bottom path to image
const ICEBERG_CONFIG = [
    {width: 100, height: 200, midpoint: 131, image: 'images/iceberg1.png'},
    {width: 100, height: 200, midpoint: 69, image: 'images/iceberg2.png'},
    {width: 75, height: 155, midpoint: 50, image: 'images/iceberg3.png'},

]


const GAME_SPEED_START = 0.5;
const GAME_SPEED_INCREASE = 0.00001;


// Game objects
let player= null;
let ground = null;
let obstacleController = null;

// Game variables
let gameSpeed = GAME_SPEED_START;
let gameOver = false;


/**
 * Method to initialize the game
 */
function createSprites(){
    // calculate the scaled player width and height and the jump height
    const scaledPlayerWidth = PLAYER_WIDTH * screenScaleRatio;
    const scaledPlayerHeight = PLAYER_HEIGHT * screenScaleRatio;
    const scaledMaxJumpHeight = MAX_JUMP_HEIGHT * screenScaleRatio;
    const scaledMinJumpHeight = MIN_JUMP_HEIGHT * screenScaleRatio;
    const scaledMinDiveHeight = MIN_DIVE_HEIGHT * screenScaleRatio;
    const scaledMaxDiveHeight = MAX_DIVE_HEIGHT * screenScaleRatio;
    const scaledGroundHeight = GROUND_HEIGHT * screenScaleRatio;
    const scaledGroundWidth = GROUND_WIDTH * screenScaleRatio;


    // create the player object
    player = new Player(ctx, scaledPlayerWidth, scaledPlayerHeight, scaledMinJumpHeight, scaledMaxJumpHeight, scaledMinDiveHeight, scaledMaxDiveHeight, screenScaleRatio);

    // create the ground object
    ground = new Ground(ctx, scaledGroundWidth, scaledGroundHeight, GROUND_AND_OBSTACLE_SPEED, screenScaleRatio);

    // create the obstacles array map
    const icebergImages = ICEBERG_CONFIG.map(iceberg => {
        const image = new Image();
        image.src = iceberg.image;
        return{
            width: iceberg.width * screenScaleRatio,
            midpoint: iceberg.midpoint * screenScaleRatio,
            height: iceberg.height * screenScaleRatio,
            image: image
        };
    });
    // create obstacle Controller object
    obstacleController = new ObstacleController(ctx, icebergImages, screenScaleRatio, GROUND_AND_OBSTACLE_SPEED);
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

    // create sprites
    createSprites();
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
    // console.log(screenHeight);
    //     console.log(screenWidth);
    //     console.log(screenHeight/GAME_HEIGHT);
    //     console.log(screenWidth/GAME_WIDTH);
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
function updateGameSpeed(frameTimeDelta){
    // increase the game speed
    gameSpeed += GAME_SPEED_INCREASE * frameTimeDelta;
}


/**
 * Method to set the screen of the ctx
 */
function clearScreen(){
    // fill style
    ctx.fillStyle = 'white';
    // fill rect
    ctx.fillRect(0, 0, canvas.width, GAME_HEIGHT*screenScaleRatio/2);
    ctx.fillStyle = 'skyblue';//change the colour later
    ctx.fillRect(0, GAME_HEIGHT*screenScaleRatio/2, canvas.width, GAME_HEIGHT*screenScaleRatio/2);
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

    if (!gameOver){
    // Update game objects
    ground.update(gameSpeed, frameTime);
    obstacleController.update(gameSpeed, frameTime);
    player.update(gameSpeed, frameTime);
    }

    if (!gameOver && obstacleController.collide(player)){
        gameOver = true;
    }

    ground.draw();
    obstacleController.draw();
    player.draw();

    if (gameOver){
        showGameOver();
        // setupGameReset();
    }

    // Draw game objects
    requestAnimationFrame(gameLoop);
}

// requestAnimationFrame method to start the game loop
requestAnimationFrame(gameLoop);
// add event listener to start the game when the screen is touched or a key is pressed
