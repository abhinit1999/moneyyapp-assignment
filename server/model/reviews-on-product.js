const mongoose=require("mongoose")
const review_On_Product= new mongoose.Schema({
    userId:{
        type:Number,
    },

 description:{
    type:String,
 },

 cDate:{
    type:Date,
 } ,

 uDate:{
    type:Date,
 }



})

const Review =  mongoose.model("Review",review_On_Product);

module.exports=Review;