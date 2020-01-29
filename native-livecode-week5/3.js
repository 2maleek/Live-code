/**
Olah Data Students
Function menerima input berupa array-of-objects yang berisi nama student beserta score mereka. Function `groupStudents`
akan mengelompokkan student menjadi 2 kelompok: student dengan nilai >= (lebih besar atau sama dengan) rata-rata di dalam array di property 'above'
dan student dengan nilai dibawah rata-rata di dalam array di property 'under'. 
Contoh:
- input: [
    { name: 'Foobar', score: 75 },
    { name: 'Foobaz', score: 60 },
    { name: 'Foo', score: 75 }]
- output:
   { above: [ 'Foobar', 'Foo' ], under: [ 'Foobaz' ] }
 
Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
*/
function groupStudents (students) {
  //cari nilai rata-rata
  var result = {above: [], under: []}
  if(students.length === 0) {
    return {};
  }
  var rata2 = 0;
  for(var i=0; i<students.length; i++) {
    rata2 += students[i].score;
  }
  rata2 /= students.length;
  console.log(rata2);

  for(var i=0; i<students.length; i++) {
    if(students[i].score >= rata2) {
      result.above.push(students[i].name);
    }else{
      result.under.push(students[i].name);
    }
  }

  if(result.under.length === 0) {
    delete result.under;
  }else if(result.above.length === 0) {
    delete result.above;
  }

  return result;
}

//test-cases
console.log(groupStudents([
{ name: 'Dimitri', score: 90 },
{ name: 'Sergei', score: 70 },
{ name: 'Alisa', score: 50 },
{ name: 'Viktor', score: 65 },
{ name: 'Vladimir', score: 40 },
{ name: 'Alexei', score: 70 }
]));
//{
// above: [ 'Dimitri', 'Sergei', 'Viktor', 'Alexei' ],
// under: [ 'Alisa', 'Vladimir' ]
//}

console.log(groupStudents([
{ name: 'Foo', score: 100 },
{ name: 'Bar', score: 100 },
{ name: 'Baz', score: 100 }
]));
// { above: [ 'Foo', 'Bar', 'Baz' ] }

console.log(groupStudents([]));
// {}