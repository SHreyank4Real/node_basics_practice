//in node everyting is reference
var shreyank = {
    favFood : 'palav',
    favMovie : 'avatar'
};

var Person = shreyank; //not copying just reference.

Person.favFood = 'gobi';

console.log(shreyank.favFood);

//----------

console.log(19 == '19')  //true compares values
console.log(19 === '19') //false contents
