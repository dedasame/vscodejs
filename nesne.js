
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
console.log(user.name)
console.log(user[`name`])

console.log(user.address.street)

user.test()

delete user.age // delete user["age"]   -> parantezli halinin avantajı? : 
console.log(user)

