"use client";

import React, { createContext, useState } from "react";

const contextdata = createContext();

const itemdata = [
  { item: "laptop" },
  { item: "laptop" },
  { item: "laptop" },
  { item: "perfume" },
  { item: "perfume" },
  { item: "perfume" },
  { item: "watche" },
  { item: "watche" },
  { item: "watche" },
  { item: "shoose" },
  { item: "shoose" },
  { item: "shoose" },
  { item: "shirt" },
  { item: "shirt" },
  { item: "shirt" },
];

const Approvider = ({ children }) => {
  const [itemd, setitemD] = useState(itemdata);
  const apidata = {
    itemd,
  };
  return (
    <div>
      <contextdata.Provider value={apidata}>{children}</contextdata.Provider>
    </div>
  );
};

export { Approvider, contextdata };
