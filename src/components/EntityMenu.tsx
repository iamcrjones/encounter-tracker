import { useState } from "react";

const EntityMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [maps, setMaps] = useState<any[]>([]);
  const handleMapMenuClick = () => {
    setOpen(!open);
  };
  const handleNewMap = () => {
    setMaps((prev) => [...prev, prev.length]);
  };
  return (
    <div className="flex w-full h-full">
      <button className="bg-pink-500 w-10 h-8" onClick={handleMapMenuClick}>
        {open ? "close" : "open"}
      </button>
      <div
        className={`flex flex-col ${open ? "w-72" : "w-0"} h-full bg-zinc-500/5 transition-all duration-700 ease-in-out`}
      >
        <div
          className={`${open ? "w-56" : "w-0 "} w-full flex flex-col gap-6 justify-start py-10 items-center h-full overflow-hidden`}
        >
          {maps.map(() => {
            return (
              <div className="w-48 h-32 outline outline-2 outline-gray-400"></div>
            );
          })}{" "}
        </div>
        <button
          className={`${open ? "w-48 outline-2" : "w-0 outline-0"} h-20 outline outline-zinc-600 text-white self-center mb-10 overflow-hidden  transition-all duration-700 ease-in-out`}
          onClick={handleNewMap}
        >
          New
        </button>
      </div>
    </div>
  );
};

export default EntityMenu;
