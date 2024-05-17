import React from "react";

const PackagingSelector = ({
  packaging,
  selectedPackaging,
  handlePackagingSelect,
  activeButtonIndex,
}) => (
  <div className="grid grid-cols-12 mt-4">
    <div className="col-span-3">
      <div className="flex flex-row gap-5">
        <p className="text-xl mb-2">Packaging:</p>
        <button
          className={`mx-2 ${
            selectedPackaging === packaging
              ? "py-2 px-2 text-black font-bold bg-gradient-to-r from-white to-blue-100 border-2 border-blue-500 rounded-xl"
              : "text-black font-bold py-2 px-2 rounded-md mb-1 w-auto border-2 border-dashed border-black"
          }`}
          onClick={() => handlePackagingSelect(packaging + " strips", 0)}
        >
          {packaging}
        </button>
      </div>
    </div>
  </div>
);

export default PackagingSelector;
