import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center bg-gray-200 h-8' >
            <div className="w-[10%] h-full flex items-center">
                <h1 className='text-xl font-bold p-10 cursor-pointer'>Logo</h1>
            </div>
            <div className="w-[15%] h-[full]">
                <ul className='flex w-full h-full gap-6 list-none items-center font-medium cursor-pointer'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
