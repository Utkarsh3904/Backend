import express from 'express'
import cors from 'cors'

let app = express();
//cors is a thid party middleware, first this aprove client req then it goes to server
app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(express.json())  //this is the Midleware use to know the datatype
const port = 8000

let password = 'manu1234';

// custom middleware to chk whether the entering pass is same as manu1234
app.use((req,res,next)=>{
    if(req.body.pass != password){
        res.send("password does not match")
    }next()
})

app.get("/", (req,res)=>{
    res.json({name:"utkarsh",age:777})
}) 

app.post("/", (req,res)=> {
    console.log(req.body);   //to collect data that we sending it recieves on body
    res.send({success: true})
})

app.listen (port,()=>{
    console.log("server is started....@");
    
})


mongoose.connect(mongoURL) //inside async n try
