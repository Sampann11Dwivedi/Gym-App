import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'


export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    password: '',
  });

  console.log(errors);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  const register = (e) => {
    e.preventDefault();
    router.visit('/register')
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
        <source src="fitness/login.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className="min-h-screen flex items-center justify-center z-10 relative">
      <form onSubmit={handleSubmit} className=" p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700"
        />
        {errors.name && <div className="text-red-500 text-sm mb-2">{errors.name}</div>}

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700"
        />
        {errors.password && <div className="text-red-500 text-sm mb-2">{errors.password}</div>}

        <button type="submit" disabled={processing} className="bg-blue-600 hover:bg-blue-700 w-full p-2 rounded">
          Log In
        </button>
          <a href="/register" className="text-blue-400 hover:text-blue-600 mt-4 block text-center">
            <p>Don't have an account? Register</p>
          </a>
      </form>
    </div>
    </div>
  );
}
