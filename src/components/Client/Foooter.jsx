import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            At [Law Firm Name], we are dedicated to providing expert legal services with a personal touch. With decades of experience, we strive to achieve the best outcomes for our clients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Practice Areas</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li>📍 123 Main Street, City, State, 12345</li>
            <li>📞 (123) 456-7890</li>
            <li>📧 info@lawfirm.com</li>
          </ul>
          <div className="mt-6">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M24 4.56v14.91c0 2.51-2.04 4.55-4.55 4.55H4.55C2.04 24 0 21.96 0 19.45V4.55C0 2.04 2.04 0 4.55 0h14.91C21.96 0 24 2.04 24 4.55zM9.5 19.08h-3.2v-7.38h3.2v7.38zM8.06 10.18c-1.02 0-1.85-.83-1.85-1.85 0-1.02.83-1.85 1.85-1.85 1.02 0 1.85.83 1.85 1.85 0 1.02-.83 1.85-1.85 1.85zm11.22 8.9h-3.19v-3.97c0-.95-.02-2.17-1.33-2.17-1.34 0-1.54 1.04-1.54 2.11v4.03h-3.19v-7.38h3.07v1.01h.04c.43-.82 1.5-1.68 3.09-1.68 3.31 0 3.92 2.18 3.92 5.01v3.04z"/></svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.391-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.002.959-3.127 1.184-.896-.959-2.173-1.555-3.591-1.555-2.717 0-4.92 2.207-4.92 4.917 0 .39.044.765.128 1.125-4.087-.205-7.719-2.165-10.148-5.144-.423.724-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.099-.806-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.631 1.963 2.463 3.393 4.633 3.433-1.7 1.334-3.832 2.129-6.149 2.129-.399 0-.79-.023-1.175-.068 2.193 1.394 4.798 2.209 7.603 2.209 9.12 0 14.11-7.548 14.11-14.102 0-.214 0-.428-.015-.64.965-.695 1.8-1.562 2.46-2.549z"/></svg>
              </a>
              <a href="#" className="hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24"><path d="M12 2.04c-5.507 0-9.96 4.453-9.96 9.96 0 4.414 2.863 8.145 6.838 9.474-.094-.834-.178-2.118.037-3.03.198-.844 1.27-5.373 1.27-5.373s-.321-.642-.321-1.588c0-1.488.863-2.599 1.937-2.599.913 0 1.356.684 1.356 1.505 0 .916-.583 2.285-.883 3.553-.249 1.055.527 1.915 1.563 1.915 1.876 0 3.32-1.98 3.32-4.834 0-2.526-1.814-4.292-4.41-4.292-3.005 0-4.759 2.251-4.759 4.578 0 .913.351 1.894.79 2.427.088.106.1.198.073.306-.081.333-.268 1.054-.304 1.201-.047.195-.151.236-.351.144-1.306-.604-2.125-2.495-2.125-4.022 0-3.263 2.37-6.258 6.851-6.258 3.598 0 6.396 2.565 6.396 5.99 0 3.586-2.261 6.465-5.393 6.465-1.053 0-2.045-.548-2.381-1.192 0 0-.568 2.246-.704 2.79-.253.986-.748 1.974-1.197 2.743.853.26 1.753.4 2.696.4 5.508 0 9.961-4.453 9.961-9.96 0-5.506-4.452-9.96-9.961-9.96z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10">
        <p>&copy; {new Date().getFullYear()} [Law Firm Name]. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;