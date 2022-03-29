function userName(){
    var r = prompt(`Hello welcome to the 20 game what's your name`)
    return r;
}



var userPoints = 0

var computerPoints = 0

function userNumber(){
    var rN = Math.floor(Math.random() * 10) + 1
    return rN;
}


var usern = 0
var compn = 0

function n() {
    do {
        usern = usern + userNumber()
        var n = prompt(`alright ${uN} you are at ${usern} would you like to draw again y/n`)
    } while ((usern < 20) && (n == `y`))

    return usern;
}


var uN = userName()


function p(){
    do{
        compn = compn + userNumber()
        alert(`the computer is at ${compn}`)
    }while(compn < 16)

    return compn;
}

var p = p()
var n = n()
function compare(){

    if((p > n) && (p > 20) && (n > 20)){
        alert(`ok ${uN} you finished with ${n} and the computer ended with ${p} that means the computer wins`)
        computerPoints = computerPoints + 1
    }
    else{
        alert(`ok ${uN} you finished with ${n} and the computer ended with ${p} that means the you win`)
        userPoints = userPoints + 1
    }
}

function playAgain(){
    do{
        compare()
        var pa = prompt(`ok ${uN} you have won ${userPoints} games and the computer has won ${computerPoints} games do you still want to play y/n`)
    }
    while(pa == `y`)
    var p = p()
    var n = n()
    
}
playAgain()