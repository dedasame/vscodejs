/*
Çoklu Yorum Satiri

! Kırmızı
? Mavi
TODO: Turuncu
*Açık Yeşil
*/

/*
   *VERI TIPLERI

   !Primitive (İlkel)
   Number: Sayilar                             var sayi = 5
   String: Yazi                                var yazi = "test"
   Boolean: True/False                         var test = false
   BigInt: (Numberdan büyük olan sayılar)      var sayi = 2n
   Symbol: Yazi (Uniqe)                        var yazi = Symbol("test2")
   Null: Boş (object)                          var test = null
   undefined: tanımlanmamış                    var test

   !Reference (Object) -

*/

/*
//*variable(degisken) identifier(tanımlayıcı)
var degisken1 = 1

//*declare tanımlamak
var test
//*assignment = bir degere atamak
test = 5
//*overwrite üstüne yazmak
test = 8

//*typeof degisken tipini verir
var degiskentipi = typeof test

//*AltGr + , (2)  String Toplama
var a = "Merhaba"
var b = "Dünya"
var c = `${a} ${b} test2 ${3+5} test3 `

//*Stringlerin belli bir karakterini alma
a = "TEST456789"
console.log(a[1])

*Belirli bir karakterinin indexini bulma
console.log(a.indexOf("T"))
console.log(a.indexOf("T", 5))
console.log(a.lastIndexOf("T"))
console.log(a.lastIndexOf("T",2))

a = "Merhaba Dünya"
console.log(a.startsWith("haba"))
console.log(a.startsWith("haba",3)) //3. indexten itibaren aramaya başlıyor
console.log(a.endsWith("Dünya"))
console.log(a.endsWith("Dü",10)) //n harfinde aramayi bitiriyor n dahil degil
//*İçerip içermeme kontrolü
console.log(a.includes("Dün"))

//*String ifadeyi parçalara bölme
a = "!Selam"
console.log(a.slice(1,3)) //başlangıç dahil son dahil değil
console.log(a.slice(1))
console.log(a.substring(5,1))//hemen hemen aynı

a = "ABcd"
//*büyük küçük harf duyarlılığı olmayan konularda kullanılabilir
console.log(a.toUpperCase()) //hepsi büyük
console.log(a.toLowerCase()) //hepsi küçük

a = "     qwe   "
//*String baş ve sondaki boşlukları silme
console.log(a.trim())

a = "test"
a = `${a[0].toUpperCase()}${a.slice(1)}`
console.log(a)
a.length // string uzunlugunu verir

? Sayilar
var a = 5.3123123
console.log(parseInt(a)) // Int tamsayiya cevirir String verir
console.log(a.toFixed(5)) //virgülsen sonra kaç basamak ve sonucu YUVARLAR sayi verir

*/

// a%b anın b ye bölümünden kalan

// a**b = a üssü b
// soldan sağa öncelikli
// console.log(5/2*2)

/*

//*String -> Integer
//*parseInt - parseFloat - Number
var a = "13.62"
var total = parseInt(a)
console.log(total)
total = parseFloat(a)
console.log(total)

var c = Number(a)
console.log(c)
//*NaN : Not a Number

*/
/*
? X -> String
var a = 15 //null / undefined
var total = String(a) // a.toString() methodu kullanilabilir. null ve undefined da kullanılmaz
console.log(total)

?console.log("5" ?? "4") //+ dışındaki hepsinde işlemleri gerçekleştriirken + da string ifade olarak alır
*/
/*
Operator == Değeri eşit mi?
Operator === Değeri ve tipi eşit mi?
Operator != Değeri eşit değil mi?
Operator !== Değeri ve tipi eşit değil mi?
&& ve
|| veya
condition = 1 - !condition = 0


//* IF-ELSE YAPISI
var age = 19
var condition = (age >=18 ) ? "Oyun başlatıldı" : "Yaşınız tutmuyor"
console.log(condition)

? SWITCH-CASE YAPISI
var input = 1

switch(input){
   case 1:
      console.log()
      break
   case 2:
      break
   default:
      break
}


//! Array (Dizi) Kavramı

var list = [3,"string",1]
console.log(list)

console.log(list[list.length-1])

list.push("4")
list.push(5)

list.length = 8
console.log(list)
!listeye eşitlememize gerek kalmadan siliyor
list.splice(4,3) //4. index ten başla 3 eleman sil
console.log(list)

list.slice(1,4) //değişkenin kendisini değiştirmez sadece aralığı alır
list = list.slice(1,4) //değiştirmek için  bu şeklinde eşitlememiz gerekir.


!elemanı değiştirme splice ile
list.splice(2,0,"test") //2. indexe eleman ekleyip kaydırır



//LİSTELERİN KOPYALANMASI
//! Objeleri birbirine eşitleyip değiştirdiğimizde ikiside değişiyor??
var list1 = [1,4]
var list2 = list1
list2.push(5)
console.log(list1)
console.log(list2)

//bu şekilde eşitlendiği vakit list1 etkilenmez
var list1 = [1,2]
var list2 = [].concat(list1) 
//? ya da 
var list2 = [...list1] //şeklinde boş listenin içine list 1 eklenmiş gibi yapılabilir



//String ifadeyi diziye aktarma
var test = "merhaba dünya nasılsın"
var list3 = test.split(" ") // boşlukları referans alarak bölecek
console.log(list3)

list3[1] = "DÜNYA"

console.log(list3.includes("dünya")) //liste bu ifadeyi içeriyor mu?
console.log(list3.indexOf("dünya")) //girilen ifadenin indexi? yoksa -1
console.log(list3.lastIndexOf("dünya")) //girilen ifadeden birden fazla varsa en sondaki elemanın indexi

//2 Diziyi birleştirme
//Concat ve Spread Syntax
var array1 = [1,2,3]
var array2 = [4,5,6]

//var x = array1.concat(array2) // array1 ilk yazar sonuna array2 ekler
//var x = [...array1,...array2] //... parantezleri kaldırıyor

//join listenin elemanlarını Stringe çevirme
//var x = array1.join(" ") //aralarına verdiğimiz stringleri yazarak elemanları String ifadeye çevirir

//reverse tersini alıyor
//list.reverse() //terse çeviriyor eşitlemeye gerek kalmadan

//pop 
array1.pop() //en son elemanı siler

//shit
array1.shift() //ilk elemanı siliyor

//unshift
array1.unshift("qweqwe") //başa eleman ekler


console.log(array1)

//*calistirmadan önce ctrl + s ile kayıt ediyoruz


//! DÖNGÜLER

//* for loop - for in - for of 

//*for loop

for(var i=0; i<5; i++){
   console.log(i)
}

//*for of - iterable(üzerine döndürülebilir)
//array - string 
var text = "Hello World"
for(var harf of text){
   console.log(harf)
}

*/


//*While Döngüsü

var i = 0
while (i < 5){
   console.log(i)
   i++
}










