export default class Iceberg {

    /**
     * Constructor
     * initialize the iceberg and its properties (position, image)
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {Image} image
     */
    constructor(ctx, x, y, width, height, image){
        // initialize the iceberg properties
    }

    /**
     * Method to update the iceberg position for each frame
     * @param {number} speed
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     * @param {number} scaleRatio
     */
    update(speed, gameSpeed, frameTimeDelta, scaleRatio){
        // iceberg update position
    }

    /**
     * Method to draw the iceberg image
     */
    draw(){
        // draw the iceberg image
    }

    /**
     * Method to check if the player collide with the iceberg
     */
    collide(sprite){
        // check if the player collide with the iceberg

        // return true if collided

        // return false if not collided
    }
}