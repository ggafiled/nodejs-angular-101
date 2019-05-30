/**
 * เป็นไฟล์สำหรับออกแบบ Model ที่จะใช้ เพิ่ม ค้นหา ข้อมูลในฐานข้อมูล โดยใช้คำสั่ง mongoose.model();
 * โยฐานข้อมูลที่ใช้ มีแอตทริบิว 2 ตัว คือ name (ใช้เก็บชื่อ) และ age (ใช้เก็บอายุ)
 */
const mongoose = require('mongoose');

var DataModel = mongoose.model('Car',{
    name:{type:String,require:true},
    count:{type:Number,require:true},
    detail:{type:String,require:true},
    url:{type:String,require:false}
},'allParking');

module.exports = { DataModel };