/// <reference path='animatedobject.ts'/>

class Monster extends AnimatedObject  {
   
    ////////////////////////////////////
    // Etape Monstre
    ////////////////////////////////////
    constructor(canvas : HTMLCanvasElement,
                context : CanvasRenderingContext2D) {
        super(canvas, context, "./images/monstre.png");
        this.setSize(30,23);
        let posy=0;
        this.setPosition(posy,posy);
        let dirX = 1
        let dirY = 0;
        this.setDirection(dirX,dirY);
        this.speed = 2;
    }
    public move() {
        super.move(true);
    }
    public getPosition() : Vector {
        return this.pos;
    }
    ////////////////////////////////////
}