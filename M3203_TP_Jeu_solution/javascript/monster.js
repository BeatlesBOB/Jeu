/// <reference path='animatedobject.ts'/>
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
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    ////////////////////////////////////
    // Etape Monstre
    ////////////////////////////////////
    function Monster(canvas, context) {
        var _this = _super.call(this, canvas, context, "./images/monstre.png") || this;
        _this.setSize(30, 23);
        var posy = 0;
        _this.setPosition(posy, posy);
        var dirX = 1;
        var dirY = 0;
        _this.setDirection(dirX, dirY);
        _this.speed = 2;
        return _this;
    }
    Monster.prototype.move = function () {
        _super.prototype.move.call(this, true);
    };
    return Monster;
}(AnimatedObject));
