import React, { useState } from "react";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker"; // Import date picker
import "react-datepicker/dist/react-datepicker.css"; // Import styles

export default function Home() {
  // State for each dropdown
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTour, setSelectedTour] = useState("");
  const [selectedTransport, setSelectedTransport] = useState("");
 
  // Time options
  const timeOptions = ["1:00 am", "2:00 am", "3:00 am", "4:00 am", "5:00 am"];
  const tourOptions = ["Amman", "Jerash", "Irbid", "Wadi Rum", "Aqaba", "Ma'an", "Ajloun", "Madaba"];
  const transportOptions = ["Bus", "Car", "On foot"];

  
  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h2 className="text-5xl font-bold mb-6">Explore the Wonders of Jordan</h2>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-lg flex space-x-4 text-black shadow-lg">
          {/* Date Picker */}
          <div className="relative">
            <label className="block text-gray-600 text-sm">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="p-2 border rounded w-40"
              placeholderText="Choose Date"
            />
          </div>

          {/* Time Picker */}
          <div className="relative">
            <label className="block text-gray-600 text-sm">Time</label>
            <select
              className="p-2 border rounded w-40"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Choose Time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>

          {/* Tour Selection */}
          <div className="relative">
            <label className="block text-gray-600 text-sm">Tour</label>
            <select
              className="p-2 border rounded w-40"
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
            >
              <option value="">Select Tour</option>
              {tourOptions.map((tour, index) => (
                <option key={index} value={tour}>{tour}</option>
              ))}
            </select>
          </div>

          {/* Transportation Selection */}
          <div className="relative">
            <label className="block text-gray-600 text-sm">Transportation</label>
            <select
              className="p-2 border rounded w-40"
              value={selectedTransport}
              onChange={(e) => setSelectedTransport(e.target.value)}
            >
              <option value="">Select Transportation</option>
              {transportOptions.map((transport, index) => (
                <option key={index} value={transport}>{transport}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <button className="p-2 bg-orange-500 rounded text-white">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}
