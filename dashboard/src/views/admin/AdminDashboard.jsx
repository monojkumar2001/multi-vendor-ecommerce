import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
const AdminDashboard = () => {
    const state = {
        series: [
          {
            name: "Orders",
            data: [32, 54, 53, 63, 73, 63, 84, 24, 96, 85, 94, 25],
          },
          {
            name: "Revenue",
            data: [32, 54, 53, 33, 73, 73, 84, 24, 96, 45, 92, 25],
          },
          {
            name: "Sellers",
            data: [32, 54, 53, 23, 73, 63, 34, 24, 96, 35, 42, 25],
          },
        ],
        options: {
          color: ["#181ee8", "#181ee8"],
          plotOptions: {
            radius: 30,
          },
          chart: {
            background: "transparent",
            foreColor: "#d0d2d6",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            curve: ["smooth", "straight", "stepline"],
            lineCap: "butt",
            colors: "#f0f0f0",
            width: 0.5,
            dashArray: 0,
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          legend: {
            position: "top",
          },
          responsive: [
            {
              breakpoint: 565,
              yaxis: {
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apl",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },
              options: {
                plotOptions: {
                  bar: {
                    horizontal: true,
                  },
                },
                chart: {
                  height: "550px",
                },
              },
            },
          ],
        },
      };
      return (
        <div className="px-2 md:px-7 py-5 ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
              <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
                <h2 className="text-3xl font-bold">$23432</h2>
                <span className="text-md font-medium">Total Sales</span>
              </div>
              <div className="w-[46px] h-[47px] rounded-full  bg-[#28c76f1f] flex justify-center items-center text-xl ">
                <BsCurrencyDollar className="text-[#28d76f] shadow-lg" />
              </div>
            </div>
            <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
              <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
                <h2 className="text-3xl font-bold">432</h2>
                <span className="text-md font-medium">Product</span>
              </div>
              <div className="w-[46px] h-[47px] rounded-full  bg-[#e000e81f] flex justify-center items-center text-xl ">
                <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
              </div>
            </div>
            <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
              <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
                <h2 className="text-3xl font-bold">232</h2>
                <span className="text-md font-medium">Sellers</span>
              </div>
              <div className="w-[46px] h-[47px] rounded-full  bg-[#00cfe81f] flex justify-center items-center text-xl ">
                <FaUsers className="text-[#00cfe8] shadow-lg" />
              </div>
            </div>
            <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
              <div className="flex flex-col justify-center items-start text-[#d0d2d6]">
                <h2 className="text-3xl font-bold">32</h2>
                <span className="text-md font-medium">Orders</span>
              </div>
              <div className="w-[46px] h-[47px] rounded-full  bg-[#7367f01f] flex justify-center items-center text-xl ">
                <AiOutlineShoppingCart className="text-[#7367f0] shadow-lg" />
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-wrap mt-7">
            <div className="w-full lg:w-7/12 lg:pr-3">
              <div className="w-full bg-[#283046] p-4 rounded-md ">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  height={350}
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12 lg:pl-4  mt-6 lg:mt-0">
              <div className="w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]">
                <div className="flex justify-between items-center ">
                  <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                    Recent Seller message
                  </h2>
                  <Link className=" font-semibold text-sm text-[#d0d2d6]">
                    View All
                  </Link>
                </div>
                <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
                  <ol className=" relative border-l-2 border-slate-600 ml-4">
                    <li className="mb-3 ml-6">
                      <div className="absolute -left-5 shadow-lg flex justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10">
                        <img
                          className="w-full rounded-full h-full shadow-lg"
                          src="/images/admin.png"
                          alt=""
                        />
                      </div>
                      <div className="p-3 bg-slate-800 rounded-lg border-slate-600 border shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <Link className="text-md font-normal ">Admin</Link>
                          <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                            4 day ago
                          </time>
                        </div>
                        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                          How are you
                        </div>
                      </div>
                    </li>
                    <li className="mb-3 ml-6">
                      <div className="absolute -left-5 shadow-lg flex justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10">
                        <img
                          className="w-full rounded-full h-full shadow-lg"
                          src="/images/admin.png"
                          alt=""
                        />
                      </div>
                      <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <Link className="text-md font-normal ">Admin</Link>
                          <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                            4 day ago
                          </time>
                        </div>
                        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                          How are you
                        </div>
                      </div>
                    </li>
                    <li className="mb-3 ml-6">
                      <div className="absolute -left-5 shadow-lg flex justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10">
                        <img
                          className="w-full rounded-full h-full shadow-lg"
                          src="/images/admin.png"
                          alt=""
                        />
                      </div>
                      <div className="p-3 bg-slate-800 border rounded-lg border-slate-600 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <Link className="text-md font-normal ">Admin</Link>
                          <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                            4 day ago
                          </time>
                        </div>
                        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                          How are you
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#283046] p-4 rounded-md mt-6  ">
            <div className="flex justify-between items-center ">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent Orders
              </h2>
              <Link className=" font-semibold text-sm text-[#d0d2d6]">
                View All
              </Link>
            </div>
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
                        <Link>view</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default AdminDashboard