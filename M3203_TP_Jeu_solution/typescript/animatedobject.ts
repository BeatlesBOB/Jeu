/// <reference path='vector.ts'/>

class AnimatedObject {
    protected canvas : HTMLCanvasElement;
    protected context : CanvasRenderingContext2D;

    protected img : HTMLImageElement;

    ////////////////////////////////////
    // Etape afficher un objet
    ////////////////////////////////////
    protected pos : Vector;
    protected dir : Vector;
    protected width : number;
    protected heigth : number;
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape mouvoir un objet
    ////////////////////////////////////
    protected speed : number;
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape suppression laser
    ////////////////////////////////////
    private _to_delete : boolean;
    ////////////////////////////////////

    constructor(canvas : HTMLCanvasElement,
                context : CanvasRenderingContext2D,
                src : string) {
        ////////////////////////////////////
        // Etape afficher un objet
        ////////////////////////////////////
        this.canvas = canvas;
        this.context = context;

        this.img = new Image();
        this.img.src = src;
        this.width = 0;
        this.heigth = 0;

        this.pos = null;
        this.dir = null;
        ////////////////////////////////////


        ////////////////////////////////////
        // Etape mouvoir un objet
        ////////////////////////////////////
        this.speed = 0;
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape suppression laser
        ////////////////////////////////////
        this.to_delete = false;
        ////////////////////////////////////
    }

    ////////////////////////////////////
    // Etape afficher un objet
    ////////////////////////////////////
    protected setSize(w : number, h : number) {
        this.width = w;
        this.heigth = h;
    }

    protected setPosition(x : number, y : number) {
        if (this.pos == null) {
            this.pos = new Vector(x,y);
        } else {
            this.pos.setValues(x, y);
        }
    }

    protected setDirection(x : number, y : number) {
        if (this.dir == null) {
            this.dir = new Vector(x,y);
        } else {
            this.dir.setValues(x, y);
        }
    }
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape mouvoir un objet
    ////////////////////////////////////
    public move(update_dir : boolean = false) {
        this.pos.addToX(this.dir.x * this.speed);
        this.pos.addToY(this.dir.y * this.speed);

        let newX = this.pos.x;
        let newDirX = this.dir.x;
        let newY = this.pos.y;
        let newDirY = this.dir.y;
        let newspeed = this.speed;
        
        if (newX > this.canvas.width - this.width) {
            newX = this.canvas.width - this.width;
            if (update_dir) {
                newDirX = this.dir.x * -1;
                newY= this.pos.y+10;
                newspeed= this.speed+0.5;
            }
        }
        if (newX < 0) {
            newX = 0;
            if (update_dir) {
                newDirX = this.dir.x * -1;
                newY= this.pos.y+10;
                newspeed= this.speed+0.5;
            }
        }
        this.speed = newspeed;
        this.pos.setValues(newX, newY);
        this.dir.setValues(newDirX, newDirY);
    }
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape suppression laser
    ////////////////////////////////////
    set to_delete(val : boolean) {
        this._to_delete = val;
    }

    get to_delete() : boolean {
        return this._to_delete;
    }
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape collision
    ////////////////////////////////////
    public collision(other : AnimatedObject) : boolean {
        // Coin haut gauche 
        if ((this.pos.x >= other.pos.x) && (this.pos.x <= other.pos.x + other.width)) {
            if ((this.pos.y >= other.pos.y) && (this.pos.y <= other.pos.y + other.heigth)) {
                return true;
            }
        }
        // Coin haut droit 
        if ((this.pos.x + this.width >= other.pos.x) && (this.pos.x + this.width <= other.pos.x + other.width)) {
            if ((this.pos.y >= other.pos.y) && (this.pos.y <= other.pos.y + other.heigth)) {
                return true;
            }
        }
        // Coin bas gauche 
        if ((this.pos.x >= other.pos.x) && (this.pos.x <= other.pos.x + other.width)) {
            if ((this.pos.y + this.heigth >= other.pos.y) && (this.pos.y + this.heigth <= other.pos.y + other.heigth)) {
                return true;
            }
        }
        // Coin bas droit 
        if ((this.pos.x + this.width >= other.pos.x) && (this.pos.x + this.width <= other.pos.x + other.width)) {
            if ((this.pos.y + this.heigth >= other.pos.y) && (this.pos.y + this.heigth <= other.pos.y + other.heigth)) {
                return true;
            }
        }

        return false;
    }
    ////////////////////////////////////

    // A decommenter en temps voulu
    public drawObject() {
        this.context.drawImage(this.img,                 // image a afficher
                               0, 0,                     // rect A, coin haut gauche
                               this.width, this.heigth,  // rect A, taille
                               this.pos.x, this.pos.y,   // rect B, coin haut gauche
                               this.width, this.heigth); // rect B, taille
    }

    // ZONE de test                                         //
    // Une fois tester et fonctionnel, vous pouvez          //
    // recommenter le code                                  //
    // static obj_test : AnimatedObject = null;
    // static test() {
    //     let canvas = <HTMLCanvasElement> document.getElementById("game");
    //     if (AnimatedObject.obj_test == null) {
    //         AnimatedObject.obj_test = new AnimatedObject(canvas, canvas.getContext('2d'),"images/monstre.png");
    //         AnimatedObject.obj_test.setPosition(10, 10);
    //         AnimatedObject.obj_test.setDirection(1, 0); // 1, 0 ou -1
    //         AnimatedObject.obj_test.setSize(30, 32);
    //         // AnimatedObject.obj_test.speed = 5; // Pour le deplacement
    //     }
    //     // AnimatedObject.obj_test.move(); // Pour le deplacement
    //     AnimatedObject.obj_test.drawObject();
    // }
    //////////////////
}