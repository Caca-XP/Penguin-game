/**
 * Player class
 */

export default class Player {

    /**
     * Constructor
     * initialize the player and its properties (position, speed, image)
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} width
     * @param {number} height
     * @param {number} minJumpHeight
     * @param {number} maxJumpHeight
     * @param {number} scaleRatio
     */
    constructor(ctx, width, height, minJumpHeight, maxJumpHeight, scaleRatio){
        // initialize the player properties

        // player position

        // player image

        // remove and add event listeners
    }

    // event listeners, touchstart, touchend, keydown, keyup 

    /**
     * Method to handle the update of the player image for each frame
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     */
    update(gameSpeed, frameTimeDelta){
        // player running update

        // player jumping update

    }

    /**
     * Method to handle the player jump
     * @param {number} frameTimeDelta
     */
    jump(frameTimeDelta){
        // player jumping logic

        // when in progress and not falling


        // when in progress and falling


        // end the progress
    }

    /**
     * Method to handle the player running
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     */
    run(gameSpeed, frameTimeDelta){
        // player running logic

        // alterate the player image for running
    }


    /**
     * Method to draw the player on the canvas
     */
    draw(){
        // draw the player on the ctx
    }
}