import Book from "../Model/Book.js"

// Get all books
export const Getallbooks = async (req, res) => {
    try {
        const allBooks = await Book.find({})
        res.status(200).json({ message: "All books retrieved", booklist: allBooks })
    } catch (error) {
        res.status(500).json({ message: "Error retrieving books", error: error.message })
    }
}

// Add a new book
export const addbooks = async (req, res) => {
    try {
        const { BookName, BookTitle, Bookauthor, SellingPrice, publishedDate } = req.body
        if (!BookName || !BookTitle || !Bookauthor || !SellingPrice || !publishedDate) {
            return res.status(400).json({ message: "All details are required" })
        }
        const newBook = new Book({ BookName, BookTitle, Bookauthor, SellingPrice, publishedDate })
        await newBook.save()
        res.status(201).json({ message: "Book saved", book: newBook })
    } catch (error) {
        res.status(500).json({ message: "Error saving book", error: error.message })
    }
}

// Update a book
export const updatebooks = async (req, res) => {
    try {
        const { id } = req.params
        const { BookName, BookTitle, Bookauthor, SellingPrice, publishedDate } = req.body
        if (!BookName || !BookTitle || !Bookauthor || !SellingPrice || !publishedDate) {
            return res.status(400).json({ message: "All details are required" })
        }
        const updatedBook = await Book.findByIdAndUpdate(id, { BookName, BookTitle, Bookauthor, SellingPrice, publishedDate }, { new: true })
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" })
        }
        res.status(200).json({ message: "Book updated", book: updatedBook })
    } catch (error) {
        res.status(500).json({ message: "Error updating book", error: error.message })
    }
}

// Delete a book
export const deletebook = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" })
        }
        res.status(200).json({ message: "Book deleted", book: deletedBook })
    } catch (error) {
        res.status(500).json({ message: "Error deleting book", error: error.message })
    }
}