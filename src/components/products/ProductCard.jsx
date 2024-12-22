import React from 'react'

function ProductCard() {
    return (
        <>
            <div className="bg-white rounded-md shadow-sm m-3 flex flex-col">
                <div className='m-auto'>
                    <img className=' h-60' src="public/productImages/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                </div>
                <div className='px-2 py-4'>
                    <div>
                        <p className='text-[17px] font-bold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                        </p>
                        <span className='text-[17px]'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                        </span>
                    </div>

                    <div className='flex justify-between mt-6 items-center'>
                        <div className=''>
                            <button type='button' className='bg-black text-white p-2 text-sm rounded-md'>add to card</button>
                        </div>
                        <div className=''>
                            <span className='font-bold'>$ jfhjfhjd</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
