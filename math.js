//*MATH OBJECT
//yalnızca number tipli sayılarla çalışıyor

//*Rastgele sayı oluşturma
var result = Math.floor(Math.random()*100) //0-99 arasında aşağı yuvarladık
if(result < 50 ) //%50 ihtimalle 
var sonuc = Math.ceil() //Yukarı yuvarlar
//54.5 -> 55
//54.5 -> 54 
var sayi = Math.round() //Matematikteki yuvarlama
var pi = Math.PI // pi sayısını verir
var x = Math.abs() //mutlak değer
var y = Math.sqrt() //karekökünü alır
var z = Math.cbrt() //küpkökünü alır
var k = Math.sign() //pozitif ise 1 negatif ise -1 döndürüyor

var l = Math.max(1,3,-5,2,-11,7,4) // maksimum sayiyi verir
var m = Math.min(1,3,-5,2,-11,7,4) // minimum sayiyi verir

//liste vericeksek: 
var liste = [1,3,-5,2,-11,7,4]
var n = Math.min(...liste)

console.log(n)