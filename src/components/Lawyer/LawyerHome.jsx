import React, { useState } from 'react';

const LawerHome = () => {
  const [pendingIssuesCount, setPendingIssuesCount] = useState(5); // Example count
  const [submittedIssuesCount, setSubmittedIssuesCount] = useState(3); // Example count

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pending Issues */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:bg-blue-100 transition duration-200"
            onClick={() => window.location.href = '/lawyer/pending'}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Pending Issues</h2>
            <p className="text-gray-600 text-lg">You have <span className="text-blue-600 font-bold">{pendingIssuesCount}</span> pending issues.</p>
          </div>
          {/* Submit Issues */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:bg-green-100 transition duration-200"
            onClick={() => window.location.href = '/lawyer/submitissue'}
          >
            <h2 className="text-2xl font-bold text-green-600 mb-4">Submit Issue</h2>
            <p className="text-gray-600 text-lg">You have submitted <span className="text-green-600 font-bold">{submittedIssuesCount}</span> issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawerHome;
