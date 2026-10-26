import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

      <div className="text-center mb-6">
        <div className="text-5xl mb-3">📍</div>
        <h1 className="text-3xl font-bold text-indigo-700">
          Attendance System
        </h1>
        <p className="text-gray-500 mt-2">
          Login to mark your attendance
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoggedIn(true);
        }}
        className="space-y-4"
      >
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Login
        </button>
      </form>

      {loggedIn && (
        <div className="mt-6 bg-indigo-50 rounded-xl p-4">
          <h2 className="text-xl font-bold text-indigo-700">
            Attendance Dashboard
          </h2>

          <p className="mt-3 text-gray-700">
            Date: {new Date().toLocaleDateString()}
          </p>

          <p className="mt-2 text-gray-700">
            Status: {status}
          </p>

          <p className="mt-2 text-sm break-words">
            Location: {location || "Not requested"}
          </p>

          <p className="mt-2 text-sm">
            Time: {time || "--"}
          </p>

          <button
            type="button"
            onClick={() => {
              if (status === "Present") return;

              navigator.geolocation.getCurrentPosition(
                (position) => {
                  setLocation(
                    '${position.coords.latitude}, ${position.coords.longitude}'
                  );
                  setTime(new Date().toLocaleTimeString());
                  setStatus("Present");
                },
                () => alert("Please allow location access and try again.")
              );
            }}
            className="w-full bg-green-600 text-white py-3 rounded-lg mt-4 hover:bg-green-700"
          >
            Mark Attendance & Get Location
          </button>
        </div>
      )}

    </div>
  </div>
</>
  )
}

export default App
