import { useState } from "react";

const MapMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [maps, setMaps] = useState<any[]>([]);
  const handleMapMenuClick = () => {
    setOpen(!open);
  };
  const handleNewMap = () => {
    setMaps((prev) => [...prev, prev.length]);
  };
  return (
    <div
      className={`flex flex-col ${open ? "w-72" : "w-0"} h-full transition-all duration-700 ease-out bg-zinc-500/5`}
    >
      <button
        className="bg-pink-500 w-10 self-end"
        onClick={handleMapMenuClick}
      >
        {open ? "close" : "open"}
      </button>
      <div
        className={`${open ? "w-56" : "w-0 "} w-full flex flex-col gap-6 justify-start py-10 items-center h-full overflow-hidden transition-all ease-out duration-500`}
      >
        {maps.map(() => {
          return (
            <div className="w-48 h-32 outline outline-2 outline-gray-400"></div>
          );
        })}{" "}
      </div>
      <button
        className={`${open ? "w-48 outline outline-2" : "w-0"} h-20 outline-zinc-600 text-white self-center mb-10 overflow-hidden transition-all ease-out duration-500`}
        onClick={handleNewMap}
      >
        New
      </button>
    </div>
  );
};

export default MapMenu;
