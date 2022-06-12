
document.querySelector("button").addEventListener("click",clickme);
function clickme(){
  var n1 = Math.ceil(Math.random()*5)+1;
  var n2 = Math.ceil(Math.random()*5)+1;
  var random1 = "images/dice"+n1+".png";
  var random2 = "images/dice"+n2+".png";
  document.querySelector(".img1").setAttribute("src",random1);
  document.querySelector(".img2").setAttribute("src",random2);
  if (n1 > n2) {
    document.querySelector("h1").innerHTML=("Player 1 wins");
  } else if (n2 == n1) {
    document.querySelector("h1").innerHTML=("Draw");
  } else if (n2>n1) {
    document.querySelector("h1").innerHTML=("Player 2 wins");
  }

}
