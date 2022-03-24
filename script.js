function userName(){
    var r = prompt(`Hello welcome to the 20 game`)
}
var uN = userName()

var userPoints = 0

var computerPoints = 0
do{
    var wantToplay = prompt(`You are at ${fUn} would you like to draw again y/n`)
}while(wantToplay == "y")

function Usernumber(){
    var rN = Math.floor(Math.random() * 20) + 1
    return;
}
var un = Usernumber()
function finalUsernumber(){
    var addnumber = 0 + un
    return;
}
var fUn = finalUsernumber()
function oneEleven(){
    if(un == 1){
        var un = 11
        if(fUn + un > 20){
            un = 1 
        }
    }

}
