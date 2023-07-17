/*
//* arguments

function test(x){
    console.log(arguments[1])
}

test(...[1,2,3,4])

function fonksiyon(...x){
    console.log(x[1])
}

fonksiyon(1,2,3,4)


//* recursive functions (yinelemeli fonksiyonlar)

function recursive(x){
    console.log(x)
    if(x>0) recursive(x-1)
}

recursive(10)

//* callback functions (asenkron programlama yapmak amacıyla kullanılıyormuş artık değil)
function square(n=0){return n**2}
function deneme(callback){
    console.log("test")
    var result = callback(2)
    console.log(result)
}

deneme(square)

*/

//* Nested functions (İç İçe Fonksiyonlar)


