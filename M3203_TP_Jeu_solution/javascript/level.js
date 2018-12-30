/// <reference path='hero.ts'/>
/// <reference path='monster.ts'/>
/// <reference path='laser.ts'/>
var Level = /** @class */ (function () {
    function Level(canvas, context, nb_m) {
        this.canvas = canvas;
        this.context = context;
        ////////////////////////////////////
        // Etape Monstre
        ////////////////////////////////////
        this.monstres = [];
        for (var k = 0; k < nb_m; k++) {
            this.monstres.push(new Monster(this.canvas, this.context));
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
    Level.prototype.updateObjects = function () {
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
        var new_monsters = [];
        ////////////////////////////////////
        for (var k = 0; k < this.monstres.length; k++) {
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
        ////////////////////////////////////
        // Etape suppression laser
        ////////////////////////////////////
        var new_lasers = [];
        ////////////////////////////////////
        for (var k = 0; k < this.lasers.length; k++) {
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
    };
    Level.prototype.drawObjects = function () {
        ////////////////////////////////////
        // Etape Porte
        ////////////////////////////////////
        ////////////////////////////////////
        ////////////////////////////////////
        // Etape Monstre
        ////////////////////////////////////
        for (var k = 0; k < this.monstres.length; k++) {
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
        for (var k = 0; k < this.lasers.length; k++) {
            this.lasers[k].drawObject();
        }
        ////////////////////////////////////
    };
    Level.prototype.keyRight = function () {
        ////////////////////////////////////
        // Etape Hero - on bouge
        ////////////////////////////////////
        this.hero.moveRight();
        ////////////////////////////////////
    };
    Level.prototype.keyLeft = function () {
        ////////////////////////////////////
        // Etape Hero - on bouge
        ////////////////////////////////////
        this.hero.moveLeft();
        ////////////////////////////////////
    };
    Level.prototype.keySpace = function () {
        ////////////////////////////////////
        // Etape Laser
        ////////////////////////////////////
        var pos = this.hero.getPosition();
        this.lasers.push(new Laser(this.canvas, this.context, pos.x, pos.y, this.hero.laser_left));
        ////////////////////////////////////
        ////////////////////////////////////
        // Etape son
        ////////////////////////////////////
        this.hero.playSound();
        ////////////////////////////////////
    };
    ////////////////////////////////////
    // Etape collision
    ////////////////////////////////////
    Level.prototype.checkCollision = function () {
        for (var k = 0; k < this.monstres.length; k++) {
            if (!this.monstres[k].to_delete) {
                for (var l = 0; l < this.lasers.length; l++) {
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
        for (var k = 0; k < this.monstres.length; k++) {
            if (!this.monstres[k].to_delete) {
                if (this.monstres[k].collision(this.hero)) {
                    this.hit = true;
                }
            }
        }
    };
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape Victoire
    ////////////////////////////////////
    Level.prototype.checkVictory = function () {
        if (this.hit) {
            this.state = "Perdu";
        }
        else {
            if ((this.monstres.length == 0)) {
                this.state = "Gagne";
            }
        }
    };
    ////////////////////////////////////
    Level.prototype.getLevelScore = function () {
        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        return this.score;
        ////////////////////////////////////
        return 0; // A changer en temps voulu
    };
    Level.prototype.getLevelState = function () {
        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        return this.state;
        ////////////////////////////////////
        return "En cours"; // TODO
    };
    return Level;
}());
