import { getOrder } from "../Data/data";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import gsap from "gsap";

export default function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [currentprice, setCurrentPrice] = useState("");

  const handleClick = () => {
    const data = getOrder(query.toLowerCase());
    setResult(data);
    if (query === "") {
      setResult([]);
    }
  };

  const openModal = (options) => {
    setOpen(true);
    setCurrentTitle(options.title);
    setCurrentImage(options.src);
    setCurrentPrice(options.price);
  };

  const closeModal = () => {
    setOpen(false);
    setCurrentTitle(null);
    setCurrentImage(null);
    setCurrentPrice(null);
  };

  useEffect(() => {
    gsap.from(".orders", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
  }, [result]);

  return (
    <div
      className={`${
        query === ""
          ? "py-10 px-3 scroll-mt-10 h-screen"
          : "py-10 px-3 scroll-mt-10"
      }`}
      id="Search"
    >
      <div className="flex justify-center gap-2">
        <input
          type="text"
          className="outline-1 p-2 rounded-xl"
          placeholder="Enter food name"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="bg-[rgb(252,216,73)] p-2 px-3 rounded-xl cursor-pointer border hover:bg-black hover:text-[rgb(252,216,73)] hover:border-t hover:border-b hover:border-[rgb(252,216,73)]"
          onClick={handleClick}
        >
          Search
        </button>
      </div>

      <div
        className={`${
          query === ""
            ? ""
            : "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5"
        }`}
      >
        {query === "" ? (
          <div className="text-center p-20 mt-3 rounded-xl border border-gray-300">
            Search and order
          </div>
        ) : (
          result.map((options) => (
            <div
              key={options.id}
              className="border border-[rgb(252,216,73)] rounded-2xl w-[90%] hover:w-[90.5%] h-[calc(100vh*0.5)] sm:h-[calc(100vh*0.5)] md:h-[calc(100vh*0.3)] lg:h-[calc(100vh*0.4)] mx-auto overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 orders"
              onClick={() => openModal(options)}
            >
              <div className="h-[80%] overflow-hidden">
                <img src={options.src} alt={options.title} className="w-full" />
              </div>
              <div className="">
                <h1 className="font-bold text-center text-xs p-2">
                  {options.title.toUpperCase()}
                </h1>
              </div>
            </div>
          ))
        )}
        {open && (
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <div className="flex flex-row-reverse">
              <div>
                <button onClick={closeModal} className="hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <img
                  src={currentImage}
                  alt={currentTitle}
                  className=" w-[45%] border border-[rgb(252,216,73)] rounded-xl mx-auto mb-4 "
                />
              </div>
            </div>
            <div className="flex justify-around">
              <h1 className="font-bold mb-4 w-[70%]">
                {currentTitle.toUpperCase()}
              </h1>
              <p className="font-bold">{currentprice}</p>
            </div>
            <div>
              <form action="">
                <div>
                  <div className="sm:flex sm:justify-between p-1 flex gap-2 flex-col sm:flex-row sm:gap-0">
                    <input
                      type="text"
                      placeholder="Name"
                      className="outline-1 outline-gray-500 p-1 rounded-xl"
                    />
                    <input
                      type="number"
                      placeholder="Phone No"
                      className="outline-1 outline-gray-500 rounded-xl p-1"
                    />
                  </div>
                  <div className="p-1">
                    <input
                      type="text"
                      placeholder="Address"
                      className="outline-1 outline-gray-500 w-full p-1 rounded-xl"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button className="bg-[rgb(252,216,73)] p-2 px-3 rounded-xl cursor-pointer border hover:bg-black hover:text-[rgb(252,216,73)] hover:border-t hover:border-b hover:border-[rgb(252,216,73)] mx-auto block">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}
