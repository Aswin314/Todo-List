import React from 'react'

const Home = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-2 mr-4'>
                <h1 className='text-4xl font-bold mb-4'>Welcome to the Todo List App</h1>
                <p className='text-lg mb-2'>Manage your tasks efficiently</p>
            </div>
            <div className="w-full py-4 px-5 min-h-[calc(100vh-60px)]">
                <div className="w-full grid grid-cols-6 gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="">Book Name</label><br />
                        <input type="text" placeholder='Book Name' className='w-full border border-gray-100 rounded-sm outline-2 outline-gray-500' />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="">Book Title</label><br />
                        <input type="text" placeholder='Book Title' className='w-full border border-gray-100  rounded-sm outline-2 outline-gray-500' />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="">Author Name</label><br />
                        <input type="text" placeholder='Author Name' className='w-full border border-gray-100  rounded-sm outline-2 outline-gray-500' />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="">Selling Price</label><br />
                        <input type="text" placeholder='Selling Price' className='w-full border border-gray-100 rounded-sm outline-2 outline-gray-500' />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="">Publication Date</label><br />
                        <input type="date" placeholder='Publication Date' className='w-full border border-gray-100  rounded-sm outline-2 outline-gray-500' />
                    </div>
                    <div className='w-22 flex justify-end border rounded-lg h-10 mt-14 border-green-200'>
                        <button className='p-2 bg-green-700 rounded-lg cursor-pointer text-white'>Add Book</button>
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
                                <tr className='hover:bg-gray-200'>
                                    <td className='px-6 py-3 whitespace-nowrap'>Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'>Book Title</td>
                                    <td className='px-6 py-3 whitespace-nowrap'>Author Name</td>
                                    <td className='px-6 py-3 whitespace-nowrap'>Selling Price</td>
                                    <td className='px-6 py-3 whitespace-nowrap'>Publication Date</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Home
