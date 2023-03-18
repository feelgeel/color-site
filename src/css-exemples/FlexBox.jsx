import React from "react";
import "./flexbox.css";

export default function FlexBox() {
  return (
    <div className="flexbox">
      <h2>flex container</h2>
        <div className="flex-container">
          <div className="flex-item flex-item-1">
            <h3>one</h3>
          </div>

          <div className="flex-item flex-item-2">
            <h3>two</h3>
          </div>

          <div className="flex-item flex-item-3">
            <h3>three</h3>
          </div>

          <div className="flex-item flex-item-4">
            <h3>four</h3>
          </div>
        </div>
      
    </div>
  );
}
