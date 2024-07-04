import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"


// web config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

// db coonection

connectDB();


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port, () =>{
    console.log(`Server Started on  http://localhost:${port}`)
})

//mongodb+srv://nhimalayas:atlasRishu70@cluster0.rszzqpp.mongodb.net/?

//mongodb+srv://nhimalayas:atlasRishu70@cluster0.rszzqpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0