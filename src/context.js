import React, { useState, useRef, useEffect, useContext } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [search, setsearch] = useState('')
  const [issubmit, setissubmit] = useState(false)
  const handlechange = (e) => {
    setsearch(e.target.value);
    console.log(search);
  }
  const handlesubmit = () => {
    setissubmit(!issubmit);
  }
  return (
    <AppContext.Provider value={search, issubmit, handlechange, handlesubmit}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };