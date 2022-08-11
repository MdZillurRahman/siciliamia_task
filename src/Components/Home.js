import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "./Loading";

const Home = ({ itemsPerPage }) => {
  const [pageEntries, setPageEntries] = useState([]);
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const inputSearch = useRef(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    async function Data() {
      const fetchData = await fetch("https://shielded-sea-63434.herokuapp.com/entries");
      const res = await fetchData.json();
      const data = res.slice(itemOffset, endOffset);
      setPageCount(Math.ceil(res.length / itemsPerPage));
      setPageEntries(data);
      setEntries(res);
      setIsLoading(false);
    }
    Data();
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    setIsLoading(true);
    const newOffset = (event.selected * itemsPerPage) % entries.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const text = inputSearch.current.value;

    if (text !== "") {
      const search = entries.filter((entry) => entry.API.includes(text.trim()));
      setPageEntries([]);
      setEntry(search);
    } else {
      setEntries(entries);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="h-[100px] flex flex-col justify-center mt-20 mb-8">
        <div class="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
          <div class="overflow-hidden z-0 rounded-full relative p-3">
            <form
              action="form"
              class="relative flex z-50 bg-white rounded-full"
            >
              <input
                type="text"
                placeholder="enter your search here"
                ref={inputSearch}
                class="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                list="apiName"
              />
              <datalist id="apiName">
                {entries.map((entry) => (
                  <option key={entry._id} value={entry.API} />
                ))}
              </datalist>
              <button
                class="bg-blue-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                onClick={(e) => handleSearch(e)}
              >
                Search
              </button>
            </form>
            <div class="top-[-10px] left-[-10px] w-[2000px] h-[160px] rounded-full animate-glow1 delay-0 z-10 bg-pink-400 absolute"></div>

            <div class="top-[-2px] left-[-10px] w-[2000px] h-[160px] rounded-full animate-glow2 delay-100 z-20 bg-purple-400 absolute"></div>

            <div class="top-[-2px] left-[-10px] w-[2000px] h-[160px] rounded-full animate-glow3 delay-200 z-30 bg-yellow-400 absolute"></div>

            <div class="top-[-2px] left-[-10px] w-[2000px] h-[160px] rounded-full animate-glow4 delay-300 z-40 bg-blue-400 absolute"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <table className=" my-2 mx-4 rounded">
          <thead className="text-white text-xl bg-yellow-400 h-[50px]">
            <tr className="w-[600px]">
              <th>API</th>
              <th>Category</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {pageEntries?.map((entry) => (
              <tr className="w-[600px]">
                <td className="p-6">{entry.API}</td>
                <td className="p-6">{entry.Category}</td>
                <td className="p-6">{entry.Description}</td>
                <td className="p-6">
                  {" "}
                  <a href={`${entry.Link}`}>{entry.Link}</a>
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            {entry &&
              entry?.map((entry) => (
                <tr>
                  <td className="p-6">{entry.API}</td>
                  <td className="p-6">{entry.Category}</td>
                  <td className="p-6">{entry.Description}</td>
                  <td className="p-6">
                    <a href={`${entry.Link}`}>{entry.Link}</a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {entry === false && (
        <ReactPaginate
          className="flex justify-center gap-10 my-4 items-center"
          activeLinkClassName="bg-yellow-400 px-2 py-1"
          previousClassName="bg-blue-500 px-2 py-1 rounded text-white font-bold"
          nextClassName="bg-blue-500 px-2 py-1 rounded text-white font-bold"
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< Previous"
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  );
};

export default Home;
