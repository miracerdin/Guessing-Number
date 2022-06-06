const input = document.querySelector("#input");
console.log(input.value);
const number = Math.trunc(Math.random() * 50);
console.log(number);

const guess = document.querySelector(".btn-primary");
const tryit = document.querySelector(".btn-secondary");

const wrong = document.querySelector("#wrong");
const correct = document.querySelector("#correct");

let remainingLives = 5;
guess.addEventListener("click", () => {
  while (remainingLives > 0) {
    if (input.value == number) {
      document.querySelector(".border").classList.remove("bg-danger");
      document.querySelector(".border").classList.add("bg-success");
      correct1();
      return (document.querySelector(".border").innerText =
        "Congratulations! You know"), remainingLives = 0;
      
    } else if (input.value < number) {
      document.querySelector(".border").classList.add("bg-danger");
      remainingLives--;
      wrong1();
      if (remainingLives == 0) {
        return (document.querySelector(
          ".border"
        ).innerText = `Lost  number is: ${number}`);
      } else {
        return (document.querySelector(
          ".border"
        ).innerText = `Low ⬆ ${remainingLives}`);
      }
    } else {
      remainingLives--;
      wrong1();
      if (remainingLives == 0) {
        return (document.querySelector(
          ".border"
        ).innerText = `Lost  number is: ${number}`);
      } else {
        document.querySelector(".border").classList.add("bg-danger");

        return (document.querySelector(
          ".border"
        ).innerText = `high ⬇ ${remainingLives}`);
      }
    }
  }
});

tryit.addEventListener("click", () => {
  window.location.reload(false);
});

function correct1() {
  correct.play();
}

function wrong1() {
  wrong.play();
}
