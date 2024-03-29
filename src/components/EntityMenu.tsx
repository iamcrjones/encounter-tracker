import { useState } from "react";
import { usePlayers } from "../utils/state/usePlayers";

const EntityMenu = () => {
  const addPlayer = usePlayers((state) => state.addPlayer);
  const [open, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const handleAddPlayer = () => {
    addPlayer({ name: "test", status: "none", location: [500, 500] });
  };

  return (
    <div className="flex w-full h-full">
      <button className="bg-pink-500 w-10 h-8" onClick={handleMenuOpen}>
        {open ? "close" : "open"}
      </button>
      <div
        className={`flex flex-col ${open ? "w-72" : "w-0"} h-full bg-zinc-500/90 transition-all duration-500 ease-in-out`}
      >
        <div
          className={`${open ? "w-56" : "w-0 "} w-full flex flex-col gap-6 justify-start py-10 items-center h-full overflow-hidden`}
        >
          Players
          <button
            className={`${open ? "w-48 outline-2" : "w-0 outline-0"} h-20 outline outline-zinc-600 text-white self-center mb-10 overflow-hidden  transition-all duration-500 ease-in-out`}
            onClick={handleAddPlayer}
          >
            New
          </button>
        </div>
        <div
          className={`${open ? "w-56" : "w-0 "} w-full flex flex-col gap-6 justify-start py-10 items-center h-full overflow-hidden`}
        >
          Enemies
          <button
            className={`${open ? "w-48 outline-2" : "w-0 outline-0"} h-20 outline outline-zinc-600 text-white self-center mb-10 overflow-hidden  transition-all duration-500 ease-in-out`}
            onClick={() => console.log("clicknew")}
          >
            New
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntityMenu;
