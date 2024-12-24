import React, { useState } from "react";
import { Link } from "react-router-dom";

function ShoppingList({ onClose }) {
    return (
        <div className="w-1/4 bg-white shadow-2xl h-screen fixed right-0 top-0 z-50 flex flex-col">
            <div className="bg-gray-200 p-10">
                <span
                    onClick={onClose}
                    className="text-black text-lg cursor-pointer absolute right-3 top-2"
                >
                    X
                </span>
                <div className="flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <path
                            d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></path>
                        <circle
                            cx="80"
                            cy="204"
                            r="20"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></circle>
                        <circle
                            cx="184"
                            cy="204"
                            r="20"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></circle>
                        <path
                            d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></path>
                    </svg>
                </div>
                <h2 className="text-sm text-center font-bold mt-3">Your Shopping Carts</h2>
            </div>

            <div className="flex-1 p-4 overflow-y-auto text-center">
                <p>
                Your cart is empty
                </p>
            </div>

            <div className="bg-gray-200 p-3">
                <div className="flex justify-between font-bold mb-10">
                    <span>Subtotal</span>
                    <span>$100</span>
                </div>
                <div className="flex text-center m-auto">
                    <Link to={"/checkout"} className="w-full">
                    <button 
                        type="button"
                        className="m-auto bg-black text-white px-3 py-5 text-sm rounded-md font-bold w-full"
                    >
                        Go To Checkout
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default ShoppingList;
