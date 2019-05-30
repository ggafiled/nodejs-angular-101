/***
 * ไฟล์นี้เป็นไฟล์ที่ใช้กำหนด Path ของ Service ที่เราต้องการใช้งาน โดยเชื่อมต่อกับ Mongoose Database 
 * และใช้ Model ตามรูปแบบโครงสร้าง Database ที่เราได้ออกแบบไว้ เนื่องจากตัวฐานข้อมูลจะเก็บในรูปแบบ Json 
 * เราจึงสร้างโครงสร้างและนำมาใช้เมท่อต้องการ เพิ่ม หรือ ค้นหา ข้อมูลต่างๆ 
 * หลังจากสร้างแล้ว เราต้อง นำเราต์ที่สร้างขึ้นมาไปใช้งาน ด้วยคำสั่ง module.exports = router;
 * และจะนำไปใช้ ในหน้า index.js ด้วยคำสั่ง app.use('/user',userController); ซี่ง '/user' หมายถึง Path เริ่มต้นของระบบ แล้วตามด้วย Path ที่อยู่ในไฟล์ userController
 */
const express = require('express');
var router = express.Router();
var { DataModel } = require('../models/data');
var util = require('util');

router.get('/', (req, res) => {
    DataModel.find((err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
});

router.post('/', (req, res) => {
    console.log(util.format('req val : %s , %d', req.body.name, req.body.age));
    var user = new DataModel({
        name: req.body.name,
        count: req.body.age,
        detail:req.body.detail,
        url:req.body.url
    });
    user.save((err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
});

router.put('/:id', (req, res) => {
    var id = req.params.id;
    console.log(util.format('req val update : %s', id));
    var user = ({
        name: req.body.name,
        count: req.body.count,
        detail:req.body.detail,
        url:req.body.url
    });
    DataModel.findByIdAndUpdate(id, {
        $set: user
    }, {
        new: true
    }, (err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    console.log(util.format('req val update : %s', id));
    DataModel.findByIdAndRemove(id, (err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    });
});

module.exports = router;