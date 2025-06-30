import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = () => {
    if (username && role) {
      onLogin({ username, role });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;