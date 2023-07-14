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

*/


//! Array (Dizi) Kavramı

var list = []
console.log(typeof list)


















// calistirmadan önce ctrl + s ile kayıt ediyoruz

