let myData = {
  mbf:	120763,
  ces:	25518,
  elcm:	136501,
  ht:	107926,
  so:	196080,
  soo:	309437,
  ncm:	9483,
  ptm:	86372
}

// let myData = {
//   'Management, Business & Finance':	120763,
//   'Computer, Engineering & Science':	25518,
//   'Education, Legal, Community Service, Arts & Media':	136501,
//   'Health Care Practitoners and Technical Occupations':	107926,
//   'Service':	196080,
//   'Sales & Office':	309437,
//   'Natural Resources, Construction & Maintenance':	9483,
//   'Production, Transport & Material Moving':	86372
// }


$(document).ready(function() {
  console.log('ready!');
  loadChart();

})







function loadChart() {
  console.log(4)
  var chart2 = c3.generate({
    bindto: '#pie',
    data: {
      columns: [
        ['Management, Business & Finance', myData.mbf],
        ['Computer, Engineering & Science', myData.ces],
        ['Education, Legal, Community Service, Arts & Media', myData.elcm],
        ['Health Care Practitoners and Technical Occupations', myData.ht],
        ['Service', myData.so],
        ['Sales & Office', myData.soo],
        ['Natural Resources, Construction & Maintenance', myData.ncm],
        ['Production, Transport & Material Moving', myData.ptm]
      ],
      type: 'pie',
      colors: {
        'Management, Business & Finance': '#a4aaab',
        'Computer, Engineering & Science': 'cyan',
        'Education, Legal, Community Service, Arts & Media' : '#8b8e8f',
        'Health Care Practitoners and Technical Occupations' : '#bec1c2',
        'Service' : '#5e6061',
        'Natural Resources, Construction & Maintenance' : '#7c8082',
        'Production, Transport & Material Moving' : '#bcc0c2',
        'Sales & Office' : '#969899'
      },
      onclick: function(d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function(d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function(d, i) {
        console.log("onmouseout", d, i);
      }
    }
  });
}

function getAverage(array){
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
}
var avg = total / array.length;
return avg
}
