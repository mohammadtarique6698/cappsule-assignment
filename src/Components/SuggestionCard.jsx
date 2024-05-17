import React, { useState, useEffect } from "react";
import FormSelector from "./FormSelector";
import StrengthSelector from "./StrengthSelector";
import PackagingSelector from "./PackagingSelector";
import PriceDisplay from "./PriceDisplay";

const SuggestionCard = ({ suggestion, showMoreForms, setShowMoreForms }) => {
  const [selectedForm, setSelectedForm] = useState(
    suggestion.available_forms[0]
  );
  const [selectedStrength, setSelectedStrength] = useState("");
  const [selectedPackaging, setSelectedPackaging] = useState("");
  const [displayedStrengths, setDisplayedStrengths] = useState([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  useEffect(() => {
    handleFormSelect(suggestion.salt, selectedForm);
  }, [suggestion, selectedForm]);

  const handleFormSelect = (salt, form) => {
    setSelectedForm(form);
    const strengths = suggestion.salt_forms_json[form]
      ? Object.keys(suggestion.salt_forms_json[form])
      : [];
    setSelectedStrength(strengths.length > 0 ? strengths[0] : "");
    setDisplayedStrengths(strengths);

    const defaultPackaging =
      suggestion.most_common.Packing.split(" ")[0] + " strips";
    setSelectedPackaging(defaultPackaging);
  };

  const handleStrengthSelect = (strength, idx) => {
    setSelectedStrength(strength);
    setActiveButtonIndex({ ...activeButtonIndex, strength: idx });
  };

  const handlePackagingSelect = (packaging, idx) => {
    setSelectedPackaging(packaging);
    setActiveButtonIndex({ ...activeButtonIndex, packaging: idx });
  };

  const toggleShowMoreForms = () => {
    setShowMoreForms(!showMoreForms);
  };

  return (
    <div className="w-full shadow-lg bg-white p-2 rounded-md mb-10 bg-gradient-to-r from from-white via-white to-blue-100">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7 w-full">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl mb-2">
              Name:{" "}
              <span className="font-semibold text-lg">{suggestion.salt}</span>
            </h2>
            <FormSelector
              forms={suggestion.available_forms}
              selectedForm={selectedForm}
              handleFormSelect={handleFormSelect}
              showMoreForms={showMoreForms}
              toggleShowMoreForms={toggleShowMoreForms}
            />
            <StrengthSelector
              strengths={displayedStrengths}
              selectedStrength={selectedStrength}
              handleStrengthSelect={handleStrengthSelect}
              activeButtonIndex={activeButtonIndex}
            />
            <PackagingSelector
              packaging={suggestion.most_common.Packing}
              selectedPackaging={selectedPackaging}
              handlePackagingSelect={handlePackagingSelect}
              activeButtonIndex={activeButtonIndex}
            />
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <div className="w-full text-center p-2 rounded-md mb-10 bg-transparent">
            <p className="text-lg font-semibold">
              {selectedForm} | {selectedStrength} | {selectedPackaging}
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <PriceDisplay
            suggestion={suggestion}
            selectedForm={selectedForm}
            selectedStrength={selectedStrength}
            selectedPackaging={selectedPackaging}
          />
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
