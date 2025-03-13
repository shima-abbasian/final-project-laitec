import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ShoppingList from "../shoppingList/ShoppingList";
import CartIcon from "./CartIcon";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/men", label: "Men" },
  { path: "/women", label: "Women" },
  { path: "/explore", label: "Explore All" },
];

function NavBar() {
  const [shoppingListVisible, setShoppingListVisible] = useState(false);

  const toggleShoppingList = useCallback(() => {
    setShoppingListVisible((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="flex flex-row justify-between items-center w-[90%] h-[60px] m-auto">
        <Link to="/" className="text-[18px] font-medium text-black hover:text-gray-600 transition-colors">
          Ace Store
        </Link>
        
        <ul className="flex flex-row gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="text-[18px] font-medium text-black hover:text-gray-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative">
          <CartIcon itemCount={0} onClick={toggleShoppingList} />
        </div>
      </nav>

      {shoppingListVisible && (
        <ShoppingList onClose={() => setShoppingListVisible(false)} />
      )}
    </>
  );
}

export default NavBar;



// import React, { useState } from "react";
// import ShoppingList from "../shoppingList/ShoppingList";

// function NavBar({ onCategoryChange }) {
//   const [shoppingListVisible, setShoppingListVisible] = useState(false);

//   const toggleShoppingList = () => {
//     setShoppingListVisible((prev) => !prev); 
//   };

//   return (
//     <>
//       <nav className="flex flex-row justify-between items-center w-[90%] h-[60px] m-auto">
//         <div>
//           <span className="text-[18px] font-medium text-black">Ace Store</span>
//         </div>
//         <div className="flex flex-row gap-8">
//           <ul className="text-[18px] font-medium text-black" onClick={() => onCategoryChange('')}>Explore All</ul>
//           <ul className="text-[18px] font-medium text-black" onClick={() => onCategoryChange("men's clothing")}>Men</ul>
//           <ul className="text-[18px] font-medium text-black" onClick={() => onCategoryChange("women's clothing")}>Women</ul>
//           <ul className="text-[18px] font-medium text-black" onClick={() => onCategoryChange("jewelery")}>Jewelry</ul>
//         </div>
//         <div className="relative">
//           <span onClick={toggleShoppingList}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="22"
//               height="22"
//               fill="currentColor"
//               viewBox="0 0 256 256"
//             >
//               <rect width="256" height="256" fill="none"></rect>
//               <path
//                 d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="16"
//               ></path>
//               <circle
//                 cx="80"
//                 cy="204"
//                 r="20"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="16"
//               ></circle>
//               <circle
//                 cx="184"
//                 cy="204"
//                 r="20"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="16"
//               ></circle>
//               <path
//                 d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="16"
//               ></path>
//             </svg>
//             <div className=" bg-black rounded-full absolute bottom-3 left-3 w-[14px] h-[14px] text-xs text-center m-auto text-white">0</div>
//           </span>
//         </div>
//       </nav>
//       {shoppingListVisible && (
//         <ShoppingList onClose={() => setShoppingListVisible(false)} />
//       )}
//     </>
//   );
// }

// export default NavBar;