import React, { useState } from "react";
import { SingleCard } from "./SingleCard";
import { Checkbox, colors } from "@mui/material";
import { Checker } from "./Checker";
import { YearCard } from "./YearCard";
import DropDown from "./DropDown";
import { Months } from "./Months";
import { type } from "@testing-library/user-event/dist/type";
import { useEffect } from "react";
export const Cards = () => {
  const [monthValue1, setMonthvalue1] = useState([]);
  const [monthValue2, setMonthvalue2] = useState([]);
  const [monthValue3, setMonthvalue3] = useState([]);
  const setMonth1 = (eventval) => {
    setMonthvalue1(eventval);
  };
  const setMonth2 = (eventval) => {
    setMonthvalue2(eventval);
  };
  const setMonth3 = (eventval) => {
    setMonthvalue3(eventval);
  };

  const months = ["Jan - April", "May - August", "Sept - December"];
  const [vis1, changevis1] = useState("hidden");
  const [vis2, changevis2] = useState("hidden");
  const [vis3, changevis3] = useState("hidden");
  const [flag, changeflag] = useState([false, false, false]);
  var Id = 0;
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  useEffect(() => {
    console.log(first);
  });

  const handleCheking = (id) => {
    console.log("id : " + id);
    console.log(typeof id);

    Id = id;
    console.log("Id = " + Id);
  };
  return (
    <>
      <div
        className="main_note"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Checker emptyMonthArr = { setMonthvalue1} show={changevis1} changer={setFirst} year="2021" />
        <Checker emptyMonthArr = { setMonthvalue2} show={changevis2} changer={setSecond} year="2022" />
        <Checker emptyMonthArr = { setMonthvalue3} show={changevis3} changer={setThird} year="2023" />
      </div>
      <div
        style={{
          width: "80vw",

          margin: "10px auto auto auto ",
          // border : '2px solid green'
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
        }}
      >
        {/* <YearCard duration = 'Jan - April' />
       <YearCard duration = 'May - August' />
       <YearCard duration = 'Sept - December' /> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin :'-12px auto',
            width: "80vw",
            height: "10vh",
           
          }}
        >
          <div style={{ flex: "2", visibility: `${vis1}` }}>
            <DropDown passFun={setMonth1} sx={{}} duration={months} />
          </div>
          <div style={{ flex: "2", visibility: `${vis2}` }}>
            <DropDown passFun={setMonth2} duration={months} />
          </div>
          <div style={{ flex: "2", visibility: `${vis3}` }}>
            <DropDown passFun={setMonth3} duration={months} />
          </div>
        </div>

        {/* { }
     { second &&     <DropDown sx = {{
      position : "absolute"
     }} duration = {months}/> }
     { third   && <DropDown  sx = {{
      position : "absolute"
     }} duration = {months}/>} */}
      </div>
      <div
        style={{
          width: "80vw",
          height: "40vh",
          margin: "-10px auto auto auto ",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80vw",
          }}
        >
          {
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "2",
                visibility: `${vis1}`,
              }}
            >
              {monthValue1.map((curr) => {
                return <Months month={curr} />;
              })}
            </div>
          }
          {
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "2",
                visibility: `${vis2}`,
              }}
            >
              {monthValue2.map((curr) => {
                return <Months month={curr} />;
              })}
            </div>
          }
          {
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "2",
                visibility: `${vis3}`,
              }}
            >
              {monthValue3.map((curr) => {
                return <Months month={curr} />;
              })}
            </div>
          }
          {/* <Months   monthsarr ={ monthValue1 }/>
          
        </div>
        <div style={ {

        }}>
        <Months  monthsarr ={monthValue2}/>

        </div>
         <div style={{

         }}>
         <Months monthsarr ={monthValue3 }/> */}
        </div>
      </div>
    </>
  );
};
