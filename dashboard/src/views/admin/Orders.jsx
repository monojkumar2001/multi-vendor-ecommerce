import React, { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchValue, setSearchValue] = useState(1);
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className=" px-2 lg:px-7 pt-5 ">
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
        <div className=" relative mt-5 overflow-x-auto ">
          <div className="w-full text-sm text-left text-primary">
            <div className="text-sm text-primary uppercase border-b border-slate-700 ">
              <div className="flex justify-between items-start ">
                <div className="py-3 w-[25%]">Order Id</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">Payment Status</div>
                <div className="py-3 w-[18%]">Order Status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>
            <div className="text-primary">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium">#324567895432</div>
                <div className="py-4 w-[13%]">$65</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link to='/admin/dashboard/order/details/1'>View</Link>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="py-4 w-[8%] cursor-pointer"
                >
                  <BsArrowBarDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
              </div>
            </div>
            <div className="text-primary">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium">#324567895432</div>
                <div className="py-4 w-[13%]">$65</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>View</Link>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="py-4 w-[8%] cursor-pointer"
                >
                  <BsArrowBarDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
              </div>
            </div>
            <div className="text-primary">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium">#324567895432</div>
                <div className="py-4 w-[13%]">$65</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>View</Link>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="py-4 w-[8%] cursor-pointer"
                >
                  <BsArrowBarDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
              </div>
            </div>
            <div className="text-primary">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium">#324567895432</div>
                <div className="py-4 w-[13%]">$65</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link>View</Link>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="py-4 w-[8%] cursor-pointer"
                >
                  <BsArrowBarDown />
                </div>
              </div>
              <div
                className={
                  show
                    ? "block border-b border-slate-700 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
                <div className="flex justify-start items-start border-b border-slate-700 ">
                  <div className="py-3 w-[25%] font-medium pl-3">
                    #324567895432
                  </div>
                  <div className="py-4 w-[13%]">$65</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-end flex mt-4 bottom-4 right-4" >
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
