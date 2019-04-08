const express = require('express');
const mongo = require('../mgdb');
const Router = express.Router();


Router.get('/',async (req,res)=>{
    let {name}=req.query;
    console.log(
        name);

    // let ObjectId = require('mongodb').ObjectId;
        // let _id = JSON.stringify(id)
        // console.log(_id);
        var data=await mongo.delete('list',{name});
        // var data = await mongo.delete('list',{id: new ObjectId(id)});
        // console.log(data);
   

})
module.exports = Router;



