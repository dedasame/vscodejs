//setTimeout

var time = Date.now()

var timeout = setTimeout(()=>{
    console.log(Date.now()-time)
},5000)  //en az 5000 ms = 5 sn sonra çalışıyor

clearTimeout(timeout) //beklemeyi direkt kaldırır


//setInterval

function func() {
    console.log(Date.now()-time)
    clearInterval(interval)
}

var interval = setInterval(func,3000) //3000ms de bir func çağırır





