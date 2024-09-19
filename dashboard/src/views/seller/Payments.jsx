import { BsCurrencyDollar } from "react-icons/bs";
import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));
const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div className="flex text-sm " style={style}>
        <div className="w-[25%] p-2 whitespace-nowrap ">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap ">$234</div>
        <div className="w-[25%] p-2 whitespace-nowrap ">
          <span className="py-[2px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs">
            pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap ">12 jun 2024</div>
      </div>
    );
  };
  return (
    <div className="px-2 md:px-7 py-5 ">
      <div className="w-full mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$23432</h2>
            <span className="text-sm font-normal">Total Sales</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full  bg-[#28c76f1f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#28d76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$432</h2>
            <span className="text-sm font-normal">Available Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full  bg-[#e000e81f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$232</h2>
            <span className="text-sm font-normal">Withdraw Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full  bg-[#00cfe81f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
            <h2 className="text-lg font-bold">$32</h2>
            <span className="text-sm font-normal">Pending Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full  bg-[#7367f01f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
        <div className="bg-[#283046] text-primary rounded-md p-5">
          <h2 className="text-lg">Send request</h2>
          <div className="py-5 ">
            <form action="">
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  name="amount"
                  className="md:w-[83%] px-3 py-2 outline-none border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-500  hover:shadow-indigo-500/50 hover:shadow-lg text-white rounded-sm px-4 py-2 "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <h2 className="text-lg pb-4">Pending request</h2>
          <div className="w-full overflow-x-auto ">
            <div className="flex bg-[#161d31] uppercase text-sm min-w-[340px]">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
            </div>
            <div className="">
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={20}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
        <div className="bg-[#283046] text-primary rounded-md p-5">
          <h2 className="text-lg pb-4">Success Withdrawal</h2>
          <div className="w-full overflow-x-auto ">
            <div className="flex bg-[#161d31] uppercase text-sm min-w-[340px]">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
            </div>
            <div className="">
              {
                <List
                  style={{ minWidth: "340px", overflowX: "hidden" }}
                  className="List"
                  height={350}
                  itemCount={20}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
