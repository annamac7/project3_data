// let percents = [];
// let earnings = [];
// let data = [];
// let arr = [];
//
$(document).ready(function() {
  console.log('ready! data');
console.log(allStates)
  // $('#table_id').DataTable()
});

//
// function loadDataNumbers() {
//   $.getJSON("data.json", function(items) {
//     parseDataNumbers(items);
//       //have the array of percents here
//   });
// }
//
// function parseDataNumbers(items) {
//   percents = items;
// }
//
//
// function loadDataEarnings() {
//   $.getJSON("earnings.json", function(items) {
//     parseDataEarnings(items);
//       //have the array of percents here
//     buildTable();
//   });
// }
//
// function parseDataEarnings(items) {
//   earnings = items;
// }
//
// function buildTable(){
//   console.log(earnings);
//   console.log(percents);
//   for(var i=0; i < earnings.length; i++){
//     data[i] = {
//       state: earnings[i].state,
//       role: 'role',
//       percent: percents[i].ces,
//       avg: earnings[i].all_f
//     };
//   }
//   arr = Object.entries(data);
//   console.log( arr)
//  $('#table_id').DataTable({
//     data: arr,
//    retrieve: true,
//     paging: false
//  });
//
// }
