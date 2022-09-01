import React from "react";
import "./OtherCss.css";

function OurWorld() {
  return (
    <div>
      <div className="ourworldcontier" style={{ backgroundImage: "url(/img/baner2.jpg)" }}>
        <div className="allworldcontant">
          <h1>
            Our worldwide integration partners work with long time relationship
          </h1>
          <p>
            Since the dawn of time, we've put our customers first and that’s
            never going to change
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default OurWorld;
