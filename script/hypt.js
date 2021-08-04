const getHeight = document.getElementById("height");
const getBase = document.getElementById("base");
const getBtn = document.getElementById("btn");
const getResult = document.getElementById("result");
let HoldHeight;
let HoldBase;

const calculateHyptns = (height, base) => {
  console.log(height, base);
  const convertHeight = parseFloat(height);
  const convertBase = parseFloat(base);

  const Hyptns = Math.sqrt(
    convertHeight * convertHeight + convertBase * convertBase
  );
  getResult.innerHTML = `C = ${Hyptns}`;
};

getHeight.addEventListener("change", (e) => {
  HoldHeight = e.target.value;
});

getBase.addEventListener("change", (e) => {
  HoldBase = e.target.value;
});
getBtn.addEventListener("click", () => {
  if (HoldBase >= 0 && HoldHeight >= 0) {
    calculateHyptns(HoldHeight, HoldBase);
  } else {
    alert("Invalid Number");
  }
});
