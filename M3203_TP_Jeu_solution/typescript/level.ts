
/// <reference path='hero.ts'/>
/// <reference path='monster.ts'/>
/// <reference path='laser.ts'/>
/// <reference path='laser2.ts'/>

class Level {
    private canvas : HTMLCanvasElement;
    private context : CanvasRenderingContext2D;
    private monstres : Monster[];
    private hero : Hero;
    private lasers : Laser[];
    private hit : boolean;
    private score : number;
    private state : string;
    private lasers2 : Laser2[];
 
    constructor(canvas : HTMLCanvasElement,
                context : CanvasRenderingContext2D,
                nb_m : number) {
        this.canvas = canvas;
        this.context = context;

        ////////////////////////////////////
        // Etape Monstre
        ////////////////////////////////////
        this.monstres = [];
        for (let k = 0; k < nb_m; k++) {
            this.monstres.push(new Monster(this.canvas,this.context));
        }
       
        ////////////////////////////////////
        // Etape Hero - creation
        ////////////////////////////////////
        this.hero = new Hero(this.canvas, this.context);
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Laser
        ////////////////////////////////////
        this.lasers = [];
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape collision
        ////////////////////////////////////
        this.hit = false;
        this.score = 0;
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        this.state = "EnCours";
        ////////////////////////////////////
    }
    
    public updateObjects() {
        ////////////////////////////////////
        // Etape collision
        ////////////////////////////////////
        this.checkCollision();
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Monstre
        ////////////////////////////////////
        
        ////////////////////////////////////
        // Etape collision
        ////////////////////////////////////
        let new_monsters : Monster[] = [];
        ////////////////////////////////////
        for (let k = 0; k < this.monstres.length; k++) {
            this.monstres[k].move();

            ////////////////////////////////////
            // Etape collision
            ////////////////////////////////////
            if (!this.monstres[k].to_delete) {
                new_monsters.push(this.monstres[k]);
            }
            ////////////////////////////////////
        }
        ////////////////////////////////////
        // Etape collision
        ////////////////////////////////////
        this.monstres = new_monsters;
        ////////////////////////////////////

        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Laser
        ////////////////////////////////////
                let new_lasers2 : Laser2[] = [];
        ////////////////////////////////////
        for (let k = 0; k < this.lasers2.length; k++) {
            this.lasers2[k].move();

            ////////////////////////////////////
            // Etape suppression laser
            ////////////////////////////////////
            if (!this.lasers2[k].to_delete) {
                new_lasers2.push(this.lasers2[k]);
            }
            ////////////////////////////////////
            // Etape son
            ////////////////////////////////////
            else {
                this.lasers2[k].playSound();
            }
            ////////////////////////////////////

            ////////////////////////////////////
        }
        ////////////////////////////////////
        // Etape suppression laser
        ////////////////////////////////////
        this.lasers2 = new_lasers2;
        ////////////////////////////////////
        // Etape suppression laser
        ////////////////////////////////////
        let new_lasers : Laser[] = [];
        ////////////////////////////////////
        for (let k = 0; k < this.lasers.length; k++) {
            this.lasers[k].move();

            ////////////////////////////////////
            // Etape suppression laser
            ////////////////////////////////////
            if (!this.lasers[k].to_delete) {
                new_lasers.push(this.lasers[k]);
            }
            ////////////////////////////////////
            // Etape son
            ////////////////////////////////////
            else {
                this.lasers[k].playSound();
            }
            ////////////////////////////////////

            ////////////////////////////////////
        }
        ////////////////////////////////////
        // Etape suppression laser
        ////////////////////////////////////
        this.lasers = new_lasers;
        ////////////////////////////////////
        
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        this.checkVictory();
        ////////////////////////////////////
    }

    public drawObjects() {
        ////////////////////////////////////
        // Etape Porte
        ////////////////////////////////////

        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Monstre
        ////////////////////////////////////
        for (let k = 0; k < this.monstres.length; k++) {
            this.monstres[k].drawObject();
        }
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Hero - creation
        ////////////////////////////////////
        this.hero.drawObject();
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape Laser
        ////////////////////////////////////
        for (let k = 0; k < this.lasers.length; k++) {
            this.lasers[k].drawObject();
        }
        ////////////////////////////////////
    }

    public keyRight() {
        ////////////////////////////////////
        // Etape Hero - on bouge
        ////////////////////////////////////
        this.hero.moveRight();
        ////////////////////////////////////
    }

    public keyLeft() {
        ////////////////////////////////////
        // Etape Hero - on bouge
        ////////////////////////////////////
        this.hero.moveLeft();
        ////////////////////////////////////
    }
    public autoshoot(){
        let pos : Vector = this.hero.getPosition();
        setInterval(() => this.lasers2.push(new Laser2(this.canvas, this.context, pos.x,pos.y)), 2000);
    }

    public keySpace() {
        ////////////////////////////////////
        // Etape Laser
        ////////////////////////////////////
        let pos : Vector = this.hero.getPosition();
        this.lasers.push(new Laser(this.canvas, this.context, pos.x, pos.y));
        ////////////////////////////////////

        ////////////////////////////////////
        // Etape son
        ////////////////////////////////////
        this.hero.playSound();
        ////////////////////////////////////
    }

    ////////////////////////////////////
    // Etape collision
    ////////////////////////////////////
    private checkCollision() {
        for (let k = 0; k < this.monstres.length; k++) {
            if (!this.monstres[k].to_delete) {
                for (let l = 0; l < this.lasers.length; l++) {
                    if (!this.lasers[l].to_delete) {
                        if (this.lasers[l].collision(this.monstres[k])) {
                            this.monstres[k].to_delete = true;
                            this.lasers[l].to_delete = true;
                            this.score++;
                            break;
                        }
                    }
                }
            }
        }

        for (let k = 0; k < this.monstres.length; k++) {
            if (!this.monstres[k].to_delete) {
                if (this.monstres[k].collision(this.hero)) {
                    this.hit = true;
                }
            }
        }
    }
    ////////////////////////////////////

    ////////////////////////////////////
    // Etape Victoire
    ////////////////////////////////////
    private checkVictory() {
        if (this.hit) {
            this.state = "Perdu";
        } else {
            if ((this.monstres.length == 0)) {
                this.state = "Gagne";
            }
        }
    }
    ////////////////////////////////////

    public getLevelScore() : number {
        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        return this.score;
        ////////////////////////////////////
        return 0; // A changer en temps voulu
    }

    public getLevelState() : string {
        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        return this.state;
        ////////////////////////////////////
        return "En cours"; // TODO
    }
}