import React, { useState } from 'react';

const Submitissue = () => {
  const [issues, setIssues] = useState([
    { id: 1, name: "Done 1" },
    { id: 2, name: "Done 2" },
    { id: 3, name: "Done 3" },
    { id: 4, name: "Done 4" },
    { id: 5, name: "Done 5" },
    { id: 6, name: "Done 6" },
    { id: 7, name: "Done 7" },
    { id: 8, name: "Done 8" },
   
  ]);

  const [newIssue, setNewIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newIssue.trim()) {
      setIssues([...issues, { id: issues.length + 1, name: newIssue }]);
      setNewIssue('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">All Submited Issue</h1>
      
      {/* Issue Submission Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded"
            placeholder="Enter new issue"
            value={newIssue}
            onChange={(e) => setNewIssue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Search Submit Issue
          </button>
        </div>
      </form>

      {/* Pending Issues Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Issue Name</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td className="py-2 px-4 border-b">{issue.name}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Submitissue;
