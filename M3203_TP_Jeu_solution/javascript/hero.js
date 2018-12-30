/// <reference path='vector.ts'/>
/// <reference path='multisprites.ts'/>
/// <reference path='sound.ts'/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transition = /** @class */ (function () {
    function Transition() {
    }
    return Transition;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape Hero - creation
    ////////////////////////////////////
    function Hero(canvas, context) {
        var _this = _super.call(this, canvas, context, "./images/hero.png") || this;
        ////////////////////////////////////
        ////////////////////////////////////
        // Etape son
        ////////////////////////////////////
        _this.soundtrack = new Sound("./sounds/shoot.wav");
        _this.setSize(30, 32);
        _this.setPosition((_this.canvas.width - _this.width), 320);
        _this.setDirection(1, 0);
        _this.speed = 10;
        return _this;
    }
    Hero.prototype.drawObject = function () {
        this.setSpritePosition(new Vector(0, 0));
        _super.prototype.drawObject.call(this);
    };
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape Hero - on bouge
    ////////////////////////////////////
    Hero.prototype.moveRight = function () {
        this.dir.setValues(1, 0);
        this.move();
    };
    Hero.prototype.moveLeft = function () {
        this.dir.setValues(-1, 0);
        this.move();
    };
    ////////////////////////////////////
    // Etape Laser
    ////////////////////////////////////
    Hero.prototype.getPosition = function () {
        return this.pos;
    };
    Hero.prototype.playSound = function () {
        this.soundtrack.playSound();
    };
    return Hero;
}(MultiSprites));
