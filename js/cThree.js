let ces = [];
let elcm = [];
let ht = [];
let ncm = [];
let ptm = [];
let so = [];
let soo = [];
let cesVal;
let elcmVal;
let htVal;
let ncmVal;
let soVal;
let ptmVal;
let sooVal;


$(document).ready(function() {
  console.log('ready!');
  loadData();

})



function loadData(){
  $.getJSON("data.json", function(states) {
    parseData(states);
      loadChart();


  });
}

function parseData(states){
  // console.log("here")
  ces = states.map(s => s.ces);
  cesVal = getAverage(ces);

  elcm = states.map(s => s.elcm);
  elcmVal = getAverage(elcm);

  ht = states.map(s => s.ht);
  htVal = getAverage(ht);

  ncm = states.map(s => s.ncm);
  ncmVal = getAverage(ncm);

  ptm = states.map(s => s.ptm);
  ptmVal = getAverage(ptm);

  so = states.map(s => s.so);
  soVal = getAverage(so);

  soo = states.map(s => s.soo);
  sooVal = getAverage(soo);
}




function loadChart() {
  console.log(4)
  var chart2 = c3.generate({
    bindto: '#pie',
    data: {
      columns: [
        ['Computer, Engineering & Science', cesVal],
        ['duke', 29],
      ],
      type: 'pie',
      colors: {
        UNC: 'lightblue',
        duke: 'darkblue'
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
