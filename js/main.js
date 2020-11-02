$(document).ready(function() {
  console.log('ready! main');
});

let percents = [];
let dataArr = [];
let curr = {};
let percent_f = []
let names = []

function loadData() {
  $.getJSON("data.json", function(states) {
    parseData(states);
    loadMap();

  });
}

function parseData(states) {
  $.each(states, function(i) {
    percents.push(states[i])
  });
  percent_f = states.map(x => x.ces);
  names = states.map(x => x.state);
  //create data array for chart 1
  for (var i = 0; i < percents.length; i++) {
    curr = {
      'hc-a2': percents[i].letter,
      name: percents[i].state,
      region: percents[i].region,
      x: percents[i].x,
      y: percents[i].y,
      value: percents[i].ces
    };
    dataArr.push(curr);
  }
}

function loadMap() {
  Highcharts.chart('container', {
    chart: {
      type: 'tilemap',
      inverted: true,
      height: '80%'
    },

    accessibility: {
      description: 'Showing the percent of females in STEM jobs, broken down by state',
      screenReaderSection: {
        beforeChartFormat: '<h5>{chartTitle}</h5>' +
          '<div>{chartSubtitle}</div>' +
          '<div>{chartLongdesc}</div>' +
          '<div>{viewTableButton}</div>'
      },
      point: {
        valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
      }
    },

    title: {
      text: 'Breakdown of percent that women make up in STEM by State '
    },

    subtitle: {
      text: 'Source:<a href="https://data.census.gov/cedsci/table?q=Occupation&g=0100000US.04000.001&y=2018&tid=ACSST5Y2018.S2401&moe=false&hidePreview=true">US Census Bureau</a>'
    },

    xAxis: {
      visible: false
    },

    yAxis: {
      visible: false
    },

    colorAxis: {
      dataClasses: [{
        from: 0,
        to: 25,
        color: '#7ec5cc',
        name: '< 25%'
      }, {
        from: 25,
        to: 35,
        color: '#04BFBF',
        name: '25-30%'
      }, {
        from: 35,
        to: 40,
        color: '#025959',
        name: '35-40%'
      }, {
        from: 40,
        color: '#A0A603',
        name: '> 40%'
      }]
    },

    tooltip: {
      headerFormat: '',
      pointFormat: 'Percent Female in <b> {point.name}</b> is <b>{point.value}%</b>'
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.hc-a2}',
          color: '#000000',
          style: {
            textOutline: false
          }
        }
      }
    },

    series: [{
      name: '',
      data: dataArr
    }]
  });
}

function getAverage(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  var avg = total / array.length;
  return avg
}
