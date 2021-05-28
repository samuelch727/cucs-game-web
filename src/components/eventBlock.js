import React, { useState, useEffect } from "react";

function EventBlock({title, imgDir}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div className="d-flex justify-content-center" style={{zIndex:"1"}}>
      <div style={{ position: "relative",}}>
        <img
          src= {imgDir}
          style={{
            border:"3px solid #DDA862",
            borderRadius: "10px",
            width: "100%",
            // boxShadow: "rgba(50, 50, 50, 0.6) 0px 0px 20px",
          }}
          onMouseEnter={() => {
            setIsMouseOver(true);
          }}
        />
        {isMouseOver && (
          <div
            onMouseLeave={() => {
              setIsMouseOver(false);
            }}
            style={{
              position: "absolute",
              background: "rgba(63,47,25,0.82)",
              height: "100%",
              width: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h2 style={{ color: "white", textAlign:"center" }}>{title}</h2>
              <div
                className="row"
                style={{
                  display: "flex",
                }}
              >
                <button type="button" className="btn btn-outline-light col-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventBlock;
