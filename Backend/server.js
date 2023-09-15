const express = require("express")
const collection = require("./mongodb")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
     res.send('Hello from Express!')
    },

app.use(cors({
    origin:['https://ecommerce-web-rqhz.onrender.com']
})));


//Login
app.post("/",async(req,res)=>{
    const{email}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

//Signup

app.post("/signup",async(req,res)=>{
    const{email,password,fullName,phone,country,selectedOptions}=req.body

    const data={
        email:email,
        password:password,
        fullName:fullName,
        phone:phone,
        country:country,
        selectedOptions:selectedOptions
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.get('/api/logout',function(req,res){

    res.clearCookie()
    req.session.destroy();
    res.sendStatus(200);
    }); 
app.listen(8000,()=>{
    console.log("port connected");
})
