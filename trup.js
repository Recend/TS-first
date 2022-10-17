var Trupmena = /** @class */ (function () {
    function Trupmena(_sveikojiDalis, _skaitiklis, _daliklis) {
        this._sveikojiDalis = _sveikojiDalis;
        this._skaitiklis = _skaitiklis;
        this._daliklis = _daliklis;
    }
    Trupmena.prototype.prastinti = function () {
        var bdd = 1;
        for (var i = 1; i <= this._daliklis; i++) {
            if (this._skaitiklis % i == 0 && this._daliklis % i == 0) {
                bdd = i;
            }
        }
        this._skaitiklis /= bdd;
        this._daliklis /= bdd;
        if (this._skaitiklis >= this._daliklis) {
            this._sveikojiDalis += Math.round(this._skaitiklis / this._daliklis);
            this._skaitiklis %= this._daliklis;
        }
    };
    Object.defineProperty(Trupmena.prototype, "sveikojiDalis", {
        get: function () {
            return this._sveikojiDalis;
        },
        set: function (sveikojiDalis) {
            this._sveikojiDalis = sveikojiDalis;
            this.prastinti();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trupmena.prototype, "skaitiklis", {
        get: function () {
            return this._skaitiklis;
        },
        set: function (skaitiklis) {
            this._skaitiklis = skaitiklis;
            this.prastinti();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trupmena.prototype, "daliklis", {
        get: function () {
            return this._daliklis;
        },
        set: function (daliklis) {
            this._daliklis = daliklis;
            this.prastinti();
        },
        enumerable: false,
        configurable: true
    });
    Trupmena.prototype.toString = function () {
        return this._sveikojiDalis + ' ' + this._skaitiklis + '/' + this._daliklis;
    };
    Trupmena.prototype.pridetiInt = function (i) {
        this.sveikojiDalis += i;
    };
    Trupmena.prototype.prideti = function (sveikojiDalis, skaitiklis, daliklis) {
        this._sveikojiDalis += sveikojiDalis;
        this._skaitiklis = this._skaitiklis * daliklis + this._daliklis * skaitiklis;
        this._daliklis = this._daliklis * daliklis;
        this.prastinti();
    };
    Trupmena.prototype.pridetiTrupmena = function (x) {
        this.prideti(x._sveikojiDalis, x._skaitiklis, x._daliklis);
        this.prastinti();
    };
    Trupmena.prototype.toDouble = function () {
        return this._sveikojiDalis + this._skaitiklis / this._daliklis;
    };
    return Trupmena;
}());
var kazkas = new Trupmena(10, 5, 2);
var kota = new Trupmena(4, 10, 7);
// kazkas.skaitiklis=6;
// kazkas.prideti(5, 7, 12);
// kazkas.pridetiTrupmena(kota)
console.log(kazkas.toDouble());
