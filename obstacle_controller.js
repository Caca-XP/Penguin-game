// import obstacle from './obstacle.js';

export default class ObstacleController {

    // obstacle controller variables

    // interval min and max spawn time

    // obstacle array


    /**
     * Constructor
     * initialize the obstacle controller and its properties (next obstacle spawn time)
     * @param {CanvasRenderingContext2D} ctx
     * @param {Image[]} images
     * @param {number} scaleRatio
     * @param {number} speed
     */
    constructor(ctx, images, scaleRatio, speed){
        // initialize the obstacle controller properties

        // set next obstacle spawn time
    }

    /**
     * Method to set the next spawn time
     */
    setNextSpawnTime(){
        // set next obstacle spawn time with random value between min and max spawn time
    }

    /**
     * Method to get a random number between min and max
     * @param {number} min 
     * @param {number} max 
     */
    getRandomNumber(min, max){
        // return random number between min and max
    }

    /**
     * Method to create a new obstacle
     */
    createObstacle(){
        // create a new random obstacle

        // set the obstacle position

        // push the obstacle to the obstacle array
    }

    /**
     * Method to update the obstacle controller
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     */
    update(gameSpeed, frameTimeDelta){
        // check if the next obstacle spawn time is reached

        // create a new obstacle

        // set the next spawn time

        // update each obstacle

        // remove obstacle if it is out of screen
    }

    /**
     * Method to draw the obstacle controller
     */
    draw(){
        // draw each obstacle
    }

    /**
     * Method to check if the player collide with the obstacle
     * @param {object} sprite 
     */
    collide(sprite){
        // check if the player collide with the obstacle

        // return true if collided

        // return false if not collided
    }

    /**
     * Method to reset the obstacle controller
     */
    reset(){
        // reset the obstacle controller
    }

}