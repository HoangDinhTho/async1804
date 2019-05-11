const request = require('request')
const URL = 'http://localhost:3000/';

function cong(a, b){
    const uri = `${URL}cong/${a}/${b}`;
    request(uri,(error, response, body )=>{
        if(error) {
            
        }
        return 
    })
}