const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please enter product name'],
        trim:true,
        maxLenght:[100,'Product name cannot exceed 100 charecters']
    },
    price:{
        type:Number,
        required:[true, 'Please enter product price'],
        maxLenght:[1500,'Product name cannot exceed 5 charecters'],
        default:0.0
    },    
    description:{
        type:String,
        required:[true, 'Please enter description'],
    },
})

module.exports=mongoose.model('Product',productSchema)