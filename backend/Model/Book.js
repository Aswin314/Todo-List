import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    BookName: { type: String, required: true },
    BookTitle: { type: String, required: true },
    Bookauthor: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    genre: { type: String, required: true }
});

const Book = mongoose.model("Book", BookSchema);
export default Book;
