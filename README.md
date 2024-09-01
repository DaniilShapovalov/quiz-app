# quiz-app

Check out the live demo: [Quiz App Demo](https://653a52d4340b0c7e2942472a--vocal-cucurucho-073190.netlify.app/)

## Quiz App

This project features a simple quiz application built with JavaScript. Users can answer multiple-choice questions and receive immediate feedback on their answers.

### Quiz Data

The quiz questions and answers are stored in the `quizData` array. Each object in the array represents a question with multiple-choice answers and the correct answer.

```javascript
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

