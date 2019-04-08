const express = require('express');
const mongo = require('../mgdb');
const Router = express.Router();

Router.get('/',async (req,res)=>{
    let {page,limit} = req.query;
    console.log(page,limit);

    let rows = await mongo.find('list', {}, {_page: (page - 1) * limit,_qty: limit * 1});
    let rows2 = await mongo.find('list', {});
    // console.log("row"+rows);
    // console.log(rows2);
    res.send({
        code: 0,
        msg: "",
        count: rows2.length,
        data: rows
    });
})

module.exports = Router;
