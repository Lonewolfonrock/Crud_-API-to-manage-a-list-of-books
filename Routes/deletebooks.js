const express = require('express');
const router = express.Router();
const books = require('../Model/model');

router.use(express.json());

router.delete("/books/:id", async (req, res) => {  // Delete book
    const id = req.params.id;
    try {
        const existingBook = books.findIndex(book => book.id === id);
        if (existingBook) {
            books.splice(existingBook, 1);
            res.status(200).json("Book deleted successfully."); 
        } else {
            res.status(400).send("Invalid book id");
        }
    } catch (error) {
        res.status(500).send(`Server error ${error}`);
    }
});

module.exports = router;
