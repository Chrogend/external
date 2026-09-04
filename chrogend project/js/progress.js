// js/progress.js
// MathVibe Chart.js Initialization and Options

document.addEventListener('DOMContentLoaded', () => {
    // Determine light vs dark theme for chart text styling
    const isDarkMode = document.body.classList.contains('dark-mode');
    const textColor = isDarkMode ? '#94a3b8' : '#475569';
    const gridColor = isDarkMode ? '#1e293b' : '#e2e8f0';

    // 1. TOPIC COMPLETION BAR CHART
    const completionCtx = document.getElementById('completionChart');
    if (completionCtx) {
        new Chart(completionCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: topicLabels,
                datasets: [{
                    label: 'Completion %',
                    data: topicCompletionRates,
                    backgroundColor: 'rgba(37, 99, 235, 0.75)',
                    borderColor: '#2563eb',
                    borderWidth: 1.5,
                    borderRadius: 6,
                    hoverBackgroundColor: '#1d4ed8'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Completed: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: textColor,
                            font: {
                                family: 'Plus Jakarta Sans',
                                size: 10
                            }
                        }
                    },
                    y: {
                        min: 0,
                        max: 100,
                        grid: {
                            color: gridColor
                        },
                        ticks: {
                            color: textColor,
                            font: {
                                family: 'Plus Jakarta Sans'
                            },
                            callback: function(value) {
                                return value + "%";
                            }
                        }
                    }
                }
            }
        });
    }

    // 2. QUIZ PERFORMANCE LINE CHART
    const trendCtx = document.getElementById('trendChart');
    if (trendCtx) {
        new Chart(trendCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: trendLabels,
                datasets: [{
                    label: 'Quiz Score',
                    data: trendScores,
                    fill: true,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderColor: '#2563eb',
                    borderWidth: 3,
                    pointBackgroundColor: '#2563eb',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: textColor,
                            font: {
                                family: 'Plus Jakarta Sans',
                                size: 10
                            },
                            callback: function(value, index) {
                                // Shorten long titles on chart axis
                                const label = trendLabels[index];
                                return label && label.length > 15 ? label.substring(0, 12) + '...' : label;
                            }
                        }
                    },
                    y: {
                        min: 0,
                        max: 100,
                        grid: {
                            color: gridColor
                        },
                        ticks: {
                            color: textColor,
                            font: {
                                family: 'Plus Jakarta Sans'
                            },
                            callback: function(value) {
                                return value + "%";
                            }
                        }
                    }
                }
            }
        });
    }
});
