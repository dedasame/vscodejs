
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

/*

//properties erişim yolları
console.log(user.name)
console.log(user[`name`])

console.log(user.address.street)

user.test()

var input = "age"
console.log(user[input]) // user.input -> undefined (input bulamıyor) !kapalı parantez kullandığı zaman age görüyor

delete user.age // delete user["age"] 
console.log(user)

console.log(Object.keys(user)) //key döndürür
console.log(Object.values(user)[2]) //value dizisinin indexiyle döndürür

*/





