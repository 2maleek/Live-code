/**
 * 
 * Kalian diminta untuk mengoptimalkan sebuah fitur menu restaurant, karena saat ini, order minuman dan makanan harus dibuat terpisah.
 * Bantulah restoran untuk membuat program yang akan menggabungkan kedua pesanan tersebut.
 * 
 * Function menuOptimizer akan menerima 2 array, satu array berisi order makanan dan array kedua berisi order minuman. Di dalam 
 * tiap array akan ada order dengan format:
 * 
 * 'nama-makanan' atau 'nama-minuman'
 * 
 * Kalian diminta untuk mengelompokkan kedua pesanan ini dalam satu array 2 dimensi dengan format:
 * [['nama orang1', 'nama makanan orang1', 'nama minuman orang1'], ['nama orang2', 'nama makanan orang2', 'nama minuman orang2'], dst]
 * 
 * Contoh input: ['audrick-egg', 'ricky-chicken'], ['ricky-milk', 'audrick-coffee']
 * 
 * Maka Outputnya adalah:
 * [['audrick', 'egg', 'coffee'], ['ricky','chicken','milk']]
 * 
 * Semua orang pasti memesan makanan dan minuman, sehingga tidak ada kasus dimana ada yang tidak memesan makanan atau minuman
 * 
 * Rules:
 * - Dilarang menggunakan built-in function selain .push()!
 * 
 * 
 */

function menuOptimizer(arr1,arr2) {
  var result = [];
  for(var i=0; i<arr1.length; i++) {
    //cari nama orang
    var name = '';
    var food = ''
    for(var j=0; j<arr1[i].length; j++){
      if(arr1[i][j] === '-'){
        for(var k=j+1; k<arr1[i].length; k++){
          food += arr1[i][k];
        }
        break;
      }
      name += arr1[i][j];
    }
    result.push([name, food]);
  }

  for(i=0; i<result.length; i++) {
    for(j=0; j<arr2.length; j++) {
      //cocokan nama
      var temp = '';
      var drink = '';
      for(var k=0; k<arr2[j].length; k++){
        if(arr2[j][k] === '-'){
          for(var l=k+1; l<arr2[j].length; l++){
            drink += arr2[j][l];
          }
          break;
        }
        temp += arr2[j][k]; 
      }
      if(result[i][0] === temp) {
        result[i].push(drink);
      }
    }
  }
  return result;
}

console.log(menuOptimizer(
  ['audrick-chicken', 'ayu-cereal', 'ari-bread', 'arnold-soup', 'adiel-chicken'],
  ['adiel-coffee','audrick-soda', 'ayu-milk', 'arnold-juice', 'ari-soda'])
)
/**
 * [
  [ 'audrick', 'chicken', 'soda' ],
  [ 'ayu', 'cereal', 'milk' ],
  [ 'ari', 'bread', 'soda' ],
  [ 'arnold', 'soup', 'juice' ],
  [ 'adiel', 'chicken', 'coffee' ]
]
 */
console.log(menuOptimizer(
  ['audrick-egg', 'ricky-chicken'], 
  ['ricky-milk', 'audrick-coffee'])
  ) 
//[ [ 'audrick', 'egg', 'coffee' ], [ 'ricky', 'chicken', 'milk' ] ]