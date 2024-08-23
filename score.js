export default class Score {


    score = 0; // initialize the score
    HIGH_SCORE_KEY = 'highScore'; // key for local storage

    /**
     * Constructor
     * initialize the score
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} scaleRatio
     */

    constructor(ctx, scaleRatio){
        // initialize the score properties
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.scaleRatio = scaleRatio;
    }

    /**
     * Method to handle the update of the score for each frame
     * @param {number} frameTimeDelta
     */
    update(frameTimeDelta){
        this.score += frameTimeDelta * this.scaleRatio;
    }

    /**
     * Method to reset the score
     */
    reset(){
        // reset the score
        this.score = 0;
    }

    /**
     * Method to set high score
     */
    setHighScore(){
        // check from local storage if the high score is set
        const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));

        // set the high score if current score is higher
        if (this.score > highScore){
            localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score));
        }
    }

    /**
     * Method to draw the score
     */
    draw(){
        // draw the high score
        const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
        this.y = 20 * this.scaleRatio;

        const fontSize = 20 * this.scaleRatio;
        this.ctx.fillStyle = '#525250';

        // draw the score
        const scoreX = this.canvas.width - 75 * this.scaleRatio;
        const highScoreX = scoreX - 125 * this.scaleRatio;

        const scorePadded = Math.floor(this.score).toString().padStart(6, '0');
        const highScorePadded = highScore.toString().padStart(6, '0');

        this.ctx.fillText(scorePadded, scoreX, this.y);
        this.ctx.fillText(`HI: ${highScorePadded}`, highScoreX, this.y);

    }

}