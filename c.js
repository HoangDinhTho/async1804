const request = require('request')
const URL = 'http://localhost:3000/';

function cong(a, b){  // 10s + 100s
    const uri = `${URL}cong/${a}/${b}`;
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b) || !a || !b)
           return reject(new Error('Invalid'))
           request(uri,(error, response, body )=>{
            if(error) return reject(error)
            return resolve(JSON.parse(body).result)
        })
    })
}
// cong(4,2)
// .then(r =>r)
// .catch(e=>console.log(e.message))

function nhan(a,b){
    const uri = `${URL}nhan/${a}/${b}`;
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b) || !a || !b)
        return reject(new Error('Invalid'))
        request(uri,(error,res, body)=>{
            if(error) return reject(error)
            return resolve(JSON.parse(body).result)
        })
    });
} 
function chia(a,b){
    const uri = `${URL}chia/${a}/${b}`;
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b) || !a || !b)
        return reject(new Error('Invalid'))
        request(uri,(error,res, body)=>{
            if(error) return reject(error)
            return resolve(JSON.parse(body).result)
        })
    });
}

// (4+2)*5/2
// cong(4,2)
// .then(tong=>{
//     nhan(tong,5)
//     .then(tich=>{
//         chia(tich, 2)
//         .then(result=>console.log(result))
//         .catch(e=>console.log(e.message))
//     })
//     .catch(e=>console.log(e.message))
// }) 
// .catch(e=>console.log(e.message))

// cong(4,'x')
// .then(tong=>{
//     console.log(tong)
//     return 1;
// })
// .then(r=>console.log({'result':r}))
// .catch(e=>e.message)
// .then(r=>console.log(r))
// .catch(err=>console.log(err.message))

// function tinhDienTich(a,b,h){
//     return cong(a,b)
//     .then(tong=>nhan(tong, h))
//     .then(tich=>chia(tich, 2))
// }
// tinhDienTich(4,2,'x')
// .then(r=>console.log(r))
// .catch(err=>console.log(err))


async function tinhDienTich(a,b,h){
    const tong = await cong(a,b);
    const tich = await nhan(tong,h)
    const thuong = await chia(tich,2);
    return thuong;
}
// tinhDienTich(4,2,5)
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// (4+2)*5/2 = 6*5/2 = 30/2 = 15
// 2+3+5+6 = 5+5+6 = 10+6 = 16
// 2+3+5+6 = 5+11 = 16

Promise.all([cong(4,2), chia(5,2)])
.then(r=>nhan(r[0],r[1]))
.then(r=>console.log(r))
.catch(e=>console.log(e))