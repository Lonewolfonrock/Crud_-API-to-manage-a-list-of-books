# Crud_-API-to-manage-a-list-of-books
 Task 

## Description
Book Restful API built using Node.js and Express. This project provides a set of API endpoints to manage a collection of items.

## Table of Contents
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing API Endpoints](#api-endpoints)
- [ANY CHALLENGES](#summary-of-any-challenges)


## Installation
    Clone the repository (git clone https://github.com/Lonewolfonrock/Crud_-API-to-manage-a-list-of-books.git)
    Make sure you have NodeJs and express installed.


## Running the Project
To start the server, run: npm run serve
if some error occuer change the port in index.js 

## Testing the API EndPoints

You can test the API endpoints using tools like Postman

    Using Postman
    Open Postman.
    Create a new request.
    Set the request method (GET, POST, PUT, DELETE)

    
    Method (Get) For Retrieve the list of all books use: http://localhost:YourPort/books
                                                     eg: http://localhost:9000/books/

    Method (Get) For Retrieve the list of one books use: http://localhost:YourPort/books/BookId
                                                     eg: http://localhost:9000/books/2

    Method (Get) For Retrieve the list of books from selected author: http://localhost:9000/books/auther/AutherName
                                                     eg: http://localhost:9000/books/auther/Author 1

    Method (Get) Retrieve a list of books, sorted by the date they were added (earliest first) use: http://localhost:YourPort/books/date/min
                                                                                                eg: http://localhost:9000/books/date/min

    Method (Get) Retrieve a list of books, sorted by the date they were added (Latest) use: http://localhost:YourPort/books/date/max
                                                                                        eg: http://localhost:9000/books/date/max


    Method (Post) For Adding a book use:  http://localhost:YourPort/books/  
            Add required headers, body data, or query parameters like in body>raw section in postman
            {
                "title": "Book 3",
                "author": "Author 1",
                "year": 2025
            }

            !! Id is Auto Generated

    
    Method (Put) For Update an existing book by its ID:  http://localhost:9000/books/BookId


        Add required headers, body data, or query parameters like this in body>raw section in postman
            {
                "title": "Book 3",
                "author": "Author 1",
                "year": 2025
            }
            you can change content form body according



    Method (Delete) For Delete an existing book by its ID :  http://localhost:9000/books/BookID 
                                                       eg :  http://localhost:9000/books/3
    