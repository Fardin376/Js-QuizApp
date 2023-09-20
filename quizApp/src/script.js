const quizData = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    options: [
      '&lt;script&gt;',
      '&lt;javascript&gt;',
      '&lt;scripting&gt;',
      '&lt;js&gt;',
    ],
    answer: '&lt;script&gt;',
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    options: [
      'The &lt;head&gt; section',
      'The &lt;body&gt; section',
      'Both the &lt;head&gt; section and the &lt;body&gt; section are correct',
    ],
    answer:
      'Both the &lt;head&gt; section and the &lt;body&gt; section are correct',
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      '&ltscript href=&quot;xxx.js&quot;>',
      '&lt;script name=&quot;xxx.js&quot;&gt;',
      '&lt;script src=&quot;xxx.js&quot;&gt;',
    ],
    answer: '&lt;script src=&quot;xxx.js&quot;&gt;',
  },
  {
    question:
      'The external JavaScript file must contain the &lt;script&gt; tag.',
    options: ['True', 'False'],
    answer: 'False',
  },
  {
    question: 'How do you write &quot;Hello World&quot; in an alert box?',
    options: [
      'alertBox(&quot;Hello World&quot;);',
      'msg(&quot;Hello World&quot;);',
      'alert(&quot;Hello World&quot;);',
      'msgBox(&quot;Hello World&quot;);',
    ],
    answer: 'alert(&quot;Hello World&quot;);',
  },
  {
    question: 'How do you create a function in JavaScript?',
    options: [
      'function myFunction()',
      'function:myFunction()',
      'function = myFunction()',
    ],
    answer: 'function myFunction()',
  },
  {
    question: 'How do you call a function named &quot;myFunction&quot;?',
    options: [
      'call function myFunction()',
      'call myFunction()',
      'myFunction()',
    ],
    answer: 'myFunction()',
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    options: ['if i = 5 then', 'if i == 5 then', 'if (i == 5)', ' if i = 5'],
    answer: 'if (i == 5)',
  },
  {
    question: 'Which of the following is a disadvantage of using JavaScript?',
    options: [
      'Client-side JavaScript does not allow the reading or writing of files.',
      'JavaScript can not be used for Networking applications because there is no such support available.',
      "JavaScript doesn't have any multithreading or multiprocess capabilities.",
      'All of the above.',
    ],
    answer: 'All of the above.',
  },
  {
    question:
      'How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?',
    options: ['if (i <> 5)', 'if i <> 5', 'if (i != 5)', 'if i =! 5 then'],
    answer: 'if (i != 5)',
  },
  {
    question: 'How does a WHILE loop start?',
    options: [
      'while i = 1 to 10',
      'while (i &lt;= 10; i++)',
      'while (i &lt;= 10)',
    ],
    answer: 'while (i &lt;= 10)',
  },
  {
    question: 'How does a FOR loop start?',
    options: [
      'for (i = 0; i &lt;= 5)',
      'for (i = 0; i &lt;= 5; i++)',
      'for i = 1 to 5',
      'for (i &lt;= 5; i++)',
    ],
    answer: 'for (i = 0; i &lt;= 5; i++)',
  },
  {
    question: 'How can you add a comment in a JavaScript?',
    options: [
      '//This is a comment',
      '&sbquo;This is a comment',
      '&lt;!--This is a comment--&gt;',
    ],
    answer: '//This is a comment',
  },
  {
    question: 'How to insert a comment that has more than one line?',
    options: [
      '/*This comment has more than one line*/',
      '//This comment has more than one line//',
      '&lt;!--This comment has more than one line--&gt;',
    ],
    answer: '/*This comment has more than one line*/',
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    options: [
      'var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)',
      'var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]',
      'var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)',
      'var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;',
    ],
    answer:
      'var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]',
  },
  {
    question: 'How do you round the number 7.25, to the nearest integer?',
    options: ['rnd(7.25)', 'Math.round(7.25)', 'Math.rnd(7.25)', 'round(7.25)'],
    answer: 'Math.round(7.25)',
  },
  {
    question: 'How do you find the number with the highest value of x and y?',
    options: ['Math.max(x, y)', 'Math.ceil(x, y)', 'top(x, y)', 'ceil(x, y)'],
    answer: 'Math.max(x, y)',
  },
  {
    question:
      'What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?',
    options: [
      'w2 = window.new(&quot;http://www.w3schools.com&quot;);',
      'w2 = window.open(&quot;http://www.w3schools.com&quot;);',
    ],
    answer: 'w2 = window.open(&quot;http://www.w3schools.com&quot;);',
  },
  {
    question: 'JavaScript is the same as Java.',
    options: ['true', 'false'],
    answer: 'false',
  },
  {
    question: 'How can you detect the client&rsquo;s browser name?',
    options: ['navigator.appName', 'browser.name', 'client.navName'],
    answer: 'navigator.appName',
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    options: ['onchange', 'onclick', 'onmouseclick', 'onmouseover'],
    answer: 'onclick',
  },
  {
    question: 'How do you declare a JavaScript variable?',
    options: ['var carName;', 'variable carName;', 'v carName;'],
    answer: 'var carName;',
  },
  {
    question: 'Which operator is used to assign a value to a variable?',
    options: ['*', '-', '=', 'x'],
    answer: '=',
  },
  {
    question: 'What will the following code return: Boolean(10 &gt; 9)',
    options: ['NaN', 'false', 'true'],
    answer: 'true',
  },
  {
    question: 'Is JavaScript case-sensitive?',
    options: ['No', 'Yes'],
    answer: 'Yes',
  },
]

const quizContainer = document.getElementById('quiz')
const resultContainer = document.getElementById('result')
//const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const retryBtn = document.getElementById('retry')
const showAnsBtn = document.getElementById('showAnswer')

var totalque = quizData.length
var totQuesSpan = document.getElementById('totQues')
totQuesSpan.textContent = totalque

let currentQuestion = 0
let score = 0
let incorrectAnswers = []

function shuffleOpt(array) {
    for (let i=array.length - 1; i>0; i--){
        var j = Math.floor(Math.random() * (i+1))
        [array[i], array[j]] = [array[j], array[i]]
    }
}

displayQuestion = () => {
    const questionData = quizData[currentQuestion]

    const questionElement = document.createElement('div')
    questionElement.className = 'question'
    questionElement.innerHTML = questionData.question

    const optionsElement = document.createElement('div')
    optionsElement.className = 'options'

    const shuffledOptions = [...questionData.options]
    shuffleOpt(shuffledOptions)

    for(let i=0; i<shuffledOptions.length; i++) {
        const option = document.createElement('text')
        option.className = 'option'

        const radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'quiz'
        radio.value = shuffledOptions[i]

        const optionText = document.createTextNode(shuffledOptions[i])

        option.appendChild(radio)
        option.appendChild(optionText)
        optionsElement.appendChild(option)
    }

    quizContainer.innerHTML = ''
    quizContainer.appendChild(questionElement)
    quizContainer.appendChild(optionsElement)
    retryBtn.style.display = 'none'
    
}

checkAnswer = () => {
    const selectedOption = document.querySelector('input[name = "quiz"]:checked')
    if (selectedOption) {
        const answer = selectedOption.value
        if (answer === quizData[currentQuestion].answer) {
            score++
        } else {
            incorrectAnswers.push({
                question: quizData[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizData[currentQuestion].answer
            })
        }

        currentQuestion++
        selectedOption.checked = false

        if(currentQuestion < quizData.length) {
            displayQuestion()
        } else {
            displayResult()
        }
    }
}

displayResult = () => {
    quizContainer.style.display = 'none'
    nextBtn.style.display = 'none'
    retryBtn.style.display = 'inline-block'
    showAnsBtn.style.display = 'inline-block'
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`
}


//displayPreviousQuestion = () => {
//  if (currentQuestion > 0) {
//    currentQuestion--
//    displayQuestion()
//    updateButtonVisibility()
//  }
//}

//updatePrevButtonVisibility = () => {
//  if (currentQuestion === 0) {
//    previousBtn.style.display = 'none'
//  } else {
//    previousBtn.style.display = 'inline-block'
//  }
//}


retryQuiz = () => {
  currentQuestion = 0
  score = 0
  incorrectAnswers = []
  quizContainer.style.display = 'block'
  nextBtn.style.display = 'inline-block'
  retryBtn.style.display = 'none'
  showAnsBtn.style.display = 'none'
  resultContainer.innerHTML = ''
  displayQuestion()
}

showAnswer = () => {
  quizContainer.style.display = 'none';
  nextBtn.style.display = 'none';
  retryBtn.style.display = 'inline-block';
  showAnsBtn.style.display = 'none';

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



nextBtn.addEventListener('click', checkAnswer);
//previousBtn.addEventListener('click', displayPreviousQuestion)
retryBtn.addEventListener('click', retryQuiz);
showAnsBtn.addEventListener('click', showAnswer)

//updatePrevButtonVisibility()
displayQuestion()


