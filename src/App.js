import React from "react";
import Title from "./Title";
import Tabs from "./Tabs";
function App() {
  return (
    <>
      <Title />
      <Tabs />
      <div className="main__button">
        <button className="primary__btn">more info</button>
      </div>
    </>
  );
}

export default App;
