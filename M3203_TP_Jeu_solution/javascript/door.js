/// <reference path='multisprites.ts'/>
/// <reference path='sound.ts'/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door(canvas, context) {
        var _this = _super.call(this, canvas, context, "./images/porte.png") || this;
        ////////////////////////////////////
        ////////////////////////////////////
        // Etape son
        ////////////////////////////////////
        _this.soundtrack = new Sound("./sounds/son_door_open.wav");
        _this.setSize(60, 60);
        _this.setPosition((Math.random() * (_this.canvas.width - _this.width)), (Math.random() * (_this.canvas.height - _this.heigth)));
        _this.lock = true;
        _this.close = new Vector(0, 0);
        _this.open = new Vector(100, 0);
        return _this;
    }
    Door.prototype.drawObject = function () {
        if (this.lock) {
            this.setSpritePosition(this.close);
        }
        else {
            this.setSpritePosition(this.open);
        }
        _super.prototype.drawObject.call(this);
    };
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape Victoire
    ////////////////////////////////////
    Door.prototype.unlock = function () {
        this.lock = false;
    };
    Door.prototype.playSound = function () {
        this.soundtrack.playSound();
    };
    return Door;
}(MultiSprites));
