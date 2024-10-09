import { useState } from "react";
import { Link } from "react-router-dom";

// TODO: hover state

export default function NavBar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div>
         <nav className="max-w-7xl mx-auto flex items-center justify-between gap-200 text-white xl:pt-10 px-300 py-150 md:p-0">
            <div className="w-full flex items-center justify-between gap-800">
               <img src="/assets/shared/logo.svg" alt="logo" />
               <div className="h-25 w-full bg-blue-300 border-blue-300 border hidden xl:block -mr-400"></div>
            </div>
            <NavLinks />
            <img
               src="/assets/shared/icon-hamburger.svg"
               className="md:hidden cursor-pointer"
               alt="menu-bar-icon"
               onClick={() => setIsOpen(true)}
            />
         </nav>
         {isOpen && <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
   );
}

function NavLinks() {
   return (
      <div className="pl-600 bg-white bg-opacity-10">
         <ul className="items-center justify-between gap-600 px-600 py-5 hidden md:flex">
            <li>
               <Link
                  to="/"
                  className="flex items-center justify-between gap-100"
               >
                  <span className="font-bold">00</span> HOME
               </Link>
            </li>
            <li>
               <Link
                  to="/destination"
                  className="flex items-center justify-between gap-100"
               >
                  <span className="font-bold">01</span> DESTINATION
               </Link>
            </li>
            <li>
               <Link
                  to="/crew"
                  className="flex items-center justify-between gap-100"
               >
                  <span className="font-bold">02</span> CREW
               </Link>
            </li>
            <li>
               <Link
                  to="/technology"
                  className="flex items-center justify-between gap-100"
               >
                  <span className="font-bold">03</span> TECHNOLOGY
               </Link>
            </li>
         </ul>
      </div>
   );
}

function NavMenu({
   isOpen,
   setIsOpen,
}: {
   isOpen: boolean;
   setIsOpen: (open: boolean) => void;
}) {
   return (
      <div
         className={`flex flex-col text-white absolute top-0 h-full right-0 w-[254px] pl-300 ${
            isOpen ? "animate-openmenu" : "animate-closemenu"
         }
               `}
      >
         <div className="flex items-center justify-end mb-600 bg-blue-900">
            <img
               src="/assets/shared/icon-close.svg"
               className="md:hidden px-300 py-300 cursor-pointer"
               alt="menu-bar-icon"
               onClick={() => setIsOpen(false)}
            />
         </div>
         <ul className="bg-blue-900 bg-opacity-70 flex flex-col gap-400 flex-1">
            <li className="flex items-center gap-150">
               <span className="font-extrabold">00</span>
               <Link to="/">HOME</Link>
            </li>
            <li className="flex items-center gap-150">
               <span className="font-extrabold">01</span>
               <Link to="/destination">DESTINATION</Link>
            </li>
            <li className="flex items-center gap-150">
               <span className="font-extrabold">02</span>
               <Link to="/crew">CREW</Link>
            </li>
            <li className="flex items-center gap-150">
               <span className="font-extrabold">03</span>
               <Link to="/technology">TECHNOLOGY</Link>
            </li>
         </ul>
      </div>
   );
}
