/**
 * ============================
 * Outstanding Students Finder
 * ============================
 *
 * Diberikan array berisi nilai livecode suatu kelas, carilah nilai rata-rata dari kelas tersebut, 
 * lalu carilah student yang mendapatkan nilai diatas rata-rata beserta nilainya.
 *
 * Function getStudents menerima 2 parameter, grades adalah array berisi nilai, dan names adalah array yang berisi
 * nama dari student-student tersebut.
 *
 * Panjang array grades dan names selalu sama, 
 * karena index merepresentasikan student ke - i dengan nama di names[i] dan nilai di grades[i].
 *
 * contoh 
 * nilai: [5, 7, 2, 9, 3, 4] -> rata-rata = 5
 * murid: ["aron", "raka", "fauzan", "rivan", "ulul", "ramadhan"] 
 * 
 * maka murid yang nilai nya di atas rata - rata adalah: 
 * ["raka", "rivan"]
 * 
 * RULES: 
 *  - WAJIB MENGGUNAKAN PSEUDOCODE
 *  - Dilarang menggunakan .reduce .map .filter .indexOf .set .includes
 * 
 */


/*
* PSEUDOCODE

buat hander jika input kosong

IF(grades.length === 0 ) 
  return 'grades should not be empty'
IF(names.length ==0) 
   return 'student name should not be empty'

  //Mencari nilai rata-rata
 1.var rata=0 //untuk menampung nilai rata2
 2.lakukan pengulangan sampai grades.length (i=0;i<grades.length++)
  2.1  rata += grades[i]
 3. rata /= grades.length
     //Handler untuk grades kosong

 //Mencari muruid yang punya nilai diatas rata-rata
 var iKompeten = []
 4.lakukan pengulangan sampai grades.length (i=0;i<grades.length++)
   4.1 jika (grades[i] > rata) maka iKompeten.push(grades[i])

 var result = []
 5. lakukan pengulangan sampai iKompeten.lengt (i=0;i<iKompeten.length++)
   5.1 result.push(name[iKompeten[i]])


   return result
*/

function getStudents(grades, names) {
  if(grades.length === 0) {
    return 'grades should not be empty';
  }
  if(names.length === 0) {
    return 'student name should not be empty'
  }
  
  var rata = 0;
  for(var i=0; i<grades.length; i++) {
    rata+=grades[i];
  }
  rata /= grades.length;

  var iKompeten = [];
  for(var i=0; i<grades.length; i++) {
      if(grades[i]> rata) {
          iKompeten.push(i);
      }
  }

  var result  = [];
  for(var i=0; i<iKompeten.length; i++) {
    indeks = iKompeten[i]
    result.push(names[indeks]);
  }

  return result;
}


var grades1 = [10, 9, 8, 7, 6, 8];
var studentNames1 = ['Tony', 'Tifa', 'Cloud', 'Aerith', 'Stark', 'Asd'];
console.log(getStudents(grades1, studentNames1));
// [ 'Tony', 'Tifa' ]

var grades2 = [3, 9, 4, 6];
var studentNames2 = ['Aron', 'Rama', 'Gigih', 'Fauzan'];
console.log(getStudents(grades2, studentNames2));
// [ 'Rama', 'Fauzan' ]

var grades3 = [];
var studentNames3 = ["Rivan", "Raka", "Afif", "Gusti"];
console.log(getStudents(grades3, studentNames3));
// grades should not be empty

var grades4 = [5, 3, 2, 10, 5];
var studentNames4 = [];
console.log(getStudents(grades4, studentNames4));
// student name should not be empty

