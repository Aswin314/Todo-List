import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    BookName: { type: String, required: true },
    BookTitle: { type: String, required: true },
    Bookauthor: { type: String, required: true },
    SellingPrice: { type: Number, required: true },
    publishedDate: { type: String, required: true },
}, { timestamps: true });

const Book = mongoose.model("Book", BookSchema);
export default Book;
