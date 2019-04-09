const express = require('express');
const mongo = require('../mgdb');
const Router = express.Router();
Router.get('/',async (req,res)=>{
    console.log('req打印：'+req.query.city,req.query.num,req.query.name,req.query.phone,req.query.price,req.query.switch);
    
 
    if(req.query.city ==0){
        req.query.city ='手机';
    }else if(req.query.city==1){
        req.query.city = '笔记本'
    }else if(req.query.city==2){
        req.query.city = '平板'
    }else if(req.query.city==3){
        req.query.city = '配件'
    }else if(req.query.city==4){
        req.query.city = '其他'
    }
    if(req.query.switch=="on"){
        req.query.switch ='上架';
        console.log(req.query.switch);
    } else{
        req.query.switch ='下架';
        console.log(req.query.switch);
        }
    let name = req.query.name;
    let city = req.query.city;
    let num = req.query.num;
    let phone = req.query.phone;
    let price = req.query.price;
    let  sw=req.query.switch;
    let rows = await mongo.update('list',{name:name},{$set:{kind:city,yPrice:phone,xPrice:price,reserve:num,status:sw}});
    console.log(rows);
})
module.exports = Router;
