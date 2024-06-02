
const express = require('express');
const app=express() 

const postRouter = require('./Routes/postbooks'); 
const getRouter = require('./Routes/getbooks')    //router Instances
const deleteRouter = require('./Routes/deletebooks')


app.use((req,res,next)=>{   //loging Middleware 
    req.time=new Date(Date.now()).toString();

    res.on('finish',()=>{
        console.log('\n--------------------------')
        console.log(`Method ${req.method}`);
        console.log(`Status code ${req.hostname}`)
        console.log(`Path ${req.path}`)
        console.log(`Time ${req.time}`)
        console.log(`Status code ${res.statusCode}`)
    })

    next();
})


app.use('/',getRouter)
app.use('/',postRouter)  //mounting different routes
app.use("/",deleteRouter) 


app.listen(9000,()=>{   // creating server
    console.log("Server started on port 9000") 
})
