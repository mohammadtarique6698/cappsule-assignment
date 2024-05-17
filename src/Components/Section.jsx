import React, { useState, useEffect } from "react";
import axios from "axios";
import SuggestionCard from "./SuggestionCard";

const url =
  "https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3";

const Section = () => {
  const [showData, setShowData] = useState([]);
  const [showMoreForms, setShowMoreForms] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setShowData(response.data.data.saltSuggestions);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      {!showData.length ? (
        <h1 className="text-center text-3xl font-bold text-black/50 my-48">
          Find medicines with amazing discount
        </h1>
      ) : (
        <div>
          {showData.map((suggestion, index) => (
            <SuggestionCard
              key={index}
              suggestion={suggestion}
              showMoreForms={showMoreForms}
              setShowMoreForms={setShowMoreForms}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const url =
//   "https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3";

// const Section = () => {
//   const [showData, setShowData] = useState([]);

//   const fetchData = async (url) => {
//     try {
//       const response = await axios.get(url);
//       const data = await response.data;
//       setShowData(data.data.saltSuggestions);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchData(url);
//   }, []);

//   return (
//     <div className="w-full h-full">
//       {!showData ? (
//         <h1 className="text-center text-3xl font-bold text-black/50 my-48 ">
//           Find medicines with amazing discount
//         </h1>
//       ) : (
//         <div>
//           {showData.map((suggestion, index) => (
//             <div
//               key={index}
//               className="w-full shadow-lg bg-white p-2 rounded-md mb-10 bg-gradient-to-r from from-white via-white to-blue-100"
//             >
//               <div className="grid grid-cols-12">
//                 <div className="col-span-6">
//                   <div className="flex flex-col gap-3">
//                     <div className="flex flex-row justify-start items-center gap-10">
//                       <h2 className="text-xl mb-2">Form:</h2>
//                       <div className="grid grid-cols-2 gap-2 mt-1">
//                         {suggestion.available_forms.map((form, index) => (
//                           <button
//                             key={index}
//                             className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                           >
//                             {form}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex flex-row justify-start items-center gap-10 mt-4">
//                       <p className="text-xl mb-2">Strength:</p>
//                       <div className="grid grid-cols-2 gap-2 mt-1">
//                         {suggestion.most_common.Strength.split("+").map(
//                           (str, index) => (
//                             <button
//                               key={index}
//                               className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                             >
//                               {str}
//                             </button>
//                           )
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex flex-row justify-start items-center gap-10 mt-4">
//                       <p className="text-xl mb-2">Packaging:</p>
//                       <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                         {suggestion.most_common.Packing.split(" ")[0] +
//                           " " +
//                           "strips"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-span-3"></div>
//                 <div className="col-span-3"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Section;
