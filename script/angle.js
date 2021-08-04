const getFirstAngle = document.getElementById("angleOne");
const getSecondAngle = document.getElementById("angleTwo");
const getThirdAngle = document.getElementById("angleThree");
const getBtn = document.getElementById("check");
const getText = document.getElementById("showText");
const getResult = document.getElementById("result");

let HoldFirstAngle, HoldSecondAngle, HoldThirdAngle;

const calculateAngle = (FirstAngle, SecondAngle, ThirdAngle) => {
  if (
    parseInt(FirstAngle) >= 180 ||
    parseInt(SecondAngle) >= 180 ||
    parseInt(ThirdAngle) >= 180
  ) {
    return alert("Angle must be less than or eqaul to 180 deg");
  }
  const CheckTriangle =
    parseInt(FirstAngle) + parseInt(SecondAngle) + parseInt(ThirdAngle);

  getResult.style.display = "block";

  if (CheckTriangle === 180) {
    getText.innerHTML = "Congratulation's it froms a Triangle";
    getResult.style.backgroundImage =
      "url('https://media.giphy.com/media/5T06ftQWtCMy0XFaaI/giphy.gif')";
  } else {
    getText.innerHTML = "Did Not froms a Triangle";
  }
};

getFirstAngle.addEventListener("change", (e) => {
  HoldFirstAngle = e.target.value;
});

getSecondAngle.addEventListener("change", (e) => {
  HoldSecondAngle = e.target.value;
});

getThirdAngle.addEventListener("change", (e) => {
  HoldThirdAngle = e.target.value;
});

getBtn.addEventListener("click", () => {
  if (HoldFirstAngle > 0 && HoldSecondAngle > 0 && HoldThirdAngle > 0) {
    calculateAngle(HoldFirstAngle, HoldSecondAngle, HoldThirdAngle);
  } else {
    alert("Invalid Number");
  }
});
