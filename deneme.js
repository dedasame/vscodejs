// 7 ve 9 a tam bölünen ilk 5 sayı

var liste = []
var num = 1
var kontrol = true
while(kontrol){

    if(num%7==0&&num%9==0){
        liste.push(num)

    }
    num++
    if(liste.length==5) kontrol = false
}

console.log(liste)

