//------------------------------------------------------------------
//---------------------activePlayers_chart--------------------------
//------------------------------------------------------------------

let ctx1 = document.getElementById('activePlayers_chart').getContext('2d');
let activePlayers = new Chart(ctx1, {
    type: 'line',
    data: {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            data: [40, 25, 30, 50, 30, 26, 40, 20],
            backgroundColor: 'rgba(232, 234, 234, 0.5)',
            borderColor: '#3A8282',
            pointRadius: 5,
            borderWidth: 1,
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    borderDash: [2, 2],
                    color: '#E7E7E7',
                },
            }],
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 60,
                },
                gridLines: {
                    borderDash: [2, 2],
                    color: '#CBCBCB'
                },
            }]
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'label',
            backgroundColor: '#3A8282',
        }
    }
});

//------------------------------------------------------------------
//---------------------activeTournaments_chart----------------------
//------------------------------------------------------------------

let ctx2 = document.getElementById('activeTournaments_chart').getContext('2d');
let activeTournaments = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['JAN', 'FED', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets: [{
            data: [450, 750, 600, 900, 450, 675, 300],
            backgroundColor: 'rgba(43, 43, 46, 0.1)',
            borderColor: '#334356',
            pointRadius: 5,
            borderWidth: 1,
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    borderDash: [2, 2],
                    color: '#E7E7E7',
                },
            }],
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                },
                gridLines: {
                    borderDash: [2, 2],
                    color: '#CBCBCB'
                },
            }]
        },
        legend: {
            display: false,
        },
        tooltips: {
            mode: 'label',
            backgroundColor: '#3A8282',
        }
    }
});

//------------------------------------------------------------------
//---------------------playerStatistics_charts----------------------
//------------------------------------------------------------------

let ctx3 = document.getElementById('playerStatistics_item__chart1').getContext('2d');
let playerStatistics1 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#5E6773', '#D2D4D8'],
                data: [58, 42],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        tooltips: {
            enabled: false,
        },
        title: {
            display: false
        }
    }
});

let ctx4 = document.getElementById('playerStatistics_item__chart2').getContext('2d');
let playerStatistics2 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#94C571', '#D2D4D8'],
                data: [75, 25],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        tooltips: {
            enabled: false,
        },
        title: {
            display: false
        }
    }
});

let ctx5 = document.getElementById('playerStatistics_item__chart3').getContext('2d');
let playerStatistics3 = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#5E6773', '#D2D4D8'],
                data: [28, 72],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        tooltips: {
            enabled: false,
        },
        title: {
            display: false
        }
    }
});

let ctx6 = document.getElementById('playerStatistics_item__chart4').getContext('2d');
let playerStatistics4 = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                backgroundColor: ['#94C571', '#D2D4D8'],
                data: [97, 3],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        tooltips: {
            enabled: false,
        },
        title: {
            display: false
        }
    }
});

// Простое обновление диаграммы с рандомными данными

let updateChart = function (chart, maxVal) {
    for (let i = 0; i < 7; i++) {
        chart.data.datasets[0].data[i] = Math.floor(Math.random() * Math.floor(maxVal));
    }
    chart.update();
};

