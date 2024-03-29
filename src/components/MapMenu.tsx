import { useRef, useState } from "react";
import { useMaps } from "../utils/state/useMaps";

const MapMenu = () => {
  const addMap = useMaps((state) => state.addMap);
  const maps = useMaps((state) => state.maps);
  const selectMap = useMaps((state) => state.selectMap);
  const [open, setOpen] = useState<boolean>(false);
  const fileInputRef = useRef(null);
  const handleMapMenuClick = () => {
    setOpen(!open);
  };
  const handleImportFile = () => {
    if (fileInputRef.current !== null) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        addMap(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMapSelect = (map) => {
    // commented while developing
    // setOpen(false);
    selectMap(map);
  };

  return (
    <div className="flex w-full h-full">
      <div
        className={`flex flex-col ${open ? "w-72" : "w-0"} h-full bg-zinc-500/90 transition-all duration-500 ease-in-out`}
      >
        <div
          className={`${open ? "w-56" : "w-0 "} w-full flex flex-col gap-6 justify-start py-10 items-center h-full overflow-hidden`}
        >
          {maps.map((map, ix) => {
            return (
              <div
                className="w-48 h-32 outline outline-2 outline-gray-400 relative"
                key={`map-${ix}`}
                onClick={() => handleMapSelect(map)}
              >
                <img
                  src={map}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            );
          })}{" "}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          accept=".jpg, .jpeg, .png"
          onChange={handleFile}
          multiple={false}
          className="hidden"
        />
        <button
          className={`${open ? "w-48 outline-2" : "w-0 outline-0"} h-20 outline  outline-zinc-600 text-white self-center mb-10 overflow-hidden  transition-all duration-500 ease-in-out `}
          onClick={handleImportFile}
        >
          New
        </button>
      </div>
      <button className="bg-pink-500 w-10 h-8 " onClick={handleMapMenuClick}>
        {open ? "close" : "open"}
      </button>
    </div>
  );
};

export default MapMenu;
