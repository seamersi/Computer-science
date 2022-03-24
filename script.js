function userName(){
    var r = prompt(`Hello welcome to the 20 game what's your name`)
}
var uN = userName()

var userPoints = 0

var computerPoints = 0

function userNumber(){
    var rN = Math.floor(Math.random() * 20) + 1
    return;
}
var un = userNumber()
function finalUsernumber(io){
    var addnumber = 0 + io
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
function alltogehter(){
    var onemore = finalUsernumber(userNumber(oneEleven()))
    return;
    
}
function playagain(){
    do{
        var wantToplay = prompt(`You are at ${alltogehter()} would you like to draw cards y/n`)
    }while(wantToplay == "y")
    finalUsernumber(userNumber(oneEleven()))
}
playagain()