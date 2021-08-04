const checkButton = document.getElementById("checkBtn");
const CorrectBox = document.getElementById("correctAns");
const IncorrectBox = document.getElementById("incorrectAns");
const UnansweredBox = document.getElementById("unAns");
const TotalScoreBox = document.getElementById("totalScore");
const ResultBox = document.getElementById("resultStats");
const reset = document.getElementById("retake");
const showReset = document.getElementById("reset");
const headerArea = document.getElementById("header");
const Preloader = document.getElementById("preloader");
const questionList = document.getElementById("questionList");
const storeUserAnswers = [];
const displayScore = (correct, Incorrect) => {
  checkButton.style.display = "none";
  ResultBox.style.display = "grid";
  showReset.style.display = "grid";

  let TotalScore = correct;
  let Unanswered = 10 - (correct + Incorrect);

  CorrectBox.innerHTML = correct;
  IncorrectBox.innerHTML = Incorrect;
  UnansweredBox.innerHTML = Unanswered;
  TotalScoreBox.innerHTML = `${TotalScore} / 10`;
};

const checkAnswer = () => {
  let countCorrect = 0;
  let countWrong = 0;

  storeUserAnswers.map((val) => {
    if (val.answerSelected === val.correctAnswer) {
      countCorrect += 1;
      document.getElementById(val.questionNo).style.background = "#40c057";
    } else {
      document.getElementById(val.questionNo).style.background = "red";
      countWrong += 1;
    }
  });

  displayScore(countCorrect, countWrong);
};

const showQuestions = (usersData) => {
  const inject = document.getElementById("questionList");

  usersData.Questions.map((val) => {
    const mainDiv = document.createElement("div");
    const divQuestions = document.createElement("div");
    const divOptions = document.createElement("div");
    const h2 = document.createElement("h2");

    mainDiv.setAttribute("class", "question-box");
    mainDiv.setAttribute("id", val.qno);
    divQuestions.setAttribute("class", "question");
    divOptions.setAttribute("class", "options");

    h2.innerHTML = val.question;
    divQuestions.appendChild(h2);
    mainDiv.appendChild(divQuestions);

    val.option.map((v) => {
      const div = document.createElement("div");
      const radiobtn = document.createElement("input");
      const opt = document.createElement("lable");

      div.setAttribute("class", v.id);
      radiobtn.setAttribute("type", "radio");
      radiobtn.setAttribute("id", v.id);
      radiobtn.setAttribute("name", val.qno);
      radiobtn.setAttribute("class", "radio-button");
      opt.setAttribute("for", v.id);

      opt.innerHTML = v.optValue;
      opt.innerHTML = v.optValue;

      div.appendChild(radiobtn);
      div.appendChild(opt);
      divOptions.appendChild(div);

      radiobtn.addEventListener("click", () => {
        const userAnswers = {
          questionNo: val.qno,
          answerSelected: v.id,
          correctAnswer: val.answer,
        };
        storeUserAnswers.push(userAnswers);
      });
    });

    mainDiv.appendChild(divOptions);
    inject.appendChild(mainDiv);
  });

  const load = () => {
    Preloader.style.display = "none";
    questionList.style.display = "block";
  };

  setTimeout(load, 1000);
};

fetch("../json/quiz.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showQuestions(data);
  });

reset.addEventListener("click", () => {
  headerArea.scrollIntoView();
  location.reload();
});

checkButton.addEventListener("click", () => {
  checkAnswer();
});
