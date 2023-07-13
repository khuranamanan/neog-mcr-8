/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { appData } from "../data/data";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data] = useState(appData);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
