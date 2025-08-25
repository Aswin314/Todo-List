import React, { useState, useEffect } from 'react'
import { baseUrl } from '../../AxiosInstance'

const Home = () => {
    const [bookForm, setBookForm] = useState({
        BookName: "",
        BookTitle: "",
        Bookauthor: "",
        SellingPrice: "",
        publishedDate: ""
    });
    const [bookList, setBookList] = useState([]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setBookForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleGetBooks = async () => {
        try {
            const { data } = await baseUrl.get("/getallbooks");
            setBookList(data?.booklist || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetBooks();
    }, []);

    const handleSubmit = async () => {
        if (!bookForm.BookName || !bookForm.BookTitle || !bookForm.Bookauthor || !bookForm.SellingPrice || !bookForm.publishedDate) {
            return alert("All details are required");
        }
        try {
            await baseUrl.post("/addbook", bookForm);
            setBookForm({
                BookName: "",
                BookTitle: "",
                Bookauthor: "",
                SellingPrice: "",
                publishedDate: ""
            });
            handleGetBooks();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center mt-2 mr-4'>
                <h1 className='text-4xl font-bold mb-4'>Welcome to the Todo List App</h1>
                <p className='text-lg mb-2'>Manage your tasks efficiently</p>
            </div>
            <div className="w-full py-4 px-5 min-h-[calc(100vh-60px)]">
                <div className="w-full grid grid-cols-6 gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <label>Book Name</label>
                        <input
                            type="text"
                            name='BookName'
                            value={bookForm.BookName}
                            onChange={handleFormChange}
                            placeholder='Book Name'
                            className='w-full border border-gray-100 rounded-sm outline-2 outline-gray-500'
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label>Book Title</label>
                        <input
                            name='BookTitle'
                            value={bookForm.BookTitle}
                            onChange={handleFormChange}
                            type="text"
                            placeholder='Book Title'
                            className='w-full border border-gray-100 rounded-sm outline-2 outline-gray-500'
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label>Author Name</label>
                        <input
                            name='Bookauthor'
                            value={bookForm.Bookauthor}
                            onChange={handleFormChange}
                            type="text"
                            placeholder='Author Name'
                            className='w-full border border-gray-100 rounded-sm outline-2 outline-gray-500'
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label>Selling Price</label>
                        <input
                            name='SellingPrice'
                            value={bookForm.SellingPrice}
                            onChange={handleFormChange}
                            type="text"
                            placeholder='Selling Price'
                            className='w-full border border-gray-100 rounded-sm outline-2 outline-gray-500'
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label>Publication Date</label>
                        <input
                            name='publishedDate'
                            value={bookForm.publishedDate}
                            onChange={handleFormChange}
                            type="date"
                            placeholder='Publication Date'
                            className='w-full border border-gray-100 rounded-sm outline-2 outline-gray-500'
                        />
                    </div>
                    <div className='w-22 flex justify-end border rounded-lg h-10 mt-14 border-green-200'>
                        <button
                            className='p-2 bg-green-700 rounded-lg cursor-pointer text-white'
                            onClick={handleSubmit}
                        >
                            Add Book
                        </button>
                    </div>
                </div>
                <div className='w-full mt-10'>
                    <div className='w-full'>
                        <table className='min-w-full border border-gray-200'>
                            <thead>
                                <tr>
                                    <th className='border-b py-2 text-left'>Book Name</th>
                                    <th className='border-b py-2 text-left'>Book Title</th>
                                    <th className='border-b py-2 text-left'>Author Name</th>
                                    <th className='border-b py-2 text-left'>Selling Price</th>
                                    <th className='border-b py-2 text-left'>Publication Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookList.map((item, index) => (
                                    <tr key={index} className='hover:bg-gray-200'>
                                        <td className='px-6 py-3 whitespace-nowrap'>{item.BookName}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{item.BookTitle}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{item.Bookauthor}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{item.SellingPrice}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{item.publishedDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home
