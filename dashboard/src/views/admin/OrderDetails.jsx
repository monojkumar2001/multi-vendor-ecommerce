import React from "react";

const OrderDetails = () => {
  return (
    <div className=" px-2 lg:px-7 pt-5 ">
      <div className="w-full bg-[#283046] p-4 rounded-md ">
        <div className="flex justify-between items-center p-4 ">
          <h2 className="text-xl text-primary ">Order Details</h2>
          <select
            name=""
            id=""
            className="px-4 py-3 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-primary"
          >
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">Warehouse</option>
            <option value="">Placed</option>
            <option value="">Cancelled</option>
            <option value=""></option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg text-primary">
            <h2>#35467653432</h2>
            <span>3 jan 2023</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[32%]">
              <div className="pr-3 text-primary text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">
                    Deliver to : Monoj Kumar
                  </h2>
                  <p>
                    <span className="text-sm">
                      Rangpur, Dinajpur, fulbari #23456
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status:</h2>
                  <span className="text-base">paid</span>
                </div>
                <span>Price: $543</span>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="text-primary">
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/1.jpg"
                        alt=""
                      />
                      <div>
                        <h2>Long long T-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg">Quantity: 2 </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/1.jpg"
                        alt=""
                      />
                      <div>
                        <h2>Long long T-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg">Quantity: 2 </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/1.jpg"
                        alt=""
                      />
                      <div>
                        <h2>Long long T-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg">Quantity: 2 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[68%]">
              <div className="pl-3">
                <div className="mt-4 flex flex-col">
                  <div className="text-primary mb-6">
                    <div className="flex justify-start items-center gap-3">
                      <h2>seller 1 order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/1.jpg"
                        alt=""
                      />
                      <div>
                        <h2>Long long T-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg">Quantity: 2 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-primary">
                    <div className="flex justify-start items-center gap-3">
                      <h2>seller 1 order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/1.jpg"
                        alt=""
                      />
                      <div>
                        <h2>Long long T-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg">Quantity: 2 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-primary mb-6">
                    <div className="flex justify-start items-center gap-3">
                      <h2>seller 2 order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/1.jpg"
                        alt=""
                      />
                      <div>
                        <h2>Long long T-shart</h2>
                        <p>
                          <span>Brand: </span>
                          <span>Easy </span>
                          <span className="text-lg">Quantity: 2 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
