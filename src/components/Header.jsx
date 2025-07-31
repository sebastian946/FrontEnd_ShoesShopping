import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between p-5 border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="pl-10 flex-1">
        <img
          className="h-auto w-auto"
          src="/logoMainShoe.png"
          alt="ShoeStore Logo"
        />
      </div>

      <div className="flex-1 flex justify-end pr-10">
        <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-black font-bold hover:bg-gray-100 transition-colors">
          <img src="/bagIcon.png" alt="Cart" className="h-auto w-auto" />
          <span>View Cart</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
