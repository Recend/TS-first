const dbd = (a:number, b:number):number => (!b) ? a : dbd(b, a % b);
console.log(dbd(18, 46));

