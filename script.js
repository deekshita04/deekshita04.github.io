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
        q1: "When an electric field is applied, free electrons in the conductor accelerate, gaining kinetic energy.As these electrons move, they frequently collide with the vibrating atoms (or ions) in the crystal lattice.During these collisions, the electrons lose energy, transferring it to the lattice atoms, causing them to vibrate more.The increased vibration of lattice atoms is manifested as heat, leading to a temperature rise in the conductor.This phenomenon is known as resistive heating or Joule heating ',
        q2: 'Extrinsic semiconductors are doped with impurities to increase their conductivity.In n-type semiconductors, donor atoms provide extra electrons, making electrons the majority charge carriers.In p-type semiconductors, acceptor atoms create holes, making holes the majority charge carriers.These charge carriers (electrons or holes) move under the influence of an electric field, enabling electrical conduction.',
        q3: 'The main difference between n-type and p-type semiconductors lies in the type of majority charge carriers introduced through doping.The n-type semiconductors are doped with donor impurities (e.g., phosphorus, arsenic).Doping introduces additional free electrons as majority charge carriers. The p-type semiconductors are doped with acceptor impurities (e.g., boron, gallium).This creates holes (absence of electrons) as majority charge carriers.',
        q4: 'Charge movement happens due to the concentration gradient of carriers, leading to the establishment of the depletion region and the built-in electric field, even without an externally applied field.'
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
