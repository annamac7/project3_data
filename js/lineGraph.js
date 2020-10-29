$(document).ready(function() {
  console.log('ready! 1');
  loadData();
});

let allData = [];
let categories = [];
let men = [];
let female = [];

function loadData() {
  $.getJSON("earnings.json", function(states) {
    parseData(states);
    console.log(allData)
    loadLine();
  });
}

function parseData(states) {
  allData = states;
  categories = states.map(x => x.state)
  men = states.map

}
//
function loadLine(){

  Highcharts.chart('line', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Median Earnings by Sex for STEM Occupations (2013-2018)'
      },
      subtitle: {
          text: 'Source: United States Census Bureau'
      },
      xAxis: {
          categories: categories
      },
      yAxis: {
          title: {
              text: 'Temperature (°C)'
          }
      },
      plotOptions: {
          line: {
            
              enableMouseTracking: true
          }
      },
      series: [{
          name: 'Male',
          data: allData.map(x => x.all_m)
      }, {
          name: 'Female',
          data: allData.map(x => x.all_f)
      }]
  });

}
