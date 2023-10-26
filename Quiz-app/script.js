const quizData = [
    {
        question: 'Which renowned Japanese video game designer is often called the "father of survival horror" and is best known for his work on the Resident Evil series?',
        a: 'Hideo Kojima',
        b: 'Shinji Mikami',
        c: 'Keiichiro Toyama',
        d: 'Koji Igarashi',
        correct: 'b'
    },
    {
        question: 'Touhou Project is famous for its bullet hell shooters. Who is the primary developer of the Touhou games and the creator of the Touhou universe?',
        a: 'Junya Ota',
        b: 'Keiji Inafune',
        c: 'ZUN (Team Shanghai Alice)',
        d: 'Suda51',
        correct: 'c'
    },
    {
        question: "The 'Yakuza' game series, set in the fictional city of Kamurocho, is known for its immersive storytelling and open-world gameplay. What is the name of the main protagonist in most of the series' titles?",
        a: 'Goro Kiryu',
        b: 'Ken Masters',
        c: 'Ryu Hayabusa',
        d: 'Kazuma Kiryu',
        correct: 'd'
    },
    {
        question: '"Shin Megami Tensei" is a popular Japanese RPG series. What is the name of the demon-summoning device often used in the games to negotiate with and battle demons?',
        a: 'Persona',
        b: 'Pokeball',
        c: 'Demonica',
        d: 'COMP',
        correct: 'a'
    },
    {
        question: 'In the "Silent Hill" series, the music is a crucial element in creating its eerie atmosphere. Who is the composer known for the haunting and atmospheric music of the early "Silent Hill" games, including the first installment released in 1999?',
        a: 'Yoko Kanno',
        b: 'Yoko Shimomura',
        c: 'Akira Yamaoka',
        d: 'Koji Kondo',
        correct: 'c'
    }
];
const quizEls = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselect()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    }); 

    return answer;
   
}

function deselect(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
    }

submitBtn.addEventListener("click",() => {
    const answer = getSelected();
    console.log(answer)
    
    if(answer === quizData[currentQuiz].correct){
        score++;
    } {
        currentQuiz++;
        if(currentQuiz < quizData.length){
        loadQuiz();
    } else {    
        quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`
        alert("You finished! Congrats!")
    }
}
});


// if(answer){
//     if(answer && answer === quizData[currentQuiz])
//     {
//         currentQuiz++;
//     }
// }