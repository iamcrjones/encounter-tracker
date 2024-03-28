import { useState } from "react";

const MapMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleMapMenuClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`flex flex-col ${open ? "w-72" : "w-10"} p-2 h-full transition-all duration-500 ease-in-out `}
    >
      <button
        className="bg-pink-500 w-10 self-end"
        onClick={handleMapMenuClick}
      >
        {open ? "close" : "open"}
      </button>
      <div
        className={`${open ? "w-56" : "w-0 "} w-full flex flex-col gap-4 justify-center items-center h-full overflow-hidden transition-all ease-in-out duration-300`}
      >
        <div className="w-48 h-32 outline outline-2 outline-gray-400"></div>
        <div className="w-48 h-32 outline outline-2 outline-gray-400"></div>
        <div className="w-48 h-32 outline outline-2 outline-gray-400"></div>
        <div className="w-48 h-32 outline outline-2 outline-gray-400"></div>
        <div className="w-48 h-32 outline outline-2 outline-gray-400"></div>
      </div>
    </div>
  );
};

export default MapMenu;
