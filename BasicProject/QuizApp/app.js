const quizData = [
  {
    question: "What is HTML?",
    options: [
      "Hypertext markup language",
      "Hyper transfer markup language",
      "Hypertext machine language",
      "Hyperlink and text markup language",
    ],
    correct: 0,
  },
  {
    question: "What is CSS?",
    options: [
      "A programming language used for creating interactive web pages.",
      "A markup language for structuring and presenting content on the web",
      "A style sheet language for describing the presentation of a document written in HTML",
      "A database management system for storing web data.",
    ],
    correct: 2,
  },
  {
    question: "What is the primary purpose of CSS in web development?",
    options: [
      "Defining the structure of a web page",
      "Managing server-side logic",
      "Styling and formatting web content.",
      "Handling user interactions and events.",
    ],
    correct: 2,
  },
];
const quiz = document.querySelector("#quiz");
const answerEle = document.querySelectorAll(".answer");
const [questionElement, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question,#option_1,#option_2,#option_3,#option_4"
  );
const submitBtn = document.getElementById("submitBtn");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  questionElement.innerText = `${currentQuiz + 1}: ${question}`;
  console.log(question);
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};
loadQuiz();

const getSelectedOption = () => {
  let selectedOptionIndex = -1;
  answerEle.forEach((curEle, index) => {
    if (curEle.checked) {
      selectedOptionIndex = index;
    }
  });
  return selectedOptionIndex;
};

const deselectedAnswer = () => {
  return answerEle.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score += 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quizData.innerHtml = ` 
     <div class="result">
     <h2>Your Score : ${score} / ${quizData.length} Correct answers</h2>
     <p>Congratulations you have completed your test.</p>
    </div>
    `;
  }
});
