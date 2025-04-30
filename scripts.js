const totalRaces = 5;
const inputsWrapper = document.getElementById("inputs-wrapper");

for (let i = 1; i <= totalRaces; i++) {
  const label = document.createElement("label");
  label.htmlFor = `race${i}`;
  label.textContent = `Race ${i}`;

  const input = document.createElement("input");
  input.id = `race${i}`;
  input.name = `race${i}`;
  input.type = "number";
  input.min = 1;
  input.step = 1;
  input.placeholder = "Value";

  inputsWrapper.appendChild(label);
  inputsWrapper.appendChild(input);
}

const pointsMap = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 2,
  10: 1,
};

const form = document.querySelector(".form-wrapper");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalCloseBtn = document.getElementById("close-modal-btn");

modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let totalPoints = 0;

  const inputs = form.querySelectorAll('input[type="number"]');
  inputs.forEach((input) => {
    const position = parseInt(input.value);
    if (!Number.isNaN(position)) {
      totalPoints += pointsMap[position] || 0;
    }
  });

  modalText.textContent = `Driver's total points: ${totalPoints}`;
  modal.classList.remove("hidden");
});
