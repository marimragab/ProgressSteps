const steps = document.querySelectorAll(".progress");
const previousBtn = document.getElementById("previousButton");
const nextBtn = document.getElementById("nextButton");

let currentIndex = -1;

function updateActiveElements() {
  steps.forEach((step, index) => {
    if (index <= currentIndex) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

function navigateToIndex(index) {
  if (index >= 0 && index < steps.length) {
    currentIndex = index;
    updateActiveElements();
  }
}

nextBtn.addEventListener("click", () => {
  navigateToIndex(currentIndex + 1);
});

previousBtn.addEventListener("click", () => {
  navigateToIndex(currentIndex - 1);
});

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    navigateToIndex(index);
  });
});
