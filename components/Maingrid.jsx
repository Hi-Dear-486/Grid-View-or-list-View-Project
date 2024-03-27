"use client";
import React, { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import { useContext } from "react";

import { contextdata } from "../contextapi";

const Maingrid = () => {
  const [togle, settogle] = useState(true);
  const { itemd } = useContext(contextdata);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-8">
        Grid View or list View Project
      </h1>
      <div className="main mt-16 grid grid-cols-[0.1fr_1fr] gap-2.5">
        <div className="category w-full border h-96">Category Filter</div>
        <div className="gridviewlist border shadow-[rgba(0,0,0,0.35)_0px_5px_15px]">
          <button onClick={() => settogle(!togle)}>
            {togle ? <MdGridView /> : <CiBoxList />}
          </button>
          <div
            className="container grid   gap-2 p-2"
            style={{
              gridTemplateColumns: togle
                ? "repeat(auto-fill, minmax(250px, 1fr))"
                : "repeat(1, minmax(250px, 1fr))",
            }}
          >
            {itemd.map((items, i) => {
              return (
                <div
                  className="item item1"
                  style={{ width: togle ? "15.625rem" : "100%" }}
                  key={i}
                >
                  {items.item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maingrid;
