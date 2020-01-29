/**
 * Function putDiagonal menerima input berupa sebuah string. String ini harus ditaruh ke dalam diagonal kanan sebuah array 2 dimensi.
 * Untuk lokasi lain di dalam array tersebut, taruh lah string '*'.
 * Panjang row dan column dari array tersebut sepanjang string input. 
 * Lihatlah test-case untuk lebih jelasnya.
 *
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()!
 * 
 */
function putDiagonal(str) {
  index = str.length-1;
  for(var i=0; i<str.length; i++){
    for(var j=0; j<str.length.j++){
      if(j === index){
        new
        index-1;
      }
    }
  }   
}


console.log(putDiagonal('dgjm'));
/**
 * 
 [
  [ '*', '*', '*', 'd' ],
  [ '*', '*', 'g', '*' ],
  [ '*', 'j', '*', '*' ],
  [ 'm', '*', '*', '*' ]
]
 * 
 */

 console.log(putDiagonal('abcdef'))
//  [
//     [ '*', '*', '*', '*', '*', 'a' ],
//     [ '*', '*', '*', '*', 'b', '*' ],
//     [ '*', '*', '*', 'c', '*', '*' ],
//     [ '*', '*', 'd', '*', '*', '*' ],
//     [ '*', 'e', '*', '*', '*', '*' ],
//     [ 'f', '*', '*', '*', '*', '*' ]
// ]