function userName(){
    var a = prompt(`Hello welcome to the degree converter what is your name?`)
    return a;
}

var n = userName()

function userTemperature(){
    var b = prompt(`Hello ${n} please enter the temperature`)
    return b;
}

var t = userTemperature()

function ctf(h){
    var g = h * 9/5 + 32
    return;
}
function ftc(p){
    var d = p - 32 * 5 / 9
    return;
}
function unit(){
    var k = prompt(`press c to change c to f or press f to change f to c`)
    return;
}

function timetochange(){
    if(unit() == "c"){
        var n = ctf(t)
        alert(`the final temperature is ${n} degrees farenheit`)
        return;
        
    }
    else{
        var n = ftc(t)
        alert(`the final temperature is ${n} degrees celsuis`)
        return;
        
    }
}

timetochange()



