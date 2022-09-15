const mongoose=require("mongoose")
const new_Product= new mongoose.Schema({
    Name:{
        type:String,
    },

 Price:{
    type:Number,
 },

 cDate:{
    type:Date,
 } ,

 uDate:{
    type:Date,
 }



})

const Product =  mongoose.model("Product",new_Product);

module.exports=Product;