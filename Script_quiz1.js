document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    // Answers
    const answers = {
        q1: 'B',
        q2: 'C',
        q3: 'D',
        q4: 'B'
    };

    const formData = new FormData(this);
    formData.forEach((value, key) => {
        if (value === answers[key]) {
            score++;
        }
    });

    // Display the score
    let resultMessage = `You scored ${score} out of 4!<br><br>`;

    // Display the correct answers
    resultMessage += "Here are the correct answers:<br>";
    Object.keys(answers).forEach((question, index) => {
        resultMessage += `Question ${index + 1}: Correct answer is ${answers[question]}<br>`;
    });

    result.innerHTML = resultMessage;
});
