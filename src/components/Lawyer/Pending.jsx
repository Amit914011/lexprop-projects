import React from 'react';

const Pending = () => {
  // Sample data for pending issues
  const issues = [
    { id: 1, name: "Issue 1" },
    { id: 2, name: "Issue 2" },
    { id: 3, name: "Issue 3" },
    {id:  4, name: "Issue 4"},
    {id:  5, name: "Issue 5"},
    {id:  6, name: "Issue 6"},
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Pending Issues</h1>
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

export default Pending;
