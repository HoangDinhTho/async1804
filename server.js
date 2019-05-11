const express = require('express')

const app = express();
app.listen(3000)
app.get('/:pheptinh/:so_a/:so_b',(req,res)=>{
    const { pheptinh, so_a, so_b } = req.params
    
    if(isNaN(so_a) || isNaN(so_b))
        res.send({error: 'Invalid parameter(s)'})
    
    try {
        const test = new Pheptinh(pheptinh,so_a, so_b)
        res.send({
            pheptinh, so_a, so_b,
            result: test.getResult()
        })
    }
    catch (error) {
        res.send({error: error.message})
    }
})
class Pheptinh{
    constructor(pt, a, b){
        this.pt = pt;
        this.a = a;
        this.b = b;
    }
    get pheptinh(){
        if(this.pt=='cong') return '+';
        if(this.pt=='tru') return '-';
        if(this.pt=='nhan') return '*';
        if(this.pt=='chia' && this.b!=0) return '/';
        if(this.pt=='chiadu'&& this.b!=0) return '%';
        throw new Error('Math Error!');
    }
    getResult(){
        const bieuthuc = `${this.a} ${this.pheptinh} ${this.b}`;
        return eval(bieuthuc)
    }
}
