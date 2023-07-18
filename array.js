

//Dizilerle ilgili işlemler

//map : her elemana tek tek gidiyor işlemleri yapıyor ve o elemana eşitliyor

var liste = ["Ali","Eren","Mehmet"]
liste = liste.map((e,i,liste) => `${i+1}. ${e}`).join("\n")
console.log(liste)

//find : aradığımız kriterlere göre bulduğu ilk elemani döndürür
var array = ["Denizhan","Ali Eren","Ali Mehmet"]
var result = array.find((e,i) => e.startsWith("Ali"))
console.log(result)

result = array.find((e,i) => e.length < 9)
console.log(result)






