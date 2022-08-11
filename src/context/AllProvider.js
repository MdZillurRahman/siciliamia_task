import React, { createContext, useState } from "react";

export const AllContext = createContext();
const AllProvider = ({ children }) => {
  const [pageEntries, setPageEntries] = useState([]);
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const value = {
    pageEntries,
    setPageEntries,
    entries,
    setEntries,
    entry,
    setEntry,
    isLoading,
    setIsLoading,
    pageCount,
    setPageCount,
    itemOffset,
    setItemOffset,
    tableLoading,
    setTableLoading,
  };
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};

export default AllProvider;
