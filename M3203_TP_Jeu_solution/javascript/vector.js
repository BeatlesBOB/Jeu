var Vector = /** @class */ (function () {
    function Vector(valX, valY) {
        this._x = valX;
        this._y = valY;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.setValues = function (valX, valY) {
        this._x = valX;
        this._y = valY;
    };
    Vector.prototype.addToX = function (val) {
        this._x += val;
    };
    Vector.prototype.addToY = function (val) {
        this._y += val;
    };
    return Vector;
}());
// ZONE de test a decommenter une fois la classe ecrite //
// Une fois tester et fonctionnel, vous pouvez          //
// recommenter le code                                  //
// Pour tester, lancer le fichier index.html sur Chrome //
// et ouvrez la console.                                //
// console.log("Debut - Test de la classe Vector");
// let v : Vector = new Vector(5,3);
// console.log("vx , vy =", v.x,",",v.y," (attendu: 5 , 3 )");
// v.setValues(12,9);
// console.log("vx , vy =", v.x,",",v.y," (attendu: 12 , 9 )");
// v.addToX(1);
// console.log("vx =", v.x," (attendu: 13 )");
// v.addToX(-7);
// console.log("vx =", v.x," (attendu: 6 )");
// v.addToY(11);
// console.log("vy =", v.y," (attendu: 20 )");
// v.addToY(-19);
// console.log("vy =", v.y," (attendu: 1 )");
// console.log("Fin - Test de la classe Vector");
// v.x = 1; // Erreur ! Cette ligne ne doit pas etre possible. Si vous avez l'erreur c'est parfait re-commentez la ligne
// v.y = 2; // Erreur ! Cette ligne ne doit pas etre possible. Si vous avez l'erreur c'est parfait re-commentez la ligne
//////////////////
