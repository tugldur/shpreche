const mongoose = require("mongoose");

const connectDataBase =  async ()=>{
  res = await mongoose.connect('mongodb+srv://tuguldur:20080918@cluster0.ilhpzp3.mongodb.net/')
if (res) console.log('db connected')
}
 

module.exports = connectDataBase
