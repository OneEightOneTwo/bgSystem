const express = require('express');
const mongo = require('../mgdb');
const ObjectId = require("mongodb").ObjectId;
const token = require('../unit/token');
const Router = express.Router();


//参数接受和 GET 基本一样，不同的在于 GET 是 request.query 而 POST 的是 request.body

var bodyParser = require('body-parser');

// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）

const jsonParser = bodyParser.json();
Router.post('/', urlencodedParser, async (request, response) => {
    let { user, psw } = request.body;
    console.log({ user, psw })
  
    let res = await mongo.find("user", {user});
    console.log(res);
    // _res = res[1];
    console.log(res[0].user);//拿数据库格式的[{}]的单个数据出来；
    if(res.length>0){
          // 登录成功：发令牌
          let _token = token.create(user);
           aa={
            user:res[0].user,
            token:_token
           };
           response.send(aa);
    }else{
        response.send('0');
    }
   
});
  
module.exports = Router;