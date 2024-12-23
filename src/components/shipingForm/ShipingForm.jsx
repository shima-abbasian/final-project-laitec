import React from 'react'

function ShipingForm() {
    return (
        <div className='flex'>
            <div className='flex flex-col w-[70%] pl-16'>
                <p className='font-bold ml-3'>Contact Information</p>
                <div className='flex'>
                    <input className="rounded-lg border p-2 m-2 border-gray-400 w-[100%]" type="text" />
                </div>
                <p className='font-bold ml-3 mt-3'>Shipping Address</p>
                <div className='flex'>
                    <input className="rounded-lg border p-2 m-2 border-gray-400 w-[50%]" type="text" />
                    <input className="rounded-lg border p-2 m-2 border-gray-400 w-[50%]" type="text" />
                </div>
                <div className='flex'>
                    <input className="rounded-lg border p-2 m-2 border-gray-400 w-[100%]" type="text" />
                </div>
                <div className='flex'>
                    <input className="rounded-lg border p-2 m-2 border-gray-400 w-[100%]" type="text" />
                </div>
                <div className='text-end me-2 mt-4'>
                    <button type="button" className="bg-black text-white px-4 py-2 text-sm rounded-md w-[60%]">
                        checkout
                    </button>
                </div>

            </div>
            <div className='flex flex-col w-[50%] pr-16 '>
                <div class="order-summary_container bg-white p-2 m-8 rounded-sm h-64">
                    <h3 className='text-center font-bold'>Order Summary</h3>
                    <hr />
                    <div class="order-summary">
                        <div class="solo-bill flex justify-between">
                            <p>
                                <b className='text-sm'>1</b>
                                *
                                <b className='text-sm'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</b>
                            </p>
                            <span>$109.95</span>
                        </div>
                    </div>
                    <hr />
                    <div class="order-total solo-bill flex justify-between">
                        <p>Total</p>
                        <span>$188.24</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShipingForm
