import React from "react";
import Svgicon from "./Svgicon";
function Info({ data }) {
  const [value, setValue] = React.useState(0);
  const { company, title, dates, duties } = data[value];
  return (
    <>
      <div className="toggle__section">
        {data.map((btn, index) => {
          return (
            <button
              onClick={() => {
                setValue(index);
              }}
              key={index}
              className={`btn ${index === value && "active-btn"}`}
            >
              {btn.company}
            </button>
          );
        })}
      </div>
      <div className="info">
        <h2 className="info__heading">{title}</h2>
        <span className="tag">{company}</span>
        <p className="dates">{dates}</p>
        {duties.map((btn, index) => {
          return (
            <div key={index} className="items">
              <Svgicon />
              <p className="list__items">{btn}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Info;
