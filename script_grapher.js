document.getElementById('graph-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user input values for the slope parameters
    const n = parseFloat(document.getElementById('charge_number').value);
    const m = parseFloat(document.getElementById('mobility').value);

    // Generate data points with a dynamically changing slope
    const labels = [];
    const data = [];
    for (let x = -10; x <= 10; x++) {
        labels.push(x);

        // Introducing a dynamic change to the slope: for example, making it quadratic with respect to 'n'
        const dynamicSlope = m * (1 + 0.1 * n ); // Adjust this formula as per the required relationship
        data.push(dynamicSlope * n * 1.6 * x * 0.001);  // Modified data generation
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
                    },
                    beginAtZero: true,
                    min:0
                },
                y: {
                    title: {
                        display: true,
                        text: 'Drift current(order of 10^4)'
                    },
                    beginAtZero: true,
                    max:250,
                    min:0
                }
            }
        }
    });
});
