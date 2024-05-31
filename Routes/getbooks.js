const books = require('../Model/model');
const express = require('express')
const router = express.Router() 

router.use(express.json());// using middleware



router.get("/books",async(req,res)=>{ // Geting book data

    try {
         res.status(200).json(books);
    } catch (error) {
         res.status(500).send(`Server error ${error}`);
    }
})

router.get("/books/:id",async(req,res)=>{

    try{
        const id=req.params.id
        const search_Book=books.find(book =>book.id ===id)
        if(search_Book){
            res.status(200).json(search_Book)
        }
        else{
            res.status(400).json(`Book with id ${id} not found`)

        }
        
    }
    catch(error){
        res.status(500).send(`Server error ${error}`);
    }

})

module.exports=router
