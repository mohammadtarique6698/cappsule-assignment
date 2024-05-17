import React from "react";

const PriceDisplay = ({
  suggestion,
  selectedForm,
  selectedStrength,
  selectedPackaging,
}) => {
  const prices =
    suggestion.salt_forms_json[selectedForm]?.[selectedStrength]?.[
      selectedPackaging
    ];
  if (prices) {
    const minPrice = Math.min(...prices.map((item) => item.selling_price));
    return <p>Minimum Price: {minPrice}</p>;
  }
  return <p>No stores selling this product near you</p>;
};

export default PriceDisplay;
