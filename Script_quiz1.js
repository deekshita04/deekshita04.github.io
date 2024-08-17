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

    const explanations = {
        q1: 'As these electrons move, they constantly collide with the positive ions and other atoms in the conductor. This collision releases heat',
        q2: 'The valence band of the atoms is partially filled.If the electrons don’t have enough energy to jump across the band gap, the it does not conduct at all, otherwise it does.',
        q3: 'N-type semiconductors are obtained by doping with elements that have more valence electrons. P-type semiconductors are obtained by doping with elements that have fewer valence electrons',
        q4: 'At the junction, some of the free electrons in the n-type wander into the p-type due to diffusion. As they diffuse into the p-type they combine with holes, and cancel each other out.'
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
    resultMessage += "Here are the correct answers and explanations:<br>";
    Object.keys(answers).forEach((question, index) => {
        resultMessage += `Q${index + 1}: ${answers[question]}<br>`;
        resultMessage += `Explanation: ${explanations[question]}<br><br>`;
    });

    result.innerHTML = resultMessage;
});
