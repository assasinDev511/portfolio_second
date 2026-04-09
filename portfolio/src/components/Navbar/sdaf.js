import React from 'react';

/**
 * JobHeader component displays a job title with company logo and name.
 * @param {string} title - The job title to display.
 * @param {string} logoSrc - The source URL of the company logo.
 * @param {string} companyName - The name of the company.
 */
const JobHeader = ({ title, logoSrc, companyName }) => {
  return (
    <header className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          src={logoSrc}
          alt={`${companyName} logo`}
          className="h-12 w-12 object-contain rounded-full border border-gray-200"
        />
      </div>

      <div className="flex flex-col min-w-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-cyan-600 leading-tight truncate">
          {title}
        </h1>
        {companyName && (
          <p className="text-sm text-gray-500 mt-1 truncate">{companyName}</p>
        )}
      </div>
    </header>
  );
};

export default JobHeader;