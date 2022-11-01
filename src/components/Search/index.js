import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {


  let searchBtn = (e) => {
    console.log('searching...')
    e.preventDefault();
  };

  return (
    <form className="flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="shadow-md h-10 appearance-none border border-slate-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
      <button
        onClick={searchBtn}
        className="bg-blue-500 h-10 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </form>
  );
};

export { Search };
