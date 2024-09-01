import React, { useState } from 'react';

const LawyerSolution = () => {
  const [issue, setIssue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if description is at least 1000 words
    const wordCount = description.trim().split(/\s+/).length;
    if (wordCount < 1000) {
      setErrorMessage('Description must be at least 1000 words.');
      return;
    }

    setErrorMessage('');

    // Handle form submission logic here
    console.log({ issue, title, description, file });

    // Reset form
    setIssue('');
    setTitle('');
    setDescription('');
    setFile(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Solution Issue</h2>
        
        <div className="mb-4">
          <label htmlFor="issue" className="block text-gray-700 font-medium mb-2">Select Issue</label>
          <select 
            id="issue" 
            value={issue} 
            onChange={(e) => setIssue(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select an issue</option>
            <option value="issue1">Issue 1</option>
            <option value="issue2">Issue 2</option>
            <option value="issue3">Issue 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter title" 
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description (Minimum 1000 words)</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-md h-40 resize-none"
            placeholder="Enter description" 
            required
          ></textarea>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="fileUpload" className="block text-gray-700 font-medium mb-2">Upload File</label>
          <input 
            type="file" 
            id="fileUpload" 
            onChange={handleFileChange} 
            className="w-full p-2 border border-gray-300 rounded-md"
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LawyerSolution;