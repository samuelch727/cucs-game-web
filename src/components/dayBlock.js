import React from "react";
import EventBlock from "./eventBlock";

function dayBlock({ day, games, date }) {
  return (
    <div style={{ backgroundColor: "#162244" }}>
      <div className="container" >
        <div className="d-flex justify-content-center">
          <h1 style={{ fontSize: "50px", margin: "20px", color:"#DDA862" }}>Day {day}</h1>
        </div>
        <div className="row" style={{ display: "flex", flexDirection: "row" }}>
          {games.map((content, index) => {
            return (
              <div className="col-md" key={index} style={{}}>
                <EventBlock {...content} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default dayBlock;
