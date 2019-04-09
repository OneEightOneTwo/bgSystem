const express = require('express');
const mongo = require('../mgdb');
const Router = express.Router();
const ObjectId = require("mongodb").ObjectId;
Router.get('/', async (req, res) => {
    let {_id} = req.query;
    console.log(_id);
    let _name = await mongo.find("list", {_id:ObjectId(_id)});
    console.log(_name);
    res.send(_name);
})

module.exports = Router;