import express from 'express'
import { Getallbooks,addbooks, deletebook, updatebooks } from '../Controller/booksController.js'

const BookRoutes = express.Router()

BookRoutes.get('/getallbooks', Getallbooks)
BookRoutes.post('/addbook', addbooks)
BookRoutes.put('/:id', updatebooks)
BookRoutes.delete('/:id', deletebook)

export default BookRoutes