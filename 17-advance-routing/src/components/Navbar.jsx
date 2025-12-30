import React from 'react'

const Navbar = () => {
    return (
        <div className={'flex justify-between items-center py-4 px-8 bg-pink-500'}>
            <h2 className={'text-xl font-bold'}>Sheriyans</h2>
            <div className={'flex gap-8 '}>
                <a className={'text-lg font-medium'} href={'/'}>Home</a>
                <a className={'text-lg font-medium'} href={'/about'}>About</a>
                <a className={'text-lg font-medium'} href={'/product'}>Product</a>
            </div>
        </div>
    )
}
export default Navbar
