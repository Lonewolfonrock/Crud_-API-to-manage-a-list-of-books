const express = require('express')
const router = express.Router()
const books = require('../Model/model');

router.use(express.json());


let nextID=3;

router.post("/books/",async(req,res)=>{ // adding books 


    const { id, title, author, year } = req.body;
    const bookData = {id:nextID++,title, author, year};
    

    if(!title || !author || !year){
            res.status(422).send("Missing property");
    }

    const existingBook  = books.find(book => book.id === id|| book.title === title)

    try {

        if(!existingBook){


            books.push(bookData)
             res.status(200).send("Book added successfully");
        }
        else{
             res.status(409).send("reduanted data");
        }
    } catch (error) {
         res.status(500).send(`Server error ${error}`);
    }

})



router.put("/books/:id",async(req,res)=>{ // updating books
    const id = req.params.id;
    const {title, author, year } = req.body;

    try{
        const existingBook=books.find(book =>book.id ===id)


        if (existingBook) {
            
            existingBook.title=title
            existingBook.author=author
            existingBook.year=year

            res.status(200).json({existingBook}); 
        } 
        else {
            res.status(400).send("invalid book id");

        }     
    }
    catch (error) {
        res.status(500).send(`Server error ${error}`);
   }
})


module.exports=router