// for in döngüsü

var nesne = {
    "a": 1,
    "b": 2,
    "c": 3
}

for (var key of Object.keys(nesne)){
    console.log(key)
}
//for in
for (var key in nesne){
    //if(key == "b") delete nesne["c"] //silindiğini görürdük
    //if(key == "b") nesne["c"] = 4 //değiştirmeyi görürdük
    if(key == "b") nesne["d"] = 4 //eklendiğini görmüyoruz
    console.log(key, nesne[key])
}

