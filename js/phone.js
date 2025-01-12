const btnNums = Array.from(document.querySelectorAll(".btn-num"));
const numberUser = document.querySelector(".numberUser");
const btnClear = document.querySelector(".btn-clear");
const btnCheck = document.querySelector(".btn-checker");
const status = document.querySelector(".status");

//create password
let number = Math.round(Math.random() * 1_500_000);
let valueUser = "";

function handelBtnNumber() {
  btnNums.forEach((item) => {
    item.addEventListener("click", (event) => {
      valueUser = valueUser + event.target.innerHTML;
      numberUser.innerHTML = Number(valueUser).toLocaleString();
    });
  });
}

function handelBtnClear() {
  btnClear.addEventListener("click", () => {
    valueUser = valueUser.slice(0, -1);
    numberUser.innerHTML = Number(valueUser).toLocaleString();
  });
}

function handelBtnChecker() {
  btnCheck.addEventListener("click", () => {
    if (valueUser > number) {
      status.innerHTML = "low";
      status.classList.remove("text-success");
      status.classList.add("text-danger");
    } else if (valueUser < number) {
      status.innerHTML = "high";
      status.classList.add("text-success");
      status.classList.remove("text-danger");
    }else if(valueUser == number) {
        alert("adad ro pyda kardi :)")
        location.reload()        
    }
  });
}

handelBtnNumber();
handelBtnClear();
handelBtnChecker();
