//User
const userFirstDice = document.getElementById("InputNumber1");
const userSecondDice = document.getElementById("InputNumber2");
const userThirdDice = document.getElementById("InputNumber3");


//Roll Button Event -- 
//After the user wrote down his rolls, press "Roll" button to start the game
const btnRoll = document.getElementById("btn-submit")
btnRoll.addEventListener("click", function () {
  //Pc
  //const
  const pcFirstDice = Math.floor(Math.random() * 20) + 1;
  const pcSecondDice = Math.floor(Math.random() * 20) + 1;
  const pcThirdDice = Math.floor(Math.random() * 20) + 1;
  const pcRollsSum = pcFirstDice + pcSecondDice + pcThirdDice;
  //console printi Pc
  console.log(pcFirstDice);
  console.log(pcSecondDice);
  console.log(pcThirdDice);
  //Print in HTML PC
  document.getElementById("first-roll").innerHTML = `${pcFirstDice}`;
  document.getElementById("second-roll").innerHTML = `${pcSecondDice}`;
  document.getElementById("third-roll").innerHTML = `${pcThirdDice}`;
  //Pc rolls sum print in html
  document.getElementById("pc-roll").innerHTML = pcRollsSum;


  //You
  //const
  const userFirstRoll = parseInt(userFirstDice.value);
  const userSecondRoll = parseInt(userSecondDice.value);
  const userThirdRoll = parseInt(userThirdDice.value);
  const userRollsSum = userFirstRoll + userSecondRoll + userThirdRoll;
  //console print User
  console.log(userFirstRoll);
  console.log(userSecondRoll);
  console.log(userThirdRoll);
  console.log(userRollsSum);
  //User rolls sum print in HTML
  document.getElementById("you-roll").innerHTML = userRollsSum;


  //Victory, Loss and Tie contidions
  //Loss
  if (userRollsSum < pcRollsSum) {
    console.log("Err...you lost");
    document.getElementById("winner").innerHTML = "Err...you lost.";

    //Victory
  } else if (userRollsSum > pcRollsSum) {
    console.log("Yay! You won. Somehow.");
    document.getElementById("winner").innerHTML = "Yay! You won. Somehow.";

    //Tie
  } else if (userRollsSum === pcRollsSum) {
    console.log("Well, it's a tie.");
    document.getElementById("winner").innerHTML = "Well, it's a tie.";
  }
})