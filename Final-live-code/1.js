/**
 * 
 * Diberikan sebuah arrray, array tersebut bisa memiliki panjang genap atau ganjil. 
 * Jika panjang array ganjil, maka hilangkan elemen yang berada di tengah2 array tersebut.
 * Jika panjang array genap, maka hilangkan elemen kedua dari kiri dan elemen kedua dari kanan.
 * Lihatlah test-case untuk lebih jelasnya.
 * 
 *
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push(), parseInt(), dan Math.round()
 * -TIDAK MENULISKAN PSEUDOCODE = 0!
 * 
 */

//tulislah pseudocode disini!

/**
 * 
 * cek panjang array,ganjil atau genap
 * jika genap
 *   buat array baru untuk menampung nilai yang sudah di filter
 *   lakukan pengulangan array
 *   jika index bukan element kedua array dari kiri atau index bukan element kedua array dari kanan
 *      lakukan push array[i]
 * 
 * jika ganjil
 *   buat array baru untuk menampung nilai yang sudah di filter
 *     lakukan pengulangan array
 *     jika index bukan (Math.round(panjang array / 2 ))
 *       lakukan push array[i]
 *   
 * 
 */

function makeEven(array) {
  //jika genap
  if(array.length % 2 === 0){
    var newArray = [];
    for(var i=0;i<array.length;i++){
      if(i === 1 || i === array.length-2){
        //doing nothing
      }else{
        newArray.push(array[i]);
      }
    }
    return newArray;
  }else{ //jika ganjil
    var newArray = [];
    for(var i=0;i<array.length;i++){
      if( i === Math.round(array.length / 2 )){
        //doing nothing
      }else{
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
}

console.log(makeEven([1,2,3,4,5])); //[ 1, 2, 4, 5 ]
console.log(makeEven([2,3,4,5,6,7,8])); //[2, 3, 4, 6, 7, 8]
console.log(makeEven([1,2,3,4,5,6])); //[1, 3, 4, 6]
console.log(makeEven([1,2])); //[]
console.log(makeEven([1,2,3,4])) //[1,4]