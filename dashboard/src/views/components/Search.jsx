import React from "react";

const Search = ({ setParPage, searchValue, setSearchValue }) => {
  return (
    <div className="flex justify-between items-center ">
      <select
        onChange={(e) => setParPage(parseInt(e.target.value))}
        className="px-4 py-3 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-primary"
      >
        <option value="5">5</option>
        <option value="5">15</option>
        <option value="5">25</option>
      </select>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="px-4 py-3 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-primary"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
