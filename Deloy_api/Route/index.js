
const express = require('express');
const Route = express.Router();
const conn = require('../DB/config')
const { GetAllPost, GetAllUser , GetAllProduct } = require('../Modal/index')
Route.get('/post',(req,res)=>{
   return res.send(GetAllPost());
 });
Route.get('/user',(req,res)=>{
    return res.send(GetAllUser())
})
Route.get('/product', (req,res)=>{
    conn.query('select * from products',(err,result)=>{
       return res.send(result);
    })
});
Route.post('/info',(req,res)=>{
    let ID = req.body.id;
    let NAME = req.body.name;
    let product = {};
    conn.query('select * from products', (err, result)=>{
         result.map((data,index)=>{
            if(data.MaDonHang == ID){
                product = data;
            }
        })
        console.log(product);
    }) ;
    
        
})
module.exports = {
    Route
}