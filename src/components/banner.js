import React, { useState, useEffect } from "react";

function Banner() {
  return (
    <div className="" style={{ height: "100vh"}}>
      
      
      <div className="row" style={{ height: "100vh" }}>
      <div
        className="d-flex"
        style={{ marginLeft: "20px", paddingTop: "10px", zIndex:"1" }}
      >
        <h3>LOGO_PLACEHOLDER</h3>
      </div>
        <div className="d-flex justify-content-center align-items-end">
          {/* <img
            src="img/2021.PNG"
            style={{ maxHeight: "15vh", maxWidth: "90vw", zIndex:"-1" }}
          /> */}
          <h1 style={{fontFamily:"'ZCOOL QingKe HuangYou', cursive", fontSize:"70px"}}>2021</h1>
        </div>
        <div className="d-flex justify-content-center">
          {/* <img
            src="img/comp.PNG"
            style={{ maxHeight: "30vh", maxWidth: "90vw", zIndex:"-1" }}
          /> */}
          <h1 style={{fontFamily:"'ZCOOL QingKe HuangYou', cursive", fontSize:"140px"}}>計算盃</h1>
        </div>
        <div
          className="d-flex justify-content-center align-items-end"
          style={{ paddingBottom: "10px" }}
        >
          <img src="img/arrow_down.gif" style={{ height: "15vh", color:"black" }} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
