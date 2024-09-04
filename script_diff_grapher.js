
document.getElementById('graph-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user input values for the slope parameters
    const n = parseFloat(document.getElementById('gradient_const').value);
    const m = parseFloat(document.getElementById('mobility').value);

    // Generate data points with a dynamically changing slope
    const labels = [];
    const data = [];
    for (let x = 0; x <= 1; x += 0.001) {
        labels.push(x);

        // Corrected the exponentiation
        const dx = m * 1.6 * 25 / 1.3;
        const gradient = 1 - Math.pow(2.72, -1 * x * n); // or use 1 - (2.72 ** (-1 * x * n))
        data.push(dx * gradient);  // Modified data generation
    }

    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Check if there is an existing chart instance and destroy it
    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
    }

    // Create the line chart
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `y = f(x) with dynamic slope`,
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Electric field across the semiconductor'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Drift current (order of 10^4)'
                    },
                    max:3500,
                    min:0
                }
            }
        }
    });
});

