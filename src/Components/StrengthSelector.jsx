import React from "react";

const StrengthSelector = ({
  strengths,
  selectedStrength,
  handleStrengthSelect,
  activeButtonIndex,
}) => (
  <div className="grid grid-cols-1 mt-4">
    <div className="col-span-1">
      <div className="flex flex-row justify-start items-start gap-8">
        <p className="text-xl mb-2">Strength:</p>
        <div>
          {strengths.map((strength, idx) => (
            <button
              key={idx}
              className={`mx-2 ${
                activeButtonIndex?.strength === idx
                  ? "py-2 px-2 text-black font-bold bg-gradient-to-r from-white to-blue-100 border-2 border-blue-500 rounded-xl"
                  : "text-black font-bold py-2 px-2 rounded-md mb-1 w-auto border-2 border-dashed border-black"
              }`}
              onClick={() => handleStrengthSelect(strength, idx)}
            >
              {strength}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default StrengthSelector;
