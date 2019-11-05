/* globals Chart:false, feather:false */

(function() {
  "use strict";

  feather.replace();

  // Graphs
  var ctx = document.getElementById("myChart");
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1/11", "2/11", "3/11", "4/11", "5/11", "6/11", "7/11", "8/11"],
      datasets: [
        {
          data: [15339, 21345, 18483, 24003, 23489, 24092, 12034, 32034],
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff"
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false
            }
          }
        ]
      },
      legend: {
        display: false
      }
    }
  });
})();
