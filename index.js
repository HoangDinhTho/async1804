const request = require('request')
const URL = 'https://chain.so/api/v2/get_address_balance/BTC/';


const uri = URL + '1NTxf1H9PoWCUWnKcdfLtFtgGWxRmWWq83';
request.get(uri,(error, res, body)=>{
    if(error) return console.log(error);
    console.log(body)
})

/**
 * 1NTxf1H9PoWCUWnKcdfLtFtgGWxRmWWq83
 * 19Li3BpAigvtv2Z9ce4B5WwjXixfwqkgVy
 * 18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX
 * 1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE
 * 1H4o9Mh7HyjPa46z4vtv7J8yzaK5RY4bXR
 */