import React, { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Orders = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className=" px-2 lg:px-7 pt-5">
      <div className="w-full bg-[#283046] p-4 rounded-md ">
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className=" relative overflow-x-auto ">
          <table className="w-full text-sm text-left text-primary ">
            <thead className="text-sm text-primary uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, i) => (
                <tr key={i}>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    Order Id
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    $3433
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span>pending</span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span>pending</span>
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <Link className=" p-[6px] flex items-center justify-center w-[35px] rounded-sm bg-green-500 hover:shadow-lg hover:bg-green-500/50">
                      <FaEye />
                    </Link>
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

export default Orders;
