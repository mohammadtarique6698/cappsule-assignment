import React from "react";

const FormSelector = ({
  forms,
  selectedForm,
  handleFormSelect,
  showMoreForms,
  toggleShowMoreForms,
}) => (
  <div className="flex flex-row justify-start items-center gap-16">
    <h2 className="text-xl mb-2">Form:</h2>
    <div className="grid grid-cols-2 gap-4 mt-1">
      {forms.slice(0, showMoreForms ? forms.length : 2).map((form, idx) => (
        <div key={idx} className="w-full">
          <button
            className={`${
              selectedForm === form ? "bg-blue-500 text-white" : "text-black"
            } font-bold py-2 px-4 rounded border-2 border-dashed border-black`}
            onClick={() => handleFormSelect(form)}
          >
            {form}
          </button>
        </div>
      ))}
    </div>
    {forms.length > 2 && (
      <button
        className="ml-4 text-blue-500 hover:underline"
        onClick={toggleShowMoreForms}
      >
        {showMoreForms ? "Hide" : "More"}
      </button>
    )}
  </div>
);

export default FormSelector;
