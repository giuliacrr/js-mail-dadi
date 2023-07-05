//User
const userFirstDice = document.getElementById("InputNumber1");
const userSecondDice = document.getElementById("InputNumber2");
const userThirdDice = document.getElementById("InputNumber3");


//Roll Button Event -- 
//After the user wrote down his rolls, press "Roll" button to start the game
const btnRoll = document.getElementById("btn-submit")
btnRoll.addEventListener("click", function () {
  //Pc
  const pcFirstDice = Math.floor(Math.random() * 20) + 1;
  const pcSecondDice = Math.floor(Math.random() * 20) + 1;
  const pcThirdDice = Math.floor(Math.random() * 20) + 1;
  //console printi Pc
  console.log(pcFirstDice);
  console.log(pcSecondDice);
  console.log(pcThirdDice);
  //Print in HTML PC
  document.getElementById("first-roll").innerHTML = `${pcFirstDice}`;
  document.getElementById("second-roll").innerHTML = `${pcSecondDice}`;
  document.getElementById("third-roll").innerHTML = `${pcThirdDice}`;
  //Pc rolls sum print in html
  document.getElementById("pc-roll").innerHTML = pcFirstDice + pcSecondDice + pcThirdDice;
})