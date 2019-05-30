/**
 * ไฟล์สำหรับเชื่อมต่อฐานข้อมูล MongooseDB 
 */
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/workshop';

mongoose.connect(url,(err)=>{
    if (err){
        console.log("-----ERROR-----");
    }else{
        console.log("Database created!");
    }
});

module.exports = mongoose;