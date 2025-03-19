import dotenv from 'dotenv'
import connectDB from "./src/Config/DB.js"
import app from "./app.js"
import {enquireForm} from "./src/controllers/user.controller.js"
import {keepAlive} from "./src/controllers/user.controller.js"
dotenv.config()
// console.log(process.env.MONGODB_URI)

connectDB()
    .then(() => {
        app.get("/GET",(req,res)=>{
            return res
                .status(200)
                .json({key:"123"})
        })
        app.post("/submitform",enquireForm)
        app.get('/heartbeat/:sequenceId', (keepAlive))
        app.listen(process.env.PORT || 5000, ()=> {
            console.log(`✅ Server is running on port: ${process.env.PORT || 5000}`)
        })
    })
    .catch((err) => {
        console.log(`MongoDB connection failed: ${err}`)
    })
   