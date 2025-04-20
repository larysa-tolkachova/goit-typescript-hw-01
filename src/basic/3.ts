//1
let mixedType: string | number;

mixedType = "Hello";
console.log(mixedType);

mixedType = 100;
console.log(mixedType);

//2
type orType = "enable" | "disable";

let answer: orType;

answer = "enable";
console.log(answer);

answer = "disable";
console.log(answer);
