import React from "react";
import EventBlock from "../eventBlock";
import DayBlock from "../dayBlock";
import data from "../../Data";
import Banner from "../banner";
import ContentBlock from "../contentBlock"

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{height:"100%", width:"100%", position:"absolute", overflow:"hidden"}}>
        <img
          style={{
            overflow: "hidden",
            zIndex: "0",
            width:"100vw",
            height:"100%"
          }}
          src="img/bg_pattern.png"
        />
      </div>
      <Banner />
      {data.games.map((content, index) => {
        return <DayBlock {...content} key={index} />;
      })}
    </div>
  );
}

export default Home;
//box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
