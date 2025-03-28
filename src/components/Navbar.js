import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
{/* navbar*/}
return(

  <nav className="absolute top-0 left-0 w-full flex justify-between p-6 bg-gray-50/30 text-white shadow-md">
<h1 className="text-2xl font-bold">Guidak</h1>
<ul className="flex space-x-6">
  <li className="hover:underline cursor-pointer">Home</li>
  <li className="hover:underline cursor-pointer">Your Guide</li>
  <li className="hover:underline cursor-pointer">Trips</li>
  <li className="hover:underline cursor-pointer">Contact Us</li>
</ul>
<div className="flex space-x-4">
  <button className="px-4 py-2">Eng</button>
  <button className="px-4 py-2">Login</button>
  <button className="px-4 py-2 bg-orange-500 rounded">Sign Up</button>
</div>
</nav>

)

  /*
  return (
    
    <nav className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">Guidak</h1>
    </nav>
     

    <nav className="absolute top-0 left-0 w-full flex justify-between p-6 bg-white/80 text-black backdrop-blur-lg shadow-md">

      <h1 className="text-2xl font-bold">Guidak</h1>
      </nav>

  );
  */
}
