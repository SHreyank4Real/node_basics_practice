//basics
console.log('hello');

var NAMES = {
    firstname : 'shreyank',
    lastname : 'sharma',
    age : 24
};

console.log(NAMES);

function addNum(a,b){
    return a+b
}
console.log(addNum(1,2));

var shreyank = function (a){
    console.log("this will be printed again and agian",a)
}

shreyank(1)
setTimeout(shreyank,3000,2)
