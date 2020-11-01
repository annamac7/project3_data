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
      avg: '$'+allEarnings[i]
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
