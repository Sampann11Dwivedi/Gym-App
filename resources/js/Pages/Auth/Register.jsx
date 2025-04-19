import { useForm } from '@inertiajs/react';
import React from 'react';

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    password: '',
    password_confirmation: '',
    height: '',
    height_unit: 'cm',
    weight: '',
    weight_unit: 'kg',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/register');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover z-0"
  >
    <source src="fitness/register1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    <div className="min-h-screen flex items-center justify-center z-10 relative">
      <form onSubmit={handleSubmit} className=" p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
        />
        {errors.name && <div className="text-red-500 text-sm mb-2">{errors.name}</div>}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={data.password_confirmation}
          onChange={(e) => setData('password_confirmation', e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
        />
        {errors.password && <div className="text-red-500 text-sm mb-2">{errors.password}</div>}

        {/* Height */}
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            step="0.1"
            placeholder="Height"
            value={data.height}
            onChange={(e) => setData('height', e.target.value)}
            className="flex-1 p-2 rounded bg-gray-700 opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
          />
          <select
            value={data.height_unit}
            onChange={(e) => setData('height_unit', e.target.value)}
            className="p-2 rounded bg-gray-700 opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
          >
            <option value="cm">cm</option>
            <option value="ft">ft/in</option>
          </select>
        </div>

        {/* Weight */}
        <div className="flex gap-2 mb-6">
          <input
            type="number"
            step="0.1"
            placeholder="Weight"
            value={data.weight}
            onChange={(e) => setData('weight', e.target.value)}
            className="flex-1 p-2 rounded bg-gray-700 opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
          />
          <select
            value={data.weight_unit}
            onChange={(e) => setData('weight_unit', e.target.value)}
            className="p-2 rounded bg-gray-700 opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={processing} className="bg-green-700 opacity-25 hover:opacity-100 transition duration-300 ease-in-out w-full p-2 rounded">
          Register
        </button>
      </form>
    </div>
    </div>
  );
}
