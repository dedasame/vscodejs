
function callback(x){
    if(x == true) console.log("ÇİFT")
    else console.log("TEK")

}

function ciftmi(x , callback){
    if (x % 2 == 0) callback(true)
    else callback(false)
}

ciftmi(5,callback)
