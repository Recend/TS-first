class Trupmena {

    constructor(private _sveikojiDalis:number, private _skaitiklis:number, private _daliklis:number){

    }
    private prastinti(){

        let bdd=1;
        for (let i=1; i<=this._daliklis; i++){
            if (this._skaitiklis % i==0 && this._daliklis % i==0){
                bdd=i;
            }
        }
        this._skaitiklis/=bdd;
        this._daliklis/=bdd;
        if (this._skaitiklis>=this._daliklis){
            this._sveikojiDalis+=Math.round(this._skaitiklis/this._daliklis);
            this._skaitiklis%=this._daliklis;
        }
    }


    public get sveikojiDalis(){
        return this._sveikojiDalis;

    }
    public get skaitiklis(){
        return this._skaitiklis;

    }
    public get daliklis(){
        return this._daliklis;

    }
    public set sveikojiDalis(sveikojiDalis:number){
        this._sveikojiDalis=sveikojiDalis;
        this.prastinti();
    }
    public set skaitiklis(skaitiklis:number){
        this._skaitiklis=skaitiklis;
        this.prastinti();
    }
    public set daliklis(daliklis:number){
        this._daliklis=daliklis;
        this.prastinti();
    }

    public toString(){
    return this._sveikojiDalis + ' ' + this._skaitiklis + '/' + this._daliklis
    }

    public pridetiInt(i:number){
        this.sveikojiDalis+=i;
}


    public prideti(sveikojiDalis:number, skaitiklis:number, daliklis:number){
        this._sveikojiDalis+=sveikojiDalis;
        this._skaitiklis=this._skaitiklis*daliklis+this._daliklis*skaitiklis;
        this._daliklis=this._daliklis*daliklis;
        this.prastinti();
    }

    public pridetiTrupmena(x:Trupmena){
    this.prideti(x._sveikojiDalis, x._skaitiklis, x._daliklis);
    this.prastinti();
}

    public  toDouble(){
        return this._sveikojiDalis+this._skaitiklis/this._daliklis;
    }

}


let kazkas = new Trupmena(10, 5, 2)
let kota = new Trupmena(4, 10 ,7)
// kazkas.skaitiklis=6;
// kazkas.prideti(5, 7, 12);
// kazkas.pridetiTrupmena(kota)

console.log(kazkas.toDouble());
