/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { appData } from "../data/data";
import { dataReducer, initialState } from "../reducer/dataReducer";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const [data] = useState(appData);
  return (
    <DataContext.Provider value={{ data, state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
