const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");

const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");

const counterValueEl = document.querySelector(".counter__value");

resetButtonEl.addEventListener("click", resetCounter);
decreaseButtonEl.addEventListener("click", decreaseCounter);
increaseButtonEl.addEventListener("click", increaseCounter);

// increase counter on Spacebar click
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    increaseCounter();
  }
});

// reset
function resetCounter() {
  counterValueEl.textContent = 0;

  counterEl.classList.remove("counter--limit");
  counterTitleEl.innerHTML = "Fancy Counter";

  decreaseButtonEl.disabled = false;
  increaseButtonEl.disabled = false;

  resetButtonEl.blur();
}

// decrease
function decreaseCounter() {
  const curValue = Number(counterValueEl.textContent);
  let newValue = curValue - 1;

  if (newValue < 0) {
    newValue = 0;
  }

  counterValueEl.textContent = newValue;
  decreaseButtonEl.blur();
}

// increase
function increaseCounter() {
  const curValue = Number(counterValueEl.textContent);
  let newValue = curValue + 1;

  if (newValue > 5) {
    newValue = 5;
    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limit!Buy <b>PRO</b> for >5";

    decreaseButtonEl.disabled = true;
    increaseButtonEl.disabled = true;
  }

  counterValueEl.textContent = newValue;
  increaseButtonEl.blur();
}
