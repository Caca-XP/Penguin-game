 import Iceberg from './iceberg.js';

export default class ObstacleController {

    // obstacle controller variables

    // interval min and max spawn time
    ICEBERG_INTERVAL_MIN = 800;
    ICEBERG_INTERVAL_MAX = 2000;

    nextIcebergInterval = null;
    // obstacle array
    icebergs = [];


    /**
     * Constructor
     * initialize the obstacle controller and its properties (next obstacle spawn time)
     * @param {CanvasRenderingContext2D} ctx
     * @param {Image[]} images
     * @param {number} scaleRatio
     * @param {number} speed
     */
    constructor(ctx, icebergImages, scaleRatio, speed){
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.icebergImages = icebergImages;
        this.scaleRatio = scaleRatio;
        this.speed = speed;
        // initialize the obstacle controller properties

        // set next obstacle spawn time
        this.setNextSpawnTime();
    }

    /**
     * Method to set the next spawn time
     */
    setNextSpawnTime(){
        // set next obstacle spawn time with random value between min and max spawn time
        const num = this.getRandomNumber(this.ICEBERG_INTERVAL_MIN, this.ICEBERG_INTERVAL_MAX);

        this.nextIcebergInterval = num;
    }

    /**
     * Method to get a random number between min and max
     * @param {number} min 
     * @param {number} max 
     */
    getRandomNumber(min, max){
        // return random number between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Method to create a new obstacle
     */
    createObstacle(){
        // create a new random obstacle
        const randomIndex = this.getRandomNumber(0, this.icebergImages.length - 1);
        const icebergImage = this.icebergImages[randomIndex];
        // set the obstacle position
        const x = this.canvas.width*1.5;//draws the obstacle off screen
        const y = this.canvas.height/2 + 5 - icebergImage.midpoint;

        const iceberg = new Iceberg(this.ctx, x, y, icebergImage.width, icebergImage.height, icebergImage.image);
        // push the obstacle to the obstacle array
        this.icebergs.push(iceberg);
    }

    /**
     * Method to update the obstacle controller
     * @param {number} gameSpeed
     * @param {number} frameTimeDelta
     */
    update(gameSpeed, frameTimeDelta){
        // check if the next obstacle spawn time is reached
        if (this.nextIcebergInterval <= 0){
            // create a new obstacle
            this.createObstacle();
            // set the next spawn time
            this.setNextSpawnTime();
        }
        this.nextIcebergInterval -= frameTimeDelta;

        // update each obstacle
        this.icebergs.forEach(iceberg => {
            iceberg.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio);
        });
        // remove obstacle if it is out of screen
        this.icebergs = this.icebergs.filter(iceberg => iceberg.x > -iceberg.width);

    }

    /**
     * Method to draw the obstacle controller
     */
    draw(){
        // draw each obstacle
        this.icebergs.forEach(iceberg => {
            iceberg.draw();
        });
    }

    /**
     * Method to check if the player collide with the obstacle
     * @param {object} sprite 
     */
    collide(sprite){
        // check if the player collide with the obstacle
        return this.icebergs.some(iceberg => iceberg.collide(sprite));
    }

    /**
     * Method to reset the obstacle controller
     */
    reset(){
        // reset the obstacle controller
        this.icebergs = [];
    }

}