import React from "react";

function ContentBlock({title, content}) {
  return (
    <div style={{ backgroundColor: "#162244", zIndex:"1" }}>
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1 style={{ fontSize: "50px", color: "#DDA862", fontFamily:"'ZCOOL QingKe HuangYou', cursive" }}>
            {title}
          </h1>
        </div>
        <div className="d-flex justify-content-center" style={{zIndex:"2", color: "#DDA862"}}>
            {content}
        </div>
      </div>
    </div>
  );
}

export default ContentBlock;
