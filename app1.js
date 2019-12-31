//handling multiple requests.

function placeanorder(ordernumber){
    console.log('customer order :',ordernumber);

    cookanddeliver(function(){
        console.log('Delivered : ',ordernumber)
    })
}

//simulate 5operation
function cookanddeliver(callback){
    setTimeout(callback,5000);//not saying wait 5 sec
}

placeanorder(1)
placeanorder(2)
placeanorder(3)
placeanorder(4)
placeanorder(5)
placeanorder(6)


//simulation insted of taking single customer order for 5 sec one at a time
//this will process information all at a time.
