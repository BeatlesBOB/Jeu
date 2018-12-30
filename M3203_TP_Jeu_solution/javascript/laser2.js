/// <reference path='animatedobject.ts'/>
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
var Laser2 = /** @class */ (function (_super) {
    __extends(Laser2, _super);
    ////////////////////////////////////
    // Etape Laser
    ////////////////////////////////////
    function Laser2(canvas, context, x, y, to_left) {
        var _this = _super.call(this, canvas, context, "./images/laser.png") || this;
        ////////////////////////////////////
        ////////////////////////////////////
        // Etape son
        ////////////////////////////////////
        _this.soundtrack = new Sound("./sounds/explosion.wav");
        _this.setSize(32, 8);
        _this.setPosition(x + 10, y + 10);
        _this.setDirection(0, 1);
        _this.speed = 30;
        return _this;
    }
    Laser2.prototype.move = function () {
        _super.prototype.move.call(this, false);
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
    };
    Laser2.prototype.playSound = function () {
        this.soundtrack.playSound();
    };
    return Laser2;
}(AnimatedObject));
