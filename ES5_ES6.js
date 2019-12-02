const player = "bobby";
let experience = 100;
let wizardLevel = false;
if(experience > 90) {
    let wizardLevel = true;
    console.log('inside',wizardLevel);
}

console.log('outside',wizardLevel);

//let {} あるときは、いつでもscopeつくる。

const player = "bobby";
let experience = 100;
var wizardLevel = false;
if(experience > 90) {
    var wizardLevel = true;    //ここで書き換えられてる。
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);


const player = "bobby";
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
    let wizardLevel = true;
}

const obj = {
    player="bobby",
    experience : 100,
    wizardLevel:false
};

obj = 5 //エラー
obj.wizardLevel = true;  //内容の変更はできる。reassignは不可。

const player =obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//上記を簡略化
const{player, experience} = obj;
let{wizardLevel}=obj;

const name = "john snow";
const obj = {
    [name] : 'hello',
    [1 + 2]: 'hi hi'
}

obj 

//名前などの連結
const name = "Sally";
const age =34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age-10}. 
What a lovely ${pet} you have`;

greetingBest

//functionでかく
function greet(name = '',age =30, pet="cat") {
    return `Hello ${name} you seem to be ${age-10}. 
    What a lovely ${pet} you have`;
}
greet()

greet("john", 50, "monkey");

// symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym1
sym2
sym3

sym2 === sym3  //同じ内容なのにfalseでる　シンボルは独立のもの

// Arrow function
function add(a, b) {
    return a+b;
}
const add2 = (a, b) => a+b;
//or
const add2 =(a,b) => {
    return a+b;
}

add(4,2);
add2(4,2);