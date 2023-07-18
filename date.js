//DATE OBJECT

var time = new Date() //UTC saatine göre veriyor (timestamp)
var zaman = Date.now() // 1 Ocak 1970'den beri geçmiş ms 

var result = time.getTime() //ms cinsinden 
var ay = time.getMonth() //bulunduğun ayın indexi 0-11 


var sonuc = time.toLocaleDateString("tr-TR",{day: "numeric",month: "long",year: "numeric",hour:"numeric",minute:"numeric"})

console.log(time)
console.log(zaman)
console.log(ay) 

console.log(sonuc)



