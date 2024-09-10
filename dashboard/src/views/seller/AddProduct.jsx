import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsImages } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
const AddProduct = () => {
  const categories = [
    {
      id: 1,
      name: "Sports",
    },
    {
      id: 1,
      name: "T-shirt",
    },
    {
      id: 1,
      name: "Jarcy",
    },
    {
      id: 1,
      name: "Pant",
    },
    {
      id: 1,
      name: "Mobile",
    },
  ];

  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [cateShow, setCateShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState(categories);
  const [searchValue, setSearchValue] = useState("");
  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let srcValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );

      setAllCategory(srcValue);
    } else {
      setAllCategory(categories);
    }
  };
  const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);
  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];

      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const removeImage = (i) => {
    const filterImage = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);
    setImages(filterImage);
    setImageShow(filterImageUrl);
  };
  return (
    <div className=" px-2 lg:px-7 pt-5">
      <div className="w-full bg-[#283046] p-4 rounded-md ">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-primary text-xl font-semibold"> Add Product</h1>
          <Link
            className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-3"
            to="/seller/dashboard/all-product"
          >
            Products
          </Link>
        </div>
        <div className="mb-5">
          <form action="">
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-primary">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  onChange={inputHandle}
                  value={state.name}
                  placeholder="product name"
                  name="name"
                  id="name"
                  className="px-3 w-full py-2 outline-none rounded border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  type="text"
                  onChange={inputHandle}
                  value={state.brand}
                  placeholder="product brand"
                  name="brand"
                  id="brand"
                  className="px-3 w-full py-2 outline-none rounded border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-primary">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  type="text"
                  onChange={inputHandle}
                  value={category}
                  placeholder="--- Select Category ---"
                  name="name"
                  id="name"
                  className="px-3 w-full py-2 outline-none rounded border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                />
                <div
                  className={`absolute top-[101%] bg-slate-800 w-full transition-all ${
                    cateShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      className="px-3 w-full py-1 outline-none rounded border bg-transparent overflow-hidden border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                      type="text"
                      value={searchValue}
                      onChange={categorySearch}
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14">
                    <div className="flex justify-start items-start flex-col h-[200px] pl-4 pb-4 overflow-y-scroll">
                      {allCategory.map((item, index) => (
                        <span
                          key={index}
                          onClick={() => {
                            setCateShow(false);
                            setCategory(item.name);
                            setSearchValue("");
                            setAllCategory(categories);
                          }}
                          className={`cursor-pointer px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full ${
                            category === item.name && "bg-indigo-500"
                          }`}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  type="number"
                  onChange={inputHandle}
                  value={state.stock}
                  placeholder="product stock"
                  name="stock"
                  min={"0"}
                  id="stock"
                  className="px-3 w-full py-2 outline-none rounded border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-primary">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  onChange={inputHandle}
                  value={state.price}
                  placeholder="price"
                  name="price"
                  id="price"
                  className="px-3 w-full py-2 outline-none rounded border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  type="number"
                  onChange={inputHandle}
                  value={state.discount}
                  placeholder="%discount%"
                  name="discount"
                  id="discount"
                  className="px-3 w-full py-2 outline-none rounded border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-primary">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  placeholder="description"
                  rows="6"
                  className="px-3 w-full py-2 outline-none rounded border bg-transparent border-slate-700 text-[#d0d2d6] focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 xs:gap-4 gap-3 w-full text-primary mb-4">
              {imageShow.map((item, index) => (
                <div className="h-[180px] relative">
                  <label htmlFor={index}>
                    <img
                      className="w-full h-full rounded-md"
                      src={item.url}
                      alt=""
                    />
                  </label>
                  <input
                    type="file"
                    onChange={(e) => changeImage(e.target.files[0], index)}
                    id={index}
                    className="hidden"
                  />
                  <span
                    onClick={() => removeImage(index)}
                    className="p-2 z-10 rounded-full cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 "
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              ))}
              <label
                htmlFor="image"
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-indigo-500 w-full text-primary"
              >
                <span>
                  <BsImages />
                </span>
                <span>Select Image</span>
              </label>
              <input
                type="file"
                multiple
                onChange={imageHandle}
                className="hidden"
                id="image"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500  hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-3"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
