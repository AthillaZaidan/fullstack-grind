// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- QUARTERLY REVENUE LINE CHART ---
    const quarterlyRevenueCtx = document.getElementById('quarterlyRevenueChart').getContext('2d');
    const quarterlyRevenueChart = new Chart(quarterlyRevenueCtx, {
        type: 'line',
        data: {
            labels: ['1st', '2nd', '3rd', '4th'],
            datasets: [{
                label: 'Quarterly Revenue',
                data: [20, 40, 75, 60], // Sample data from the image
                borderColor: '#6a0dad', // Purple line color
                backgroundColor: 'rgba(106, 13, 173, 0.1)', // Light purple fill under the line
                tension: 0.4, // Makes the line smooth
                fill: true,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false // Hides the legend at the top
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a0a0a0' // Y-axis labels color
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)' // Color of the grid lines
                    }
                },
                x: {
                    ticks: {
                        color: '#a0a0a0' // X-axis labels color
                    },
                    grid: {
                        display: false // Hides the vertical grid lines
                    }
                }
            }
        }
    });

    // --- SOURCE BREAKDOWN PIE CHART ---
    const sourceBreakdownCtx = document.getElementById('sourceBreakdownChart').getContext('2d');
    const sourceBreakdownChart = new Chart(sourceBreakdownCtx, {
        type: 'pie',
        data: {
            labels: ['Social', 'Direct', 'Referral', 'Other'],
            datasets: [{
                label: 'Source Breakdown',
                data: [35, 25, 20, 20], // Sample data from the image
                backgroundColor: [
                    '#FFFF00', // Yellow for Social
                    '#0000FF', // Blue for Direct
                    '#FF0000', // Red for Referral
                    '#00FF7F', // Green for Other
                ],
                borderColor: '#3a3a3a', // Same as card background for spacing
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#a0a0a0' // Legend text color
                    }
                }
            }
        }
    });
});
