import React from "react";
import "./App.css";
import StyleGuide from "./views/StyleGuide/StyleGuide";

import ShadowBox from "./components/ShadowBox/ShadowBox";
const App = () => {
  return (
    <div className="container">
      <ShadowBox sx={{width:"90%", mt:2, display:"flex", justifyContent:"center"}}>
        <StyleGuide />
      </ShadowBox>
    </div>
  );
};

export default App;
