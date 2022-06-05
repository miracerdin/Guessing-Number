const input = document.querySelector("#input");
console.log(input.value);
const number = Math.trunc(Math.random() * 50);
console.log(number);

const guess = document.querySelector(".btn-primary");
const tryit = document.querySelector(".btn-secondary");

let remainingLives = 5;
guess.addEventListener("click", () => {
  if (input.value == number) {
    document.querySelector(".border").classList.remove("bg-danger");

    document.querySelector(".border").classList.add("bg-success");
    return (document.querySelector(".border").innerText =
      "Congratulations! You know");
  } else if (input.value < number) {
    document.querySelector(".border").classList.add("bg-danger");
    remainingLives--;
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
});

tryit.addEventListener("click", () => {
  window.location.reload(false);
});
