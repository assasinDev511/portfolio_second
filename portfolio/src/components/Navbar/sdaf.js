const JobHeader = ({ title, logoSrc, companyName }) => {
  return (
    <header className="flex items-center gap-4 p-4">
      <div className="flex-shrink-0">
        <img
          src={logoSrc}
          alt={`${companyName} logo`}
          className="h-12 w-auto object-contain"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-xl sm:text-2xl font-semibold text-cyan-600 leading-tight">
          {title}
        </h1>
        {companyName && (
          <p className="text-sm text-gray-500">{companyName}</p>
        )}
      </div>
    </header>
  );
};

export default JobHeader;