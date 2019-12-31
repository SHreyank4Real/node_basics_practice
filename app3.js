//this opearater
//points to thing called

var shreyank = {
    printfirstname: function(){
        console.log("my name is shreyank");
        console.log(this == shreyank)
    }
};

shreyank.printfirstname();//calling

//default calling contest is global
function doSomething(){
    console.log("do something");
    console.log(this == global)
}

doSomething();
