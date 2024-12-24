import React, { useState } from "react";

function ShoppingList({ onClose }) {
    return (
        <div className="w-1/4 bg-white shadow-2xl h-screen fixed right-0 top-0 z-50 p-4">
            <span onClick={onClose} className="text-black text-lg cursor-pointer absolute right-3 top-2">X</span>
            <h2 className="text-lg font-bold mb-4">Shopping List</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                eveniet labore hic, quod atque rerum illum rem maxime, aperiam at
                aliquid odit est dolores. Ut voluptatum non aut repellat neque.
            </p>
        </div>
    );
}

export default ShoppingList;
