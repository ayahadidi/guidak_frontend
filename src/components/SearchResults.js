import React from "react";

export default function SearchResults() {
  const tourData = [
    {
      title: "Petra",
      image: "/background.jpg",
      date: "Tuesday, 02 Oct 2022",
      time: "15:00 PM",
      groupSize: "15-30",
      transport: "Bus",
      duration: "15 hours 45 minutes",
      guide: "Included",
      language: "English, Italian",
      price: "34 JD",
    },
    {
      title: "Roman Theater",
      image: "/roman-theater.png",
      date: "Tuesday, 02 Oct 2022",
      time: "15:00 PM",
      groupSize: "5",
      transport: "None",
      duration: "15 hours 45 minutes",
      guide: "Included",
      language: "English, Italian",
      price: "15 JD",
    },
    {
      title: "Wadi Rum",
      image: "/wadi-rum.jpg",
      date: "Tuesday, 02 Oct 2022",
      time: "15:00 PM",
      groupSize: "Individual",
      transport: "Car",
      duration: "15 hours 45 minutes",
      guide: "Included",
      language: "English, Italian",
      price: "25 JD",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">Guidak</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About Us</li>
          <li className="hover:text-orange-500 cursor-pointer">Tour Packages</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
        </ul>
        <div className="flex space-x-4">
          <button className="text-gray-700">Eng</button>
          <button className="text-gray-700">Login</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Sign Up</button>
        </div>
      </nav>

      {/* Page Title */}
      <div className="px-16 py-8">
        <h2 className="text-3xl font-bold text-gray-800">Search Results</h2>
      </div>

      {/* Search Results Container */}
      <div className="px-16 space-y-6">
        {tourData.map((tour, index) => (
          <div key={index} className="flex bg-white p-6 rounded-lg shadow-md items-center">
            {/* Tour Image */}
            <img src={tour.image} alt={tour.title} className="w-48 h-36 rounded-lg object-cover" />

            {/* Tour Details */}
            <div className="ml-6 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">{tour.title}</h3>
              <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-lg mt-2">
                <p>📅 <strong>Date:</strong> {tour.date}</p>
                <p>⏰ <strong>Time:</strong> {tour.time}</p>
                <p>👥 <strong>Group:</strong> {tour.groupSize}</p>
                <p>🚌 <strong>Transport:</strong> {tour.transport}</p>
                <p>⏳ <strong>Duration:</strong> {tour.duration}</p>
                <p>🗣 <strong>Language:</strong> {tour.language}</p>
                <p>🧑‍🏫 <strong>Guide:</strong> {tour.guide}</p>
              </div>
            </div>

            {/* Booking Section */}
            <div className="text-right flex flex-col items-end">
              <p className="text-2xl font-bold text-orange-600">from {tour.price}</p>
              <button className="bg-orange-400 text-white px-5 py-2 rounded-lg mt-2 w-32">
                View Trip
              </button>
              <button className="bg-orange-600 text-white px-5 py-2 rounded-lg mt-2 w-32">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 bg-gray-900 text-white px-16 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Home</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Tour Packages</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contacts</h3>
            <p className="text-sm">📍 Piazza Napoleone, Lucca, Tuscany</p>
            <p className="text-sm">📞 +39 346 368 5708</p>
            <p className="text-sm">📧 italianlimo@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Social Media</h3>
            <div className="flex space-x-4 text-2xl">
              <span>🐦</span>
              <span>📘</span>
              <span>📸</span>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-6">Copyright © 2022. All rights reserved.</p>
      </footer>
    </div>
  );
}
