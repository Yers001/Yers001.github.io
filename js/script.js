const quizData = [
  {
    question: 'What is the main character\'s name in "The Queen\'s Gambit"?',
    options: ['Emma', 'Beth', 'Alice', 'Sarah'],
    answer: 'Beth',
  },
  {
    question: "What is Beth's primary interest and skill in the series?",
    options: ['Cooking', 'Chess', 'Painting', 'Music'],
    answer: 'Chess',
  },
  {
    question: "Who adopts Beth after her mother's death?",
    options: [
      'Mr. Johnson',
      'Mrs. Wheatley',
      'Mrs. Deardorff',
      'Mrs. Alma Wheatley',
    ],
    answer: 'Mrs. Alma Wheatley',
  },
  {
    question: 'Where does Beth learn to play chess?',
    options: [
      'School chess club',
      'Orphanage basement',
      'Local park',
      'Online chess platform',
    ],
    answer: 'Orphanage basement',
  },
  {
    question:
      "What is the name of Beth's close friend and fellow chess player?",
    options: [' Benny', 'Harry', 'Jolene', 'Cleo'],
    answer: 'Jolene',
  },
  {
    question:
      'In which country does Beth participate in her first international chess tournament?',
    options: ['France', 'Russia', 'Mexico', 'Germany'],
    answer: 'Mexico',
  },
  {
    question:
      'What is the name of the Russian chess grandmaster Beth faces in the series?',
    options: [
      'Igor Ivanov',
      'Vladimir Petrov',
      'Anatoliy Yastrzhembskiy',
      'Borgov',
    ],
    answer: 'Borgov',
  },
  {
    question:
      'Which chess opening is prominently featured in "The Queen\'s Gambit"?',
    options: [
      ' Sicilian Defense',
      "King's Gambit",
      "Queen's Gambit",
      'French Defense',
    ],
    answer: "Queen's Gambit",
  },
  {
    question: 'What addiction does Beth struggle with throughout the series?',
    options: ['Alcoholism', 'Drug addiction', 'Gambling', ' Smoking '],
    answer: 'Drug addiction',
  },
  {
    question: 'How does "The Queen\'s Gambit" series end for Beth Harmon?',
    options: [
      'Becomes the world chess champion',
      'Quits chess and pursues a different career',
      ' Dies in a chess-related accident',
      ' Fails to qualify for international tournaments',
    ],
    answer: 'Becomes the world chess champion',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
