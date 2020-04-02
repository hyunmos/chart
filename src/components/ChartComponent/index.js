import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { CHART_TYPE } from '../../constants/type'

/**
 * Line Graph about get point per month.
 * - Show 4th month x-axios (Jan/Apr/Aug/Dec)
 * - Add vertical line on current month.
 * - Add Tooltip on current month and show get point.
 */

const samplePlugin = {
  afterDatasetsDraw: (chart, b, c) => {
    console.log(chart, b, c)
  },
};


function ChartComponent() {
  useEffect(() => {
    const canvas = document.getElementById('chart');
    new Chart(canvas, {
      type: CHART_TYPE.LINE,
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      plugins: [samplePlugin],
    });
  }, []);

  return (
    <canvas id="chart" />
  );
}

export default ChartComponent;
