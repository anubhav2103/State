import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <div className="container  ">
        <div className="mb-5">
          <center>
            <h1
              style={{
                fontFamily: "Sans-serif",
                display: "inline-block",
                backgroundColor:"#FFCA93",
              }}
            >
              <b>INDIA  COVID-19 DATA </b> 
            </h1>
          </center>
        </div>
      </div>
    );
  }
}