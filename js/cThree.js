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

let subjects = ['Computer and Math', 'Architecture and Engineering', 'Life, Physical, and Social Sciences']

  let men = [3426408, 2385386, 758714 ];
  let female = [207452,436725,657518];


$(document).ready(function() {
  console.log('ready!');
  loadPie();
  loadTable();

})

let compMath_m = [];
let archEng_m = [];


function loadPie() {
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
        'Management, Business & Finance': '#008081',
        'Computer, Engineering & Science': 'turquoise',
        'Education, Legal, Community Service, Arts & Media' : '#4682b4',
        'Health Care Practitoners and Technical Occupations' : '#89cff0',
        'Service' : '#81d8d0',
        'Natural Resources, Construction & Maintenance' : '#008ecc',
        'Production, Transport & Material Moving' : '#72b5a5',
        'Sales & Office' : '#89cff0'
      },
      onclick: function(d, i) {
        // console.log("onclick", d, i);
      },
      onmouseover: function(d, i) {
        // console.log("onmouseover", d, i);
      },
      onmouseout: function(d, i) {
        // console.log("onmouseout", d, i);
      }
    }
  });
}


function loadTable() {
  console.log('hey')
  var table = document.createElement('table');

  var tr = document.createElement('tr');
  var th1 = document.createElement('th');
  var th2 = document.createElement('th');
  var th3 = document.createElement('th');

  var h1 = document.createTextNode('Role');
  var h2 = document.createTextNode('Male');
  var h3 = document.createTextNode('Female');

  th1.appendChild(h1);
  th2.appendChild(h2);
  th3.appendChild(h3);
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3)
  table.appendChild(tr);

  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    var text1 = document.createTextNode(subjects[i]);
    var text2 = document.createTextNode(comma(men[i]));
    var text3 = document.createTextNode(comma(female[i]));

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3)

    table.appendChild(tr);
  }

  table.className = "table my-5 table-hover";
  // tr.className = "row"


$('#table_here').append(table);

}

function getAverage(array){
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
}
var avg = total / array.length;
return avg
}


//https://blog.abelotech.com/posts/number-currency-formatting-javascript/
function comma(num) {
 return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
