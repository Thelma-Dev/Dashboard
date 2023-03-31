'use strict'
// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
      
window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// Selection
const valueGraph = getElement('graph');

function drawChart() {
    let dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Month');
    dataTable.addColumn('number', 'Amount');
    // To customize content of the tooltip
    dataTable.addColumn({type: 'string', role: 'tooltip'});
    dataTable.addRows([
      ['JAN', 25,'N25K in your first month'],
      ['FEB', 49, 'Way to go! N49K'],
      ['MAR', 50, 'N50K is a new level.'],
      ['APR', 24, 'N24k saved'],
      ['MAY', 30, 'N30k in your last month']
    ]);

    let options = {
      tooltip: {isHtml: true},
      legend: 'none',
    };

    let chart = new google.visualization.BarChart(valueGraph);
    chart.draw(dataTable, options);   
}
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// function resize() {
//   let chart = new google.visualization.BarChart(valueGraph);
//     chart.draw(dataTable, options.Width = 360);   
// }
// window.onresize = resize();

valueGraph.style.fontFamily = 'Poppins';

