const express = require('express')
const router = express.Router()
const books = require('../Model/model');

router.use(express.json());



router.post("/books/", async (req, res) => { // adding books
    const {title, author, year } = req.body;
    
    
    // Check for missing properties
    if (!title || !author || !year) {
        return res.status(422).send("Missing property");
    }

     let nextID = 1;
     const lastbook = books[books.length - 1];
     nextID = parseInt(lastbook.id) + 1;
    
    
    
    // Generate book data
    const bookData = { id: `${nextID}`, title, author, year };

    // Check for existing book
    const existingBook = books.find(book => book.title === title);

    try {
        if (!existingBook) {
            books.push(bookData);
            return res.status(200).send("Book added successfully");
        } else {
            return res.status(409).send("Book already exists");
        }
    } catch (error) {
        return res.status(500).send(`Server error: ${error}`);
    }
});


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