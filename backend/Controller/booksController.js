import Book from "../Model/Book.js"

export const Getallbooks = async (req, res) => {
    const Allbooks = await Book.find({})
    res.json({ massage: "Allbooks Are got", Allbooks })
}
export const addbooks = async (req, res) => {
    const { BookName, BookTitle, Bookauthor, SellingPrice, publishedDate } = req.body
    if (!BookName || !BookTitle || !Bookauthor || !SellingPrice || !publishedDate) {
        res.json({ massage: "All details are required" })
    }
    const newbook = new Book({ BookName, BookTitle, Bookauthor, SellingPrice, publishedDate })
    await newbook.save()
    res.json({ massage: "book is saved", newbook })
}
export const updatebooks = async (req, res) => {
    const { id } = req.params
    const { BookName, BookTitle, Bookauthor, SellingPrice, publishedDate } = req.body
    if (!BookName || !BookTitle || !Bookauthor || !SellingPrice || !publishedDate) {
        res.json({ massage: "All details are required" })
    }
    const updatebook = await Book.findByIdAndUpdate(id, req.body, { new: true })
    await updatebook.save()
    res.json({ massage: "updatebook is saved", updatebook })
}
export const deletebook = async (req, res) => {
    const { id } = req.params
    const deletebook = await Book.findByIdAndDelete(id)
    res.json({ massage: "delete book", deletebook })
}