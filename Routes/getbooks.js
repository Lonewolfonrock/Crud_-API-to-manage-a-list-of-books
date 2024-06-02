const books = require('../Model/model');
const express = require('express');
const router = express.Router(); 

router.use(express.json());// using middleware



router.get("/books",async(req,res)=>{ // Get all book data

    try {
         res.status(200).json(books);
    } catch (error) {
         res.status(500).send(`Server error ${error}`);
    }
})

router.get("/books/:id",async(req,res)=>{ // search book according to id 

    try{
        const id=req.params.id;
        const search_Book=books.find(book =>book.id ===id);
        if(search_Book){
            res.status(200).json(search_Book);
        }
        else{
            res.status(400).json(`Book with id ${id} not found`);
        }
    }
    
    catch(error){
        res.status(500).send(`Server error ${error}`);
    }

})

router.get("/books/date/min",async(req,res)=>{ // sort book according to early date

    try {
        let sortedBooks  = books;
        sortedBooks .sort((a,b)=> a.year -b.year);
        res.status(200).json(sortedBooks);
    } catch (error) {
        res.status(500).send(`Server error ${error}`);
    }
})

router.get("/books/date/max",async(req,res)=>{ // sort book according to latest date

    try {
        let sortedBooks  = books;
        sortedBooks.sort((a,b)=> b.year -a.year);
        res.status(200).json(sortedBooks);
    } catch (error) {
        res.status(500).send(`Server error ${error}`);
    }
})

router.get("/books/auther/:authername",async(req,res)=>{ //show all auther publish books

    try {

        const auther=req.params.authername;
        const filterBook_A =books.filter(book => book.author ===auther);
        res.status(200).json(filterBook_A);
    } catch (error) {
        res.status(500).send(`Server error ${error}`);
    }
})



module.exports=router
