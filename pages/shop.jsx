import React from 'react'
import NavBar from '../src/components/navBar/NavBar'
import Products from '../src/components/products/Products'
import Sidebar from '../src/components/sidebar/Sidebar'

function Shop() {
    return (
        <>
            <NavBar />
            <div className='flex w-100'>
                    <Sidebar className='w-[20%]'/>
                    <Products className='w-[80%]'/>



            </div>
        </>
    )
}

export default Shop
