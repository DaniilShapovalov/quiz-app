# quiz-app

https://653a52d4340b0c7e2942472a--vocal-cucurucho-073190.netlify.app/

Quiz App
This project features a simple quiz application built with JavaScript. Users can answer multiple-choice questions and receive immediate feedback on their answers.

Quiz Data
The quiz questions and answers are stored in the quizData array. Each object in the array represents a question with multiple-choice answers and the correct answer.

const quizData = [
    {
        question: 'Which renowned Japanese video game designer is often called the "father of survival horror" and is best known for his work on the Resident Evil series?',
        a: 'Hideo Kojima',
        b: 'Shinji Mikami',
        c: 'Keiichiro Toyama',
        d: 'Koji Igarashi',
        correct: 'b'
    },
    // More questions...
];
DOM Elements
The code retrieves necessary HTML elements by their IDs and classes to display questions, answer options, and handle user interactions.


const quizEls = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
Load Quiz
The loadQuiz function updates the quiz UI with the current question and answer choices. It also calls deselect to uncheck any previously selected answers.


function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
Get Selected Answer
The getSelected function checks which radio button is selected and returns its ID, which corresponds to the answer choice.

javascript
Skopiuj kod
function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
Deselect Answers
The deselect function unchecks all radio buttons to prepare for the next question.

function deselect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
Submit Button Event
When the user clicks the "Submit" button, the selected answer is checked against the correct answer for the current question. If correct, the score is incremented. The quiz moves to the next question, or, if it’s the last question, it displays the final score and a reload button.


submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    console.log(answer);

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quizEls.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
        alert("You finished! Congrats!");
    }
});
Summary
The application provides a basic but functional quiz experience, where users answer questions, receive immediate feedback, and can see their final score upon completing the quiz.
