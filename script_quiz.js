document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    // Answers
    const answers = {
        q1: 'C',
        q2: 'A',
        q3: 'D',
        q4: 'B'
    };

    const explanations = {
        q1: 'Mobility is defined as the ratio of velocity of charge and electrical field. It can be thought of as the ease of carrier drift.',
        q2: 'Calculate using- \n Jn = -qnчn * E \n Jp = -qnчp * E \n J = Jn + Jp \n J = E/ρ where ρ is resistivity',
        q3: 'Diffusion is particle movement (flux) in response to a concentration gradient. Diffusion process occurs in a semiconductor that is non-uniformly doped. The overall result is to erase the charge gradient.',
        q4: 'Calculate using- \n Jn = -qDn * (dn/dx) \nJp = -Dp * (dn/dx) \n Jtotal = Jp + Jn'
    };

    const formData = new FormData(this);
    formData.forEach((value, key) => {
        if (value === answers[key]) {
            score++;
        }
    });

    // Display the score
    let resultMessage = `You scored ${score} out of 4!<br><br>`;

    // Display the correct answers and explanations
    resultMessage += "Here are the correct answers and explanations:<br>";
    Object.keys(answers).forEach((question, index) => {
        resultMessage += `Q${index + 1}: ${answers[question]}<br>`;
        resultMessage += `Explanation: ${explanations[question]}<br><br>`;
    });

    document.getElementById('result').innerHTML = resultMessage;
});