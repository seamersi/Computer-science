function userName(){
    var r = prompt(`Hello welcome to the 20 game what's your name`)
    return r;
}
var uN = userName()


var userPoints = 0

var computerPoints = 0

function userNumber(){
    var rN = Math.floor(Math.random() * 10) + 1
    return rN;
}



do{

    function n() {
        var usern = 0
        do {
            usern = usern + userNumber()
            var n = prompt(`alright ${uN} you are at ${usern} would you like to draw again y/n`)
        } while ((usern < 20) && (n == `y`))

        return usern;
    }





    function p(){
        var compn = 0
        do{
            compn = compn + userNumber()
            alert(`the computer is at ${compn}`)
        }while(compn < 16)

        return compn;
    }
    var r = n()
    var t = p()

    function compare(){

        if((t > r) && (t <= 20) || (r > 20)){
            alert(`ok ${uN} you finished with ${r} and the computer ended with ${t} that means the computer wins`)
            computerPoints = computerPoints + 1
        }
        else if((r > t) &&(r <=20) || (t > 20)){
            alert(`ok ${uN} you finished with ${r} and the computer ended with ${t} that means the you win`)
            userPoints = userPoints + 1
        }
        else if((t == r) || (t > 20) && (r > 20)){
            alert(`ok ${uN} you finished with ${r} and the computer ended with ${t} that means the you tied`)
        }
    }
    compare()
    var playAgain = prompt(`ok ${uN} you have won ${userPoints} games and the computer has won ${computerPoints} games do you still want to play y/n`)
}   
while( playAgain == `y`)
