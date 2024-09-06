import React, { useState } from "react";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sellers = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <div className=" px-2 lg:px-7 pt-5">
      <div className="w-full bg-[#283046] p-4 rounded-md ">
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
            className="px-4 py-3 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-primary"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className=" relative overflow-x-auto ">
          <table className="w-full text-sm text-left text-primary ">
            <thead className="text-sm text-primary uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  No
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Image
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Shop Name
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Division
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  District
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="font-normal">
              {[1, 2, 3, 4, 5].map((item, i) => (
                <tr key={i} className=" border-b border-slate-700">
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    {item}
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <img
                      className="w-[45px] h-[45px]"
                      src="/images/1.jpg"
                      alt=""
                    />
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Monoj kumar
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    monoj@gmail.com
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Monoj Shop
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Pending
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Rangpur
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Dinajpur
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link className=" p-[6px] bg-green-500 hover:shadow-lg hover:bg-green-500/50">
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full justify-end flex mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Sellers;
