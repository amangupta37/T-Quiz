//target options
const option1 = document.getElementById("baseheight");
const option2 = document.getElementById("sides");
const option3 = document.getElementById("angle");

//base height input for option1
const useInputBase = document.getElementById("useInputBase");
const useInputHeight = document.getElementById("useInputHeight");

//all sides input for option2
const useInputSideOne = document.getElementById("useInputSideOne");
const useInputSideTwo = document.getElementById("useInputSideTwo");
const useInputSideThree = document.getElementById("useInputSideThree");

//base,angle and hypotenuse for option3
const useInputSideBase = document.getElementById("userInputSideBase");
const useInputAngle = document.getElementById("userInputAngle");
const useInputHypotenouse = document.getElementById("userInputHypotenouse");

//hold userInput base height
let holdUserInputBase;
let holdUserInputHeight;

//hold userInput all side
let holdUserInputSideOne;
let holdUserInputSideTwo;
let holdUserInputSideThree;

//hold userInput sideBase , angle , hyptns
let holdUserInputSideBase;
let holdUserInputAngle;
let holdUserInputHyptns;

//Submit buttons
const optionOneSubmitBtn = document.getElementById("optionOneBtn");
const optionTwoSubmitBtn = document.getElementById("optionTwoBtn");
const optionThreeSubmitBtn = document.getElementById("optionThreeBtn");

//target Results
const ResultOne = document.getElementById("optionOneResult");
const ResultTwo = document.getElementById("optionTwoResult");
const ResultThree = document.getElementById("optionThreeResult");

//operation3
const calculateAreaThree = (baseVal, angleVal, hypotenouseVal) => {
  // console.log(baseVal, angleVal, hypotenouseVal);
  const base = parseInt(baseVal);
  const angle = parseInt(angleVal);
  const hypt = parseInt(hypotenouseVal);
  const area = parseFloat((1 / 2) * base * Math.sin(angle) * hypt);
  ResultThree.innerHTML = `Area = ${area}`;
};

//operation2
const calculateAreaTwo = (sideOne, sideTwo, sideThree) => {
  const side1 = parseInt(sideOne);
  const side2 = parseInt(sideTwo);
  const side3 = parseInt(sideThree);

  const s = (side1 + side2 + side3) / 2;

  const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  ResultTwo.innerHTML = `Area = ${area}`;
};

//operation1
const calculateAreaOne = (base, height) => {
  const numbase = parseInt(base);
  const numheight = parseInt(height);

  let area = (1 / 2) * numbase * numheight;
  ResultOne.innerHTML = `Area = ${area}`;
};

const showOperation = (operationName) => {
  const str = ["option-1", "option-2", "option-3"];
  str.map((val) => {
    document.getElementById(val).style.display =
      val === operationName ? "block" : "none";
  });
};

//options
option1.addEventListener("click", () => {
  showOperation("option-1");
});

option2.addEventListener("click", () => {
  showOperation("option-2");
});

option3.addEventListener("click", () => {
  showOperation("option-3");
});

//submit button 3 operation
optionThreeSubmitBtn.addEventListener("click", () => {
  calculateAreaThree(
    holdUserInputSideBase,
    holdUserInputAngle,
    holdUserInputHyptns
  );
});

//submit button 2 operation
optionTwoSubmitBtn.addEventListener("click", () => {
  calculateAreaTwo(
    holdUserInputSideOne,
    holdUserInputSideTwo,
    holdUserInputSideThree
  );
});

//submit button 1 operation
optionOneSubmitBtn.addEventListener("click", () => {
  calculateAreaOne(holdUserInputBase, holdUserInputHeight);
});

//user sidebase , angle , hyptns
useInputSideBase.addEventListener("change", (e) => {
  holdUserInputSideBase = e.target.value;
});

useInputAngle.addEventListener("change", (e) => {
  holdUserInputAngle = e.target.value;
});

useInputHypotenouse.addEventListener("change", (e) => {
  holdUserInputHyptns = e.target.value;
});

//user all sides input
useInputSideOne.addEventListener("change", (e) => {
  holdUserInputSideOne = e.target.value;
});

useInputSideTwo.addEventListener("change", (e) => {
  holdUserInputSideTwo = e.target.value;
});

useInputSideThree.addEventListener("change", (e) => {
  holdUserInputSideThree = e.target.value;
});

//user base & height Inputs
useInputBase.addEventListener("change", (e) => {
  holdUserInputBase = e.target.value;
});

useInputHeight.addEventListener("change", (e) => {
  holdUserInputHeight = e.target.value;
});
