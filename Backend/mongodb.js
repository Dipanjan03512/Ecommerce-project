const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://osamafarooqui786:Osama%40786786@cluster0.hmro6bx.mongodb.net/?authMechanism=DEFAULT")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    selectedOptions:{
        type: Array,
        required: true,
        trim: true
      },
    country:{
        type: Array,
        required: true,
        trim: true
    }
})

const collection = mongoose.model("User-Detail",newSchema)

module.exports=collection