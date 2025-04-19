import React from 'react';
import { router } from '@inertiajs/react'


function Admin() {

  function submit() {
    console.log('Button clicked!');
    router.visit('/login')  
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Hero Section */}
         <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="fitness/fitness.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-center z-10 relative">
        <h1 className="text-5xl font-bold mb-4 animate-bounce ">
          Welcome to GymPro
        </h1>
        <p className="text-lg mb-6 font-bebas">
          Your ultimate fitness companion. Track your progress, book classes, and achieve your goals!
        </p>
        <button onClick = {submit}  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Get Started
        </button>
      </div>
    </div>
  );
}

export default Admin;