$(document).ready(function() {
  console.log('ready!');
  loadData();
});

let dataArr = [];
let dataCM = [];
let dataAE = [];
let code = [];
let region = [];
let x = [];
let y = [];
let stateArr = [];
let all = [];
let ces = [];
let elcm = [];
let ht = [];
let ncm = [];
let ptm = [];
let so = [];
let soo = [];
let compMath = [];
let ae = [];
let lpss = [];
let theName;



function loadData() {
  $.getJSON("data.json", function(states) {
    parseData(states);
  });
}

function parseData(states) {


  $.each(states, function(i) {
    stateArr.push(states[i].state);
    all.push(states[i].all);
    ces.push(states[i].ces);
    code.push(states[i].letter);
    region.push(states[i].region);
    y.push(states[i].y);
    x.push(states[i].x);

  });

  //create data array for chart 1
  for (var i = 0; i < all.length; i++) {
    dataArr[i] = {
      'hc-a2': code[i],
      name: stateArr[i],
      region: region[i],
      x: x[i],
      y: y[i],
      value: ces[i]

    };
  }


  // map chart
  Highcharts.chart('container', {
    chart: {
      type: 'tilemap',
      inverted: true,
      height: '80%'
    },

    accessibility: {
      description: 'A tile map represents the states of the USA by population in 2016. The hexagonal tiles are positioned to geographically echo the map of the USA. A color-coded legend states the population levels as below 1 million (beige), 1 to 5 million (orange), 5 to 20 million (pink) and above 20 million (hot pink). The chart is interactive, and the individual state data points are displayed upon hovering. Three states have a population of above 20 million: California (39.3 million), Texas (27.9 million) and Florida (20.6 million). The northern US region from Massachusetts in the Northwest to Illinois in the Midwest contains the highest concentration of states with a population of 5 to 20 million people. The southern US region from South Carolina in the Southeast to New Mexico in the Southwest contains the highest concentration of states with a population of 1 to 5 million people. 6 states have a population of less than 1 million people; these include Alaska, Delaware, Wyoming, North Dakota, South Dakota and Vermont. The state with the lowest population is Wyoming in the Northwest with 584,153 people.',
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
      text: '% of females in STEM by State'
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
        color: '#04ADBF',
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



  var colors = Highcharts.getOptions().colors;
  console.log(colors)
  Highcharts.chart('steam', {

    chart: {
      type: 'streamgraph',
      marginBottom: 30,
      zoomType: 'x'
    },

    // Make sure connected countries have similar colors
    colors: [
      colors[0] = '#04ADBF' ,
      colors[1] = '#F2E0C9',
      colors[2] ='#04BFBF',
      colors[3] = '#A0A603',
      colors[4] = '#025959',


      colors[5] = '#04ADBF',
      colors[6] ='#F2E0C9' ,

    ],

    title: {
      floating: true,
      align: 'center',
      text: 'Breakdown of Female Occupation Percentages by State ',
      y: 10
    },
    subtitle: {

      floating: true,
      align: 'center',
      y: 30,
      text: 'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
    },

    xAxis: {
      maxPadding: 0,
      type: 'category',
      crosshair: false,
      categories: code,
      labels: {
        align: 'left',
        reserveSpace: true
      },
      lineWidth: 0,
      margin: 10,
      tickWidth: 0
    },

    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false
    },

    legend: false,

    plotOptions: {
      series: {
        label: {
          minFontSize: 5,
          maxFontSize: 15,
          style: {
            color: 'rgba(255,255,255,0.75)'
          }
        }
      }
    },

    // Data parsed with olympic-medals.node.js
    series: [{
      name: "Computer, Engineering & Science",
      data: states.map(x => x.ces )
    }, {
      name: "Management, Business & Finance",
      data: states.map(x => x.mbf)
    }, {
      name: "Education, Legal, Community Service, Arts & Media",
      data:states.map(x => x.elcm)
    },{
      name: "Healthcare Practitioners & Technical Occupations",
      data:states.map(x => x.ht)
    },{
      name: "Service Occupations",
      data:states.map(x => x.so)
    },{
      name: "Sales and Office",
      data:states.map(x => x.soo)
    },{
      name: "Natural Resources, Construction, and Maintenance",
      data:states.map(x => x.ncm)
    },{
      name: "Production, Transport, and Material Moving",
      data:states.map(x => x.ptm)
    },
  ],

    exporting: {
      sourceWidth: 800,
      sourceHeight: 600
    }

  });

}
