document.addEventListener('DOMContentLoaded', () => {

    // --- QUARTERLY REVENUE LINE CHART ---
    const quarterlyRevenueCtx = document.getElementById('quarterlyRevenueChart').getContext('2d');
    const quarterlyRevenueChart = new Chart(quarterlyRevenueCtx, {
        type: 'line',
        data: {
            labels: ['1st', '2nd', '3rd', '4th'],
            datasets: [{
                label: 'Quarterly Revenue',
                data: [20, 40, 75, 60],
                borderColor: '#8A2BE2', // A brighter purple to match image
                backgroundColor: 'rgba(138, 43, 226, 0.1)',
                tension: 0.4,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                // This configures the legend to match the image
                legend: {
                    display: true,
                    position: 'top',
                    align: 'start', // Aligns legend to the left
                    labels: {
                        color: '#a0a0a0',
                        boxWidth: 15,
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    // This adds the "Revenue ($ mil)" label
                    title: {
                        display: true,
                        text: 'Revenue ($ mil)',
                        color: '#a0a0a0',
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        color: '#a0a0a0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#a0a0a0'
                    },
                    grid: {
                        display: false
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
                data: [35, 25, 20, 20],
                backgroundColor: [
                    '#FFFF00', // Yellow
                    '#4169E1', // Royal Blue (closer to image)
                    '#DC143C', // Crimson Red (closer to image)
                    '#32CD32', // Lime Green (closer to image)
                ],
                borderColor: '#3a3a3a', // Match the new card background
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'center', // Center the legend items
                    labels: {
                        color: '#a0a0a0',
                        boxWidth: 15,
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });
});