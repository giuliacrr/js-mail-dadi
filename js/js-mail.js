//Email input and button const
const email = document.getElementById("input-Email");
const btnSubmit = document.getElementById("submit-btn");
// email whitelist array       0 - ocon                  1 - leclerc          2 - verstappen             3 - florian xdonaci ;((
const whitelist = ["ocon.austria@penalties.lol", "imStupid@leclerc.mc", "world.champ@supermax.nl", "florian.perdonaci@siamostupidi.it"]
console.log(whitelist.length)
// console log to see the mails from browser
console.log("Esteban Ocon: ", whitelist[0]);
console.log("Charles Leclerc: ", whitelist[1]);
console.log("Max Verstappen: ", whitelist[2]);
console.log("Florian: ", whitelist[3]);

// Submit button 
btnSubmit.addEventListener("click", function () {
  let i = 0;
  for (let i = 0; i < whitelist.length; i++) {

    //Check mail
    const mailCheck = email.value;
    console.log(mailCheck);

    //if correct
    if (mailCheck === whitelist[i]) {
      console.log("email giusta")
      document.getElementById("answer").innerHTML = "Okay, nice email. Thanks for joining. Here, a cookie 🍪";
      i = whitelist.length;
      //if wrong
    } else if (i === whitelist.length - 1) {
      console.log("sbagliato");
      document.getElementById("answer").innerHTML = "Nope ❌🙅🏻‍♀️ I don't like it. Try harder. P.s. cookies for free if you get a nice one."
    }
  }
})