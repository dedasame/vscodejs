//Dizilerle ilgili işlemler

//!map : her elemana tek tek gidiyor işlemleri yapıyor ve o elemana eşitliyor


var liste = ["Ali","Eren","Mehmet"]
liste = liste.map((e,i,liste) => `${i+1}. ${e}`).join("\n")
console.log(liste)


//!find : aradığımız kriterlere göre bulduğu ilk elemani döndürür 
//!find yerine findexIndex : aynı şekilde çalışır ama index döndürür


var array = ["Denizhan","Ali Eren","Ali Mehmet"]
var result = array.find((e,i) => e.startsWith("Ali"))
console.log(result)

result = array.find((e,i) => e.length < 9)
console.log(result)


//!filter : findla aynı mantık ancak bulduğu bütün sonuçları döndürüyor


var nesne = {
    "1": 15,
    "2": 7,
    "8": 24,
    "9": 31
}

var ages = Object.entries(nesne).filter(e => e[1]>18)
nesne = Object.fromEntries(ages)
console.log(nesne)


//!sort : düzenleme büyükten küçüğe uzundan kısaya gibi


var liste = [3,1,8,4,2,7]

liste = liste.sort() //küçükten büyüğe sıralar (string ifadeleri de alfabetik sıralar)
console.log(liste)

liste = liste.sort((a,b) => a - b) //küçükten büyüğe sıralar
                                   //a-b = negatif ise a b'nin önüne geçer
                                   //a-b = pozitif ise b a'nın önüne geçer

liste = liste.sort((a,b) => b - a) //büyükten küçüğe sıralar   

var obj = {
    "a": 5, //"1": 5
    "b": 3, //"2": 3
    "c": 7, //"3": 7
    "d": 6  //"4": 6
}

var result = Object.entries(obj).sort((a,b) => a[1] - b[1])
//key sayı olduğu zaman otomatik sıralama yapıyor keylere göre
obj = Object.fromEntries(result)
console.log(obj)

var array = ["qweqwe","pfpdpdfpodf","çekoslovakyalılaştıramadıklarımızdanmısınız","qweqq","rororororor"]
array = array.sort((a,b) => a.length - b.length)
console.log(array)



//! reduce()


var list =  [1,3,6,9,11]   //en son dönecek değer response : previousValue 0 -> başlangıç değeri
var result = list.reduce((response,currentVal) => response + currentVal , 0)
console.log(result)


var data = ["a","a","b","c","d","b","c","a","d"]
var result = data.reduce((response,current) => {

    //response[current] = (current in response) ? response[current] + 1 : 1


    if(!(current in response)) response[current] = 1
    else response[current]++

    return response //bir sonraki adıma geçmesi için döndürmemiz lazım
}, {})

console.log(result)


var liste = [6,5,4,1,2,3,1,5,2,2,2,3,4,2,3,5,6,2]

var result = liste.reduce((response,current)=>{
    if(!response.includes(current)) response.push(current)
    return response
},[])

console.log(result.sort())



//! Array.some() ve Array.every() metotları

var liste = [5,8,10,14,20,3]
var result = liste.some(e => e>18) //verilen koşulu sağlayan EN AZ 1 eleman var ise true döndürür
console.log(result)

var result = liste.every(e => e>0) //verilen koşulu BÜTÜN elemanlar sağlıyorsa true döndürür
console.log(result)



