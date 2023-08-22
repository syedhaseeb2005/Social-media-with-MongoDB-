import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

const app = express()
const port  = 5000


// let mongo = 'mongodb+srv://Syedhaseeb30:Syedhaseeb30@cluster0.tenct.mongodb.net/?retryWrites=true&w=majority'

dotenv.config()

let mongoo_Url = 'mongodb+srv://Syedhaseeb30:Syedhaseeb30@cluster0.w2xr5l7.mongodb.net/?retryWrites=true&w=majority'

const connectDB = ()=>{
    console.log('connect data');
    return mongoose.connect(mongoo_Url,{
        useNewUrlParser: true,
        UseUnifiedTopology: true,
    })
}
connectDB()


// middleware
// app.use(express.json())
// app.use(helmet())
// app.use(morgan('common'))

// app.get('/',(req,res)=>{
//     res.send('Welcome to home page')

// })



// const connectToMongo = async()=>{
//     await mongoose.connect(process.env.mongoo_Url)
//     console.log('connected');
// }
// connectToMongo()


// const connectToMongo = ()=>{
//     console.log('connect data');
//     return mongoose.connect(mongoo_Url,{
//         useNewUrlParser: true,
//         UseUnifiedTopology: true,
//     })
// }

// connectToMongo()


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}!`);
})