/*Enter Run */
let body = document.getElementById("body")
body.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    run(e);
  }
});

body.focus();
/* /Enter Run */


var cWin = 0;
var uWin = 0;
var ans = "";
var uTotal = 0;

function userG() 
{   
  var utotal = 0;
  do {
    var user = Math.floor(Math.random() * 10);
    
    utotal = utotal + user;

    var suitArray = ["C", "D","S","H"]
    var randomsuit = Math.floor(Math.random() * 3);
    document.getElementById("card1").innerHTML = "<img src=Cards/" + user + suitArray[randomsuit] + ".jpg"
        
    if (utotal > 20) {
        alert("Player Lost");
        cWin++
        break;
    }
        
    ques = prompt("Do you want another number? 'y' for yes, 'n' for no.")
      
  }while (ques == "y");
  return utotal
}

function computerG(a) 
{
  var ctotal = 0;
  do {
      if (a > 20) {
          cWin++
          break;
      }
      var comp = Math.floor(Math.random() * 10);
      ctotal = ctotal + comp;
  
      alert(`The Computer's new number is '${comp}. \nThe Computer's total is now '${ctotal}'`)

      if (ctotal > 20) {
          alert("Computer Lost");
          uWin++
          break;
      }
      
  }while (ctotal < 16);
  return ctotal
}

function compareCU(a, cTotal) 
{
  if ((cTotal > uTotal) && (cTotal <= 20))
  {
      alert(`${a} Lost... You got ${uTotal} and the Computer got ${cTotal}`);
      cWin++
  }else if ((uTotal > cTotal) && (uTotal <= 20)) 
  {
      alert(`${a} won! You got ${uTotal} and the computer got ${cTotal}`);
      uWin++
  }

  
  ans = prompt(`The current score is '${a}' '${uWin}' : 'Computer' '${cWin}' Do you want to play again? \n\n ('y' for yes) ('n' for no)`)
  return ans
}




function run() 
{
  userG()
  computerG()
  compareCU()
  document.getElementById("marginA").innerHTML = "Play Again"
}



