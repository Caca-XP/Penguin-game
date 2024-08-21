export default class Ground {

    /**
     * Constructor
     * initialize the ground and its properties (position, speed, image)
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} width
     * @param {number} height
     * @param {number} speed
     * @param {number} scaleRatio
     */
    constructor(ctx, width, height, speed, scaleRatio){        
        // initialize the ground properties
        this.ctx = ctx; 
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.scaleRatio = scaleRatio;

        // ground position
        this.x = 0;
        this.y = this.canvas.height - this.height * this.scaleRatio;

        // ground image
        this.image = new Image(); // update once the ground image is available
    }

    /**
     * Method to handle the update of the ground image for each frame
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     */
    update(gameSpeed, frameTimeDelta){
        // ground update position
        this.x -= this.speed * gameSpeed * frameTimeDelta;
    }

    /**
     * Method to draw the ground image
     */
    draw(){
        // draw the ground image
        this.ctx.drawImage(this.image, this.x, this.y, this.width * this.scaleRatio, this.height * this.scaleRatio);

        // draw the ground image again to fill the gap
        this.ctx.drawImage(this.image, this.x + this.width * this.scaleRatio, this.y, this.width * this.scaleRatio, this.height * this.scaleRatio);

        // if the ground is at the end of the screen, go back to the start position
        if (this.x <= -this.width * this.scaleRatio){
            this.x = 0;
        }
    }

    /**
     * Method to reset the ground position
     */
    reset(){
        // reset the ground position
        this.x = 0;
    }

}