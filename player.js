/**
 * Player class
 */

export default class Player {
    ANIMATION_TIMER = 200;
    animationTimer = this.ANIMATION_TIMER;

    // player variables
    standingStillImage = null;
    swimmingImages = [];
    northEastImage = null;
    southEastImage = null;

    falling = false;
    jumpInProgress = false;
    jumpPressed = false;
    JUMP_SPEED = 0.6;
    GRAVITY = 0.4;

    swimingUp = false;
    divePressed = false;
    diveInProgress = false;
    DIVE_SPEED = 0.6;
    BOUYANCY = 0.4;

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
    constructor(ctx, width, height, minJumpHeight, maxJumpHeight, minDiveHeight, maxDiveHeight, scaleRatio){
        // initialize the player properties
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.width = width;
        this.height = height;
        this.minJumpHeight = minJumpHeight;
        this.maxJumpHeight = maxJumpHeight;
        this.minDiveHeight = minDiveHeight;
        this.maxDiveHeight = maxDiveHeight;
        this.scaleRatio = scaleRatio;

        // player position
        this.x = 20 * this.scaleRatio;
        this.y = this.canvas.height/2 - this.height + 1.5 * this.scaleRatio;
        this.initialY = this.y;

        // player image
        this.standingStillImage = new Image(); 
        this.standingStillImage.src = './images/peng-still.png';
        this.image = this.standingStillImage;

        const swim1 = new Image();
        swim1.src = './images/peng-swim1.png';
        const swim2 = new Image();
        swim2.src = './images/peng-swim.png';
        const swim3 = new Image();
        swim3.src = './images/peng-swim2.png';

        this.swimmingImages.push(swim1);
        this.swimmingImages.push(swim2);
        this.swimmingImages.push(swim3);
        this.swimmingImages.push(swim2);
        
        this.northEastImage = new Image();
        this.northEastImage.src = './images/peng-NE.png';
        this.southEastImage = new Image();
        this.southEastImage.src = './images/peng-SE.png';
        
        // remove if exists and add event listeners
        window.removeEventListener('touchstart', this.touchstart);
        window.removeEventListener('touchend', this.touchend);
        window.removeEventListener('keydown', this.keydown);
        window.removeEventListener('keyup', this.keyup);

        window.addEventListener('touchstart', this.touchstart);
        window.addEventListener('touchend', this.touchend);
        window.addEventListener('keydown', this.keydown);
        window.addEventListener('keyup', this.keyup);
    }

    // event listeners, touchstart, touchend, keydown, keyup 
    touchstart = () => {
        this.jumpPressed = true;
    }

    touchend = () => {
        this.jumpPressed = false;
    }

    keydown = (event) => {
        if (event.code ==='Space' || event.code === 'ArrowUp' || event.code === 'KeyW'){
            this.jumpPressed = true;
        }
        if (event.code === 'ArrowDown' || event.code === 'KeyS'){
            this.divePressed = true;
        }
    }

    keyup = (event) => {
        if (event.code ==='Space' || event.code === 'ArrowUp' || event.code === 'KeyW'){
            this.jumpPressed = false;
        }
        if (event.code === 'ArrowDown' || event.code === 'KeyS'){
            this.divePressed = false;
        }
    }

    /**
     * Method to handle the update of the player image for each frame
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     */
    update(gameSpeed, frameTimeDelta){
        // player running update
        this.run(gameSpeed, frameTimeDelta);

        // player jumping update
        this.jump(frameTimeDelta);

        // player diving update
        this.dive(frameTimeDelta);

    }

    /**
     * Method to handle the player jump
     * @param {number} frameTimeDelta
     */
    jump(frameTimeDelta){
        // player jumping logic
        if(this.jumpPressed){
            this.jumpInProgress = true;
        }

        // when in progress and not falling
        if (this.jumpInProgress && !this.falling){
            // this means the player is increasing in height
            // when the player reaches the min jump height or the max jump height, the player will start falling
            if (this.y > this.canvas.height/2 - this.minJumpHeight || (this.y > this.canvas.height/2 - this.maxJumpHeight && this.jumpPressed)){
                this.y -= this.JUMP_SPEED * frameTimeDelta * this.scaleRatio;
                this.image = this.northEastImage;
            } else {
                this.falling = true;
            }

        }


        // when in progress and falling
        if (this.jumpInProgress && this.falling){
            // this means the player is falling
            // when the player reaches the ground, the player will stop falling
            if (this.y < this.initialY){
                this.y += this.GRAVITY * frameTimeDelta * this.scaleRatio;
                this.image = this.southEastImage;
            } else {
                this.y = this.initialY;
                this.jumpInProgress = false;
                this.falling = false;
            }
        }


        // end the progress
    }

    /**
     * Method to handle the player dive
     * @param {number} frameTimeDelta
     */
    dive(frameTimeDelta){
        // player diving logic
        if(this.divePressed){
            this.diveInProgress = true;
        }

        // when in progress and not swimming up
        if (this.diveInProgress && !this.swimingUp){
            // this means the player is increasing in height
            // when the player reaches the min dive height or the max dive height, the player will start swimming up
            if (this.y < this.canvas.height/2 + this.minDiveHeight || (this.y < this.canvas.height/2 + this.maxDiveHeight && this.divePressed)){
                this.y += this.DIVE_SPEED * frameTimeDelta * this.scaleRatio;
                this.image = this.southEastImage;
            } else {
                this.swimingUp = true;
            }

        }

        // when in progress and swimming up
        if (this.diveInProgress && this.swimingUp){
            // this means the player is swimming up
            // when the player reaches the ground, the player will stop swimming up
            if (this.y > this.initialY){
                this.y -= this.BOUYANCY * frameTimeDelta * this.scaleRatio;
                this.image = this.northEastImage;
            } else {
                this.y = this.initialY;
                this.diveInProgress = false;
                this.swimingUp = false;
            }
        }

    }

    /**
     * Method to handle the player running
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     */
    run(gameSpeed, frameTimeDelta){
        // player running logic
        // alterate the player image for running
        if (this.animationTimer <= 0){
            this.animationTimer = this.ANIMATION_TIMER;
            this.image = this.swimmingImages[0];
            this.swimmingImages.push(this.swimmingImages.shift());
        }
        this.animationTimer -= frameTimeDelta * gameSpeed;

    }


    /**
     * Method to draw the player on the canvas
     */
    draw(){

        // draw the player on the ctx
        this.ctx.drawImage(this.image, this.x, this.y, (this.image.width * this.scaleRatio) , (this.image.height * this.scaleRatio));
    }
}