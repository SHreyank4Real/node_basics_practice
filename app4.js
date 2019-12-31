//prototyping
//methods and propertys to objects etc
function User(){
    this.name = '';
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life +=1;
        console.log(this.name+ " gave 1 life to " +targetPlayer.name);
    }
}

var shreyank = new User();
var sharma = new User();
shreyank.name = "shreyank";
sharma.name = "sharma";

shreyank.giveLife(sharma)
console.log("shreyank"+shreyank.life);
console.log("sharma"+sharma.life);


User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name+ " took 3 life from " +targetPlayer.name);
}//every memebr has access to this now

sharma.uppercut(shreyank);
shreyank.name = "shreyank";
sharma.name = "sharma";
console.log("shreyank"+shreyank.life);
console.log("sharma"+sharma.life);
