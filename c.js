const request = require('request')
const URL = 'http://localhost:3000/';

function cong(a, b){
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
cong(4,2)
.then(r =>r)
.catch(e=>console.log(e.message))