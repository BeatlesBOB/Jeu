/// <reference path='vector.ts'/>
var AnimatedObject = /** @class */ (function () {
    ////////////////////////////////////
    function AnimatedObject(canvas, context, src) {
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
    AnimatedObject.prototype.setSize = function (w, h) {
        this.width = w;
        this.heigth = h;
    };
    AnimatedObject.prototype.setPosition = function (x, y) {
        if (this.pos == null) {
            this.pos = new Vector(x, y);
        }
        else {
            this.pos.setValues(x, y);
        }
    };
    AnimatedObject.prototype.setDirection = function (x, y) {
        if (this.dir == null) {
            this.dir = new Vector(x, y);
        }
        else {
            this.dir.setValues(x, y);
        }
    };
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape mouvoir un objet
    ////////////////////////////////////
    AnimatedObject.prototype.move = function (update_dir) {
        if (update_dir === void 0) { update_dir = false; }
        this.pos.addToX(this.dir.x * this.speed);
        this.pos.addToY(this.dir.y * this.speed);
        var newX = this.pos.x;
        var newDirX = this.dir.x;
        var newY = this.pos.y;
        var newDirY = this.dir.y;
        var newspeed = this.speed;
        if (newX > this.canvas.width - this.width) {
            newX = this.canvas.width - this.width;
            if (update_dir) {
                newDirX = this.dir.x * -1;
                newY = this.pos.y + 10;
                newspeed = this.speed + 0.5;
            }
        }
        if (newX < 0) {
            newX = 0;
            if (update_dir) {
                newDirX = this.dir.x * -1;
                newY = this.pos.y + 10;
                newspeed = this.speed + 0.5;
            }
        }
        this.speed = newspeed;
        this.pos.setValues(newX, newY);
        this.dir.setValues(newDirX, newDirY);
    };
    Object.defineProperty(AnimatedObject.prototype, "to_delete", {
        get: function () {
            return this._to_delete;
        },
        ////////////////////////////////////
        ////////////////////////////////////
        // Etape suppression laser
        ////////////////////////////////////
        set: function (val) {
            this._to_delete = val;
        },
        enumerable: true,
        configurable: true
    });
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape collision
    ////////////////////////////////////
    AnimatedObject.prototype.collision = function (other) {
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
    };
    ////////////////////////////////////
    // A decommenter en temps voulu
    AnimatedObject.prototype.drawObject = function () {
        this.context.drawImage(this.img, // image a afficher
        0, 0, // rect A, coin haut gauche
        this.width, this.heigth, // rect A, taille
        this.pos.x, this.pos.y, // rect B, coin haut gauche
        this.width, this.heigth); // rect B, taille
    };
    return AnimatedObject;
}());
