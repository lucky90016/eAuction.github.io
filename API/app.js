import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app=express();

//import api routers
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import subCategoreyRouter from './routes/subcategory.router.js';
import productRouter from './routes/Product.router.js'
import bidRouter from './routes/bid.router.js'



// configuration to accept cross site request  
app.use(cors()); 
// // test Route 
// app.get("/",(req,res,next)=>{
//     console.log("its working")
//     res.send("its working");
// })

//to extract body data from request (POST , PUT , DELETE , PATCH)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// configuration to accept fill data  
app.use(fileUpload()); 

//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subCategoreyRouter);
app.use("/product",productRouter);  
app.use("/bid",bidRouter);  

app.listen(3001);
console.log("server invoked at link http://localhost:3001");
