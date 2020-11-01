let earnings = [];
let categories = [];
let allEarnings = [];

$(document).ready(function() {
  console.log('ready! line');
  // loadDataNow();


});


function loadDataNow() {
  $.getJSON("earnings.json", function(states) {
    parseDataNow(states);
loadLine()
  });
}

function parseDataNow(states) {
  $.each(states, function(i) {
    earnings.push(states[i])
  });
  categories = states.map(x => x.state);
  allEarnings = states.map(x => x.all_f)

}
//
function loadLine(){
  Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }

    });
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
              text: '2018 INFLATION-ADJUSTED DOLLARS '
          }
      },
      tooltip: {
        pointFormat: '<b>{point.series.name} <b><br>   ${point.y:,.0f}',
        valuePrefix: '$',
        valueSuffix: ' USD'
    },
      plotOptions: {
          line: {

              enableMouseTracking: true
          }
      },
      series: [{
          name: 'Male',
          data: earnings.map(x => x.all_m),
          color: '#04BFBF'
      }, {
          name: 'Female',
          data: earnings.map(x => x.all_f),
          color: '#333'
      }]
  });

}
