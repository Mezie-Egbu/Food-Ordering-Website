import { useEffect, useState, useRef } from "react";
import { NavOptions } from "../Data/data";
import { RestaurantName } from "../Data/data";
import { logo } from "../Data/data";
import gsap from "gsap";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "elastic" }
      );
    }
  }, [open]);

  const closeMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.9,
      ease: "elastic",
      onComplete: () => setOpen(false),
    });
  };

  return (
    <nav className="flex justify-between sm:justify-around p-4 sticky top-0 bg-black text-white shadow-lg z-10">
      <div className=" font-name">
        <a href="#Hero" className="flex">
          <img src={logo} alt="logo" className="w-6" />
          {RestaurantName}
        </a>
      </div>
      <div className="hidden sm:block">
        <ul className=" flex gap-5 font-name-others">
          {NavOptions.map((navOp) => (
            <li key={navOp.id} className="hover:text-[rgb(252,216,73)]">
              <a href={`#${navOp.id}`}>{navOp.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden">
        {open ? (
          <button onClick={() => (open ? closeMenu() : setOpen(false))}>
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
        ) : (
          <button onClick={() => setOpen(true)}>
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
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        )}
      </div>
      {open && (
        <div
          className="absolute top-16 left-0 w-full bg-black text-white flex flex-col gap-4 p-17 border-t-2 border-b-2 border-[rgb(252,216,73)] rounded-2xl sm:hidden"
          ref={menuRef}
        >
          {NavOptions.map((navOp) => (
            <a
              href={`#${navOp.id}`}
              key={navOp.id}
              className="text-3xl p-2 mx-auto"
              onClick={() => setOpen(false)}
            >
              {navOp.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
