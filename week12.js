let usernum = document.getElementById("gN")

let counter = 0
usernum.addEventListener("keydown", function (e){
    if(e.keyCode == 13){
        hello(e);
    }

})
usernum.focus()
function hello(){
    document.getElementById("paragraph").innerHTML = "click here again"
    document.getElementById("paragraph").style.backgroundColor = "green"
    document.getElementById("paragraph").style.color = "white"
    rN();
    uN();
    compare();
}
function rN(){
    let hello = Math.floor(Math.random() * 10)
    let x = document.getElementById("random")
    x.innerHTML= hello;
    x.style.backgroundColor = "blue"
    x.style.color = "black"
    x.style.padding = "50px"
    x.style.textAlign = "center"
    return hello;
}
function uN(){
    let x = document.getElementById("gN")
    let p = x.value
    let q =  document.getElementById("uuN")
    q.innerHTML = p
    q.style.color = "red"
    q.style. backgroundColor = "black"
    q.style.padding = "50px"
    q.style.textAlign = "center"
    q.style.borderRadius = "20px"
    return p;

}
function compare(){
    let a = uN()
    let b = rN()
    let o = document.getElementById("compare")
    let k = document.getElementById("counter")

    if ( a != b){
        o.innerHTML = "Theses numbers are not the same the computer got " + b + " and you got " + a 
        o.style.color = "white"
        o.style. backgroundColor = "red"
        o.style.padding = "50px"
        o.style.textAlign = "center"
        o.style.borderWidth = "10px"
        o.style.borderRadius = "20px"
        o.style.borderColor = "black"
        counter++;
        k.innerHTML = `you have tried ${counter} times`
        k.style.color = "black"
        k.style. backgroundColor = "red"
        k.style.padding = "50px"
        k.style.textAlign = "center"
        k.style.borderWidth = "10px"
        k.style.borderRadius = "20px"
        k.style.borderColor = "black"
        document.querySelector("body").style.backgroundImage = "url(redx.png)"
        document.querySelector("body").style.backgroundPosition = "center"
        document.querySelector("body").style.backgroundSize = "cover"
    }
    else if( a == b){
        o.innerHTML = "Theses numbers are the same the computer got " + b + " and you got " + a 
        o.style.color = "white"
        o.style. backgroundColor = "green"
        o.style.padding = "50px"
        o.style.textAlign = "center"
        o.style.borderRadius = "20px"
        o.style.borderColor = "black"
        o.style.borderWidth = "10px"
        k.innerHTML = `you have tried ${counter} times to get it right`
        k.style.color = "black"
        k.style. backgroundColor = "green"
        k.style.padding = "50px"
        k.style.textAlign = "center"
        k.style.borderWidth = "10px"
        k.style.borderRadius = "20px"
        k.style.borderColor = "black"
        counter = 0
        document.querySelector("body").style.backgroundImage = "url(checkmark.webp)"
        document.querySelector("body").style.backgroundPosition = "center"
        document.querySelector("body").style.backgroundSize = "cover"

    }
    reset()

}
function reset(){
    document.getElementById("gN").value = "";
}