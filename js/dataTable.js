let myTable = [];
let o ={};
let arr = [];
let p;
let newP = [];
let e = [];
let n = [];

let alarm;


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
      buildTable()
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  loadData();
  loadDataNow();
  const result = await resolveAfter2Seconds();
  console.log(result);
  let womenAvg = getAverage(earnings.map(x => x.all_f));
  let maleAvg = getAverage(earnings.map(x => x.all_m));
  let res =  womenAvg / maleAvg;
  console.log(res)
  // expected output: "resolved"
}

$(document).ready(function() {
  console.log('ready! line');
  asyncCall()
});


function buildTable(){
  for(var i=0; i < percents.length; i++){
// console.log(p[i]);
    o = {
      state: percents[i].state,
      percent: percent_f[i] + '%',
      avg: currencyFormat(allEarnings[i])
    };
    myTable.push(o);
  }
  console.log(myTable)


for(var j=0; j < percents.length; j++){
  arr.push(Object.values(myTable[j]));
}

console.log(arr)
 $('#table_id').DataTable({
   columnDefs: [
        { targets: [0, 2], visible: true},
        { targets: '_all', visible: true }
    ],
    data: arr,
 });

}
//https://blog.abelotech.com/posts/number-currency-formatting-javascript/

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
