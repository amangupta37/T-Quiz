const option1 = document.getElementById("baseheight");
const option2 = document.getElementById("sides");
const option3 = document.getElementById("angle");
const showOperation = (operationName) => {
  const str = ["option-1", "option-2", "option-3"];
  str.map((val) => {
    document.getElementById(val).style.display =
      val === operationName ? "block" : "none";
  });
};
option1.addEventListener("click", () => {
  showOperation("option-1");
});

option2.addEventListener("click", () => {
  showOperation("option-2");
});

option3.addEventListener("click", () => {
  showOperation("option-3");
});
