"use strict";
const dbd = (a, b) => (!b) ? a : dbd(b, a % b);
console.log(dbd(18, 46));
