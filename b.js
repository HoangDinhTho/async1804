const request = require('request')
const URL = 'http://localhost:3000/';

function cong(a, b, fn){ // 1s
    if(isNaN(a) || isNaN(b) || !a || !b)
        return fn(new Error('Invalid parameter(s)'))
    const uri = `${URL}cong/${a}/${b}`;
    request(uri,(error, response, body )=>{
        if(error) return fn(error)
        return fn(null, JSON.parse(body).result)
    })
}
function nhan(a, b, fn){
    if(isNaN(a) || isNaN(b) || !a || !b)
        return fn(new Error('Invalid parameter(s)'))
    const uri = `${URL}nhan/${a}/${b}`;
    request(uri,(error, response, body )=>{
        if(error) return fn(error)
        return fn(null, JSON.parse(body).result)
    })
}
function chia(a, b, fn){
    if(isNaN(a) || isNaN(b) || !a || !b)
        return fn(new Error('Invalid parameter(s)'))
    const uri = `${URL}chia/${a}/${b}`;
    request(uri,(error, response, body )=>{
        if(error) return fn(error)
        return fn(null, JSON.parse(body).result)
    })
}

// (4+2)*5/2
cong(4,2,(error,tong)=>{
    if(error) return console.log(error.message)
    nhan(tong,5,(error,tich)=>{
        if(error) return console.log(error.message)
        chia(tich,2,(error, result)=>{
            if(error) return console.log(error.message)
            console.log(result)
        })
    })
})