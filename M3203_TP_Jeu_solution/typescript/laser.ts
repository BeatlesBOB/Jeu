/// <reference path='animatedobject.ts'/>
/// <reference path='sound.ts'/>

class Laser extends AnimatedObject implements Speaking {
    ////////////////////////////////////
    // Etape Laser
    ////////////////////////////////////
    constructor(canvas : HTMLCanvasElement,
                context : CanvasRenderingContext2D,
                x : number, y : number) {
        super(canvas, context, "./images/laser.png");

        this.setSize(32, 8);

            this.setPosition(x+10,y+10);
            this.setDirection(0,-1);
        this.speed = 30;
    }

    public move() {
        super.move(false);

        ////////////////////////////////////
        // Etape suppression laser
        ////////////////////////////////////
        if (this.pos.x <= 0) {
            this.to_delete = true;
        }

        if (this.pos.x >= this.canvas.width - this.width) {
            this.to_delete = true;
        }
        ////////////////////////////////////
    }
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape son
    ////////////////////////////////////
    public soundtrack = new Sound("./sounds/explosion.wav");
    public playSound() {
        this.soundtrack.playSound();
    }
    ////////////////////////////////////
}