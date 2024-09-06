import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { BsImage } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const Category = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <div className=" px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#283046] rounded-md">
        <h1 className="text-primary font-semibold text-lg">Categories</h1>
        <button
          onClick={() => setShow(!show)}
          className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-4 py-2 cursor-pointer text-white rounded-sm text-sm "
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12 lg:pr-3 ">
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
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
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
                        <span>Sports</span>
                      </td>
                      <td className="py-2 px-4 font-medium whitespace-nowrap">
                        <div className="flex justify-start items-center gap-4">
                          <Link className=" p-[6px] bg-yellow-500 hover:shadow-lg hover:bg-yellow-500/50">
                            <FaEdit />
                          </Link>
                          <Link className=" p-[6px] bg-red-500 hover:shadow-lg hover:bg-red-500/50">
                            <FaTrash />
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
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[999] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5 ">
            <div className=" bg-[#283046] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-primary">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-primary font-semibold text-xl  w-full lg:text-center text-left ">
                  Add Category
                </h1>
                <div
                  onClick={() => setShow(!show)}
                  className="lg:hidden block text-primary cursor-pointer"
                >
                  <GrClose />
                </div>
              </div>
              <form action="">
                <div className="flex flex-col w-full gap-2 mb-3">
                  <label htmlFor="category_name">Category Name</label>
                  <input
                    className="px-4 py-3 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-primary"
                    type="text"
                    id="category_name"
                    name="category_name"
                    placeholder="category name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-primary"
                  >
                    <span>
                      <BsImage />{" "}
                    </span>
                    <span>Select Image</span>
                  </label>
                  <input
                    className=" hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                  <div>
                    <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-3">
                      Add Category
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
