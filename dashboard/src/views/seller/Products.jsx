import React, { useState } from "react";
import Search from "../components/Search";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
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
        <div className=" relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left text-primary ">
            <thead className="text-sm text-primary uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Image
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Category
                </th>
                <th scope="col" className="py-3 px-4">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Discount
                </th>
                <th scope="col" className="py-3 px-4">
                  Stock
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, i) => (
                <tr key={i} className=" border-b border-slate-700">
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    {item}
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    <img
                      className="w-[45px] h-[45px]"
                      src="/images/1.jpg"
                      alt=""
                    />
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    BUY 1 GET 1, Square LED Digital...
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    Sports
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    Bata
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    $32
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    $10
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    500
                  </td>
                  <td className="py-2 px-4 font-normal whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link className=" p-[6px] rounded-sm bg-yellow-500 hover:shadow-lg hover:bg-yellow-500/50">
                        <FaEdit />
                      </Link>
                      <Link className=" p-[6px] rounded-sm bg-green-500 hover:shadow-lg hover:bg-green-500/50">
                        <FaEye />
                      </Link>
                      <button className=" p-[6px] rounded-sm bg-red-500 hover:shadow-lg hover:bg-red-500/50">
                        <FaTrash />
                      </button>
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

export default Products;
