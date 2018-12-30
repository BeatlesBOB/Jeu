/// <reference path='vector.ts'/>
/// <reference path='multisprites.ts'/>
/// <reference path='sound.ts'/>

class Transition {
    
} 

class Hero extends MultiSprites implements Speaking {

    ////////////////////////////////////
    // Etape Laser
    ////////////////////////////////////
    public laser_left : boolean;
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape Hero - creation
    ////////////////////////////////////
    constructor(canvas : HTMLCanvasElement,
                context : CanvasRenderingContext2D) {
        super(canvas, context, "./images/hero.png");

        this.setSize(30,32);
        this.setPosition((this.canvas.width-this.width),320);
        this.setDirection(1, 0);
        
        this.speed = 10;

    }

    public drawObject() {
        this.setSpritePosition(new Vector(0,0));
        super.drawObject();
    }
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape Hero - on bouge
    ////////////////////////////////////
    public moveRight() {
    
        this.dir.setValues(1, 0);
        this.move();
    }

    public moveLeft() {
     
        this.dir.setValues(-1, 0);
        this.move();
    }



    ////////////////////////////////////
    // Etape Laser
    ////////////////////////////////////
    public getPosition() : Vector {
        return this.pos;
    }
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape son
    ////////////////////////////////////
    public soundtrack = new Sound("./sounds/shoot.wav");
    public playSound() {
        this.soundtrack.playSound();
    }
    ////////////////////////////////////
}