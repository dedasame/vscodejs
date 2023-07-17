function squared(n = 0){ //n karşılık herhangi bir değer gelmezse varsayılan değeri n = 0 olarak gösterebiliriz
    var square = n**2
    return square  
}

console.log(squared())

//fonksiyon tanımlama yöntemleri

var karesi = function(n){
    return n**2
}

console.log(karesi(3))

//fonksiyon tanımlama

//yalnızca 1 parametre alacaksa n parantez içine almaya gerek yok

var karesinial = (n) => {
    return n**2
}

console.log(karesinial(5))

