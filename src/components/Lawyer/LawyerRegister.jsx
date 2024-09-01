import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LawyerRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.name.trim() === "") {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Number must be 10 digits";
      isValid = false;
    }

    const passwordRegex = /^(?=.[a-zA-Z])(?=.[0-9])(?=.[!@#$%^&])/;
    if (!passwordRegex.test(formData.password) || formData.password.length < 8) {
      tempErrors.password =
        "Password must be at least 8 characters long and include a symbol, a number, and a special character";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted: ", formData);
      // Perform submit actions here (e.g., send data to backend)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
         Lawyar Register
        </h2>
        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2">Name</label> */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-start text-xs mt-2">{errors.name}</p>
          )}
        </div>

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
          {errors.email && (
            <p className="text-red-500 text-start text-xs mt-2">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          {/* <label className="block text-gray-700 font-bold mb-2">Number</label> */}
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.number ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your number"
          />
          {errors.number && (
            <p className="text-red-500 text-start text-xs mt-2">{errors.number}</p>
          )}
        </div>


        <div className="mb-4">
            {/* <label className="block text-gray-700">Practice Area</label> */}
            <select
              name="practiceArea"
              value={formData.practiceArea}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
             
              <option value="" disabled selected>Select your area</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Intellectual Property Law">Intellectual Property Law</option>
              <option value="Tax Law">Tax Law</option>
            </select>
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
          {errors.password && (
            <p className="text-red-500 text-start text-xs mt-2">{errors.password}</p>
          )}
        </div>

        <div className="mb-4 relative">
          {/* <label className="block text-gray-700 font-bold mb-2">
            Confirm Password
          </label> */}
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Confirm your password"
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-start text-xs mt-2">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
          <Link to='/lawyerLogin'
            
            className="w-full bg-blue-500 text-center text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </Link>
         
        </div>
      </form>
    </div>
  );
};

export default LawyerRegister;