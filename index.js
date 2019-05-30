/**
 * ไฟล์นี้เป็นไฟล์หลัก สำหรับเริ่มต้นโครงการ ให้บริการที่พอร์ต 3000
 * ใช้การรับส่งข้อมูล แบบ Json และมี Path ของระบบ ตามไฟล์ const userController = require('./controllers/userController')
 * และดึงการเชื่อมต่อฐานข้อมูลมาจาก ไฟล์ const mongoose = require('./db');
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const api = require('./api/api');
const mongoose = require('./db');

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.options('*',cors());
app.use('/workshop',api);
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.listen(port,(err)=>{
    if(err){
        console.log('-----ERROR-----',err);
    }else{
        console.log('server is running on :',port);
    }
});