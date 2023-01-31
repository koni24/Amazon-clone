import React from "react";
import "./LeftSide.css";
function LeftSidePanel(props) {
  return (
    <div className="leftSize_main">
      <div className="leftSide_header">brand</div>
      <div className="leftSide_brandName">
        <label className="brandName">
          <input type="checkbox" value="Apple" />
          Apple
        </label>

        <label className="brandName">
          <input type="checkbox" value="Samsung" />
          Samsung
        </label>

        <label className="brandName">
          <input type="checkbox" value="MI" />
          Mi
        </label>
      </div>
    </div>
  );
}

export default LeftSidePanel;
