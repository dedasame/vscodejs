//object ->  key:value

var user = {
    name: "Eren",
    age: 20,
    address: {
        street:"X Street",
        no: 3
    },
    test(){
        console.log("Test")
    }

}

//properties erişim yolları
console.log(user.address.street)
console.log(user[`address`]["street"])

user.test()

var input = "age"
console.log(user[input]) // user.input -> undefined (input bulamıyor) !kapalı parantez kullandığı zaman age görüyor

delete user.age // delete user["age"] 
console.log(user)

console.log(Object.keys(user)) //key döndürür
console.log(Object.values(user)[2]) //value dizisinin indexiyle döndürür

console.log(Object.entries(user)) // key - value olarak veriyor

var veri = [[`name`,`Eren`,],[`age`,19]]
var nesne = Object.fromEntries(veri)  //diziyi -> nesneye çevirir
console.log(nesne)

var user_id ="21312312344"
var data = {name:"Yasin",age:29}

var users = {

    "12312312311": {name: "Ali", age:13},
    "12345678911": {name: "Veli", age:15},
    "49292929112": {name: "Ahmet",age:14},
    [user_id]: data
}

console.log(users)

var user = {
    name: "Eren",
    age: 20
    
}

//var street = user.address.street  //undefined bir değerin üstünden street almaya çalıştığımız için hata alırız
var street = (user.address?.street) ? user.address.street : "Adres Bulunamadı" //undefined olabileceklerden sonra ? konulur
console.log(street)

var street = (user?.["address"]?.["street"]) ? user["address"]["street"] : "Adres Bulunamadı"
console.log(street)

//2 nesneyi tek bir nesne şeklinde birleştirmek

var data1 = { name: "Ali", age:20} //aynı verilerin üstüne yazıyor
var data2 = { age: 19} 

var result = {...data1,...data2}

console.log(result)

//*Diğer birleştirme yöntemi

var result2 = Object.assign(data2,data1) //hangisinin üzerine tekrar yazılacağı ve ekleneceğine gösre sırası değişir
console.log(result2)

// mutable - immutable (değiştirilebilr - değiştirilemez) -  property'leri değiştirilemez
//string-number -> immutable
var a = "test" 
a.length = 8  //arrayler değiştirilebiliyordu mutable  
//genel olarak nesneler mutable (değiştirilebilir)

console.log(a.length) 

var data = {
    name: "Ali",
    age: 19
}

//Prevent Extensions : Yeni property eklemyi engelliyor
Object.preventExtensions(data)
Object.isExtensible(data) //genişletilebilir mi

//seal eklemeyi ve silmeyi engelliyor
Object.seal(data)
Object.isSealed(data) // engellenmiş mi

//ancak veri değiştirmeye izin veriyor

//freeze - ekleme,silme,değiştirme yapılamaz
Object.freeze(data)
Object.isFrozen(data) //dondurulmuş mu

console.log(Object.isExtensible(data))


