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
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image;

    }

    /**
     * Method to update the iceberg position for each frame
     * @param {number} speed
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     * @param {number} scaleRatio
     */
    update(speed, gameSpeed, frameTimeDelta, scaleRatio){
        // update the iceberg position
        this.x -= speed * gameSpeed * frameTimeDelta * scaleRatio;
        
    }

    /**
     * Method to draw the iceberg image
     */
    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        // draw the iceberg image
    }

    /**
     * Method to check if the player collide with the iceberg
     */
    collide(sprite){
        // check if the player collide with the iceberg
         const adjustBy = 1.2;//adjust the collision box to make it more accurate

        var hitboxWidth = this.x + this.width/2;
        var hitboxHeight = this.y + this.height/adjustBy;
        var hitboxX = this.x + this.width/4;
        var hitboxY = this.y;

        if(
            sprite.x < hitboxWidth &&
            sprite.x + sprite.width/adjustBy > hitboxX &&
            sprite.y < hitboxHeight &&
            sprite.y + sprite.height/adjustBy > hitboxY
        ){
            return true;// return true if collided

        }else{
            return false;// return false if not collided
        }
    }
}