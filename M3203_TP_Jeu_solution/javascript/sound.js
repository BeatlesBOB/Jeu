var Sound = /** @class */ (function () {
    function Sound(src) {
        this.son = new Audio(src);
    }
    Sound.prototype.playSound = function () {
        this.son.play();
    };
    return Sound;
}());
