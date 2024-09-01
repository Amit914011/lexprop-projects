import React from "react";

const Contactus = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@example.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +1 234 567 890
              </p>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;