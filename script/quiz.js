const showData = (usersData) => {
  const inject = document.getElementById("questionList");

  usersData.Questions.map((val) => {
    const mainDiv = document.createElement("div");
    const divQuestions = document.createElement("div");
    const divOptions = document.createElement("div");
    const h2 = document.createElement("h2");

    mainDiv.setAttribute("class", "question-box");
    divQuestions.setAttribute("class", "question");
    divOptions.setAttribute("class", "options");

    h2.innerHTML = val.question;
    divQuestions.appendChild(h2);
    mainDiv.appendChild(divQuestions);

    val.option.map((v) => {
      const div = document.createElement("div");
      div.setAttribute("class", v.id);
      const radiobtn = document.createElement("input");
      radiobtn.setAttribute("type", "radio");
      radiobtn.setAttribute("id", v.id);
      radiobtn.setAttribute("name", val.qno);
      radiobtn.setAttribute("class", "radio-button");
      div.appendChild(radiobtn);
      const opt = document.createElement("lable");
      opt.setAttribute("for", v.id);
      opt.innerHTML = v.optValue;
      opt.innerHTML = v.optValue;
      div.appendChild(opt);
      divOptions.appendChild(div);
    });

    mainDiv.appendChild(divOptions);
    inject.appendChild(mainDiv);
  });
};

fetch("../json/quiz.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showData(data);
  });
