import React from "react";
import { useLocation } from "react-router-dom";
import Foot from "../foot";
import ContentBlock from "../contentBlock"

function Game({ match }) {
    const Wrap = ({ children }) => <>{children}</>;
  const data = useLocation().state;
  console.log(data);
  return (
    <div className="row" style={{ minHeight: "100vh" , backgroundColor: "#162244"}}>
      <div style={{ position: "relative", overflow: "hidden", height: "40vh", backgroundColor: "#162244" }}>
        <img
          src={data.imgDir}
          style={{
            position: "absolute",
            width: "100%",
            transform: "translate(-50%, 0%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          {data.title}
        </h1>
      </div>
      <div style={{ backgroundColor: "#162244"}}>
              <ContentBlock {...{title:"test", content:(<Wrap>
                <p style={{fontSize:"30px", zIndex:"1", textAlign:"center"}}>
                    {data.gameRule}
                </p>
              </Wrap>)}}/>
      </div>
      <div
        className="container"
        style={{ backgroundColor: "#162244", position: "relative" }}
      >
        <div style={{ position: "absolute", bottom: "0", width: "100vw" }}>
          <Foot />
        </div>
      </div>
    </div>
  );
}

export default Game;
