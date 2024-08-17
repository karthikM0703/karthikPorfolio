import React from "react";

const PdfModal = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl  text-gray-900 font-bold mb-4 text-center">Download Resume</h2>
      <p className="mb-6 text-center text-gray-600">Click the button below to download the Resume.</p>
      <div className="flex justify-center gap-4">
        <button 
          onClick={onDownload} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Download CV
        </button>
        <button 
          onClick={onClose} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  );
};

export default PdfModal;
