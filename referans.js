
//Primitive(String,Number) - Reference(Object) ---> depolanmaları farklı

//nesneler aynı yeri referans gösteriyor

var data1 = {
    name: "Ali",
    age: 10
}
var data2 = data1

data2.x = 5

console.log(data1)
console.log(data2)

//Referans yerine kopyalamak için:

//Spread Syntax 
var data3 = {...data1}
data3.age = 30
console.log(data3)

//Assign
data4 = Object.assign({},data1)
data4.age = 30
console.log(data4)


//referans gösterdikleri yeri karşılaştırıyor
console.log(data1==data2) //aynı yeri gösterdiği için true dönüyor
console.log(data1==data3)
console.log(data1==data4)
console.log(data3==data4)

//içindeki bilgileri karşılaştırırsak
console.log(JSON.stringify(data3)==JSON.stringify(data4)) //verileri string şekline alıp karşılaştırdık


var user1 = {
    name: "Ahmet",
    address: {
        street: "X Street",
        no: 5
    }
}

var user2 = {...user1}

user2.name = "Mehmet"
user2.address.street = "Y Street" //her ikisininde street verileri değişti

console.log(user1)
console.log(user2)

//Deep Copy : Nesnenin içindeki referanslar için
var user3 =  JSON.parse(JSON.stringify(user1)) //Stringe çevirdik sonra tekrar nesneye çevirdik
user3.address.street = "A Street"
console.log(user3)





