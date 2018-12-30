class Vector {
    ////////////////////////////////////
    // Etape classe Vector
    ////////////////////////////////////
    private _x : number;
    private _y : number;

    constructor(valX : number, valY : number) {
        this._x = valX;
        this._y = valY;
    }

    get x() : number {
        return this._x;
    }

    get y() : number {
        return this._y;
    }

    public setValues(valX : number, valY : number) {
        this._x = valX;
        this._y = valY;
    }

    public addToX(val : number) {
        this._x += val;
    }

    public addToY(val : number) {
        this._y += val;
    }
    ////////////////////////////////////
}

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