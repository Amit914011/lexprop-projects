import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LawyerLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    const passwordRegex = /^(?=.[a-zA-Z])(?=.[0-9])(?=.[!@#$%^&])/;
    if (!passwordRegex.test(formData.password) || formData.password.length < 8) {
      tempErrors.password =
        "Password must be at least 8 characters long and include a symbol, a number, and a special character";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data Submitted: ", formData);
      // Perform login actions here (e.g., send data to backend)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
           Lawyar Login
        </h2>

        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2">Email</label> */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {/* {errors.email && (
            <p className="text-red-500 text-xs mt-2">{errors.email}</p>
          )} */}
        </div>

        <div className="mb-4 relative">
          {/* <label className="block text-gray-700 font-bold mb-2">Password</label> */}
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {/* {errors.password && (
            <p className="text-red-500 text-xs mt-2">{errors.password}</p>
          )} */}
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
          <Link to='/lawyerRegister'
            className="w-full bg-gray-500 text-center text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
            onClick={() => console.log("Redirect to register page")}
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LawyerLogin;