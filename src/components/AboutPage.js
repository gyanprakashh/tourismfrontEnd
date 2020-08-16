import React from "react";

export default function AboutPage() {
  return (
    <div className="container">
      <h1
        className="row mt-5 text-center"
        style={{
          color: "#3c2946",
          fontSize: "65px",
          fontWeight: "900",
          fontFamily: "'Josefin Sans', sans-serif",
          marginLeft: "25%",
          marginRight: "auto",
        }}
      >
        About the Travel Point
      </h1>
      <div className="row col-8">
          Travel Point is a Uttrakhand tourism information website.
      </div>
    </div>
  );
}
