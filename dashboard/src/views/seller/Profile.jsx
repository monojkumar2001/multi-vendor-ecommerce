import React from "react";
import { BsImages } from "react-icons/bs";
import { FadeLoader } from "react-icons/fa";

const Profile = () => {
  const image = true;
  const loader = false;
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12">
          <div className="w-full p-4 bg-[#283046] rounded-md ">
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label
                  className="flex justify-center items-center flex-col h-[210px] w-[300px] cursor-pointer border border-dashed hover:border-indigo-500"
                  htmlFor="img"
                >
                  <span>
                    <BsImages />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20 ">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
