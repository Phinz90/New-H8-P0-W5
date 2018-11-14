function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var angkot = {};
    angkot.penumpang = arrPenumpang[i][0]
    angkot.naikDari = arrPenumpang[i][1]
    angkot.tujuan = arrPenumpang[i][2]

    var indexNaik = 0;
    var indexTurun = 0;
    for (var j = 0; j < rute.length; j++) {
      if (angkot.naikDari === rute[j]) {
        indexNaik = j;
      }
      if (angkot.tujuan === rute[j]) {
        indexTurun = j;
      }
      angkot.bayar = (indexTurun - indexNaik) * 2000

    }
    result.push(angkot);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

/*
Algoritma:
1. Buat variabel result berisi array kosong untuk menampung hasil akhir yg diinginkan,
2. looping dulu untuk mengecek ada nilai2 apa saja yg terdapat di dalam array soal,
3. lalu buat var berisi object yg berisi data2 penumpang,
4. setelah itu buat variabel baru (indexNaik dan indexTurun) yg berisi angka 0 (default)
5. looping untuk mengecek rute apa saja yg dilewati angkot tsb
6. setelah itu buat 2 kondisi dimana obj (naikDari dan Tujuan) adalah sama dengan rute yg dilooping
7. setelah itu mendeklarasi bahwa indexNaik dan indexTurun akan sama dengan loopingan obj
8. sekarang saatnya membuat object angkot baru yg mempunyai keyname "bayar" yg isinya indexTurun diminus indexNaik lalu dikalikan dengan 2000.

*/