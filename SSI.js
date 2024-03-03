const enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", (e) => {
  e.preventDefault();
  const grossIncome = document.getElementById("income").value;

  const countableIncomeBox = document.getElementById("countable-income");

  const countableIncomeValue = (grossIncome - 85) / 2;

  countableIncomeBox.innerHTML = "$" + countableIncomeValue.toFixed(2);

  const adjustedSSI = 943 - countableIncomeValue.toFixed(2);
  console.log(adjustedSSI);

  const adjustedSSIBox = document.getElementById("adjusted");
  console.log(adjustedSSIBox);

  adjustedSSIBox.innerHTML = "$" + adjustedSSI.toFixed(2);

  // console.log(adjustedSSI);

  // subtractCountableIncome.innerHTML =
  //   "- " + " $" + countableIncomeValue.toFixed(2);
  // console.log(subtractCountableIncome);
});
