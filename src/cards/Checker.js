import React from "react";
import { Checkbox } from "@mui/material";

export const Checker = (props) => {
  const handleChanger = () => {
    props.changer((prev) => {
        if(prev === true){
                props.emptyMonthArr([]);
               
              }
      return !prev;
     
    });
    props.show((prev) => {
      if (prev === "hidden") {
        return "visible";
      } else return "hidden";
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <h5
          style={{
            margin: "auto auto auto 10px",
          }}
        >
          {props.year}
        </h5>
        <Checkbox onClick={handleChanger} />
      </div>
    </>
  );
};
