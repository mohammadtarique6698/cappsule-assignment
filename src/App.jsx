import React from "react";

import Header from "./Components/Header";
import Section from "./Components/Section";

const App = () => {
  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-slate-100 overflow-y-auto">
        <Header />
      </div>
    </React.Fragment>
  );
};

export default App;
