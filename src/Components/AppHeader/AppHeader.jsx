// import { IconSearch, IconHeart, IconUser } from "@tabler/icons-react";
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import LoginForm from "../LoginForm/LoginForm.";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleLoginForm = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-full w-full bg-white">
      <div className="flex justify-center border-2">
        <div className="w-10/12 py-3 flex">
          <div>
            <img
              width="174"
              height="42"
              src="https://stimg.cardekho.com/pwa/img/carDekho-newLogo.svg"
              alt="cardekho-logo"
            />
          </div>

          {/* Search-div */}
          <div className="bg-zinc-100 w-4/12 ml-44 flex rounded-l-lg">
            <input
              className=" bg-zinc-100 h-full w-10/12 pl-4 outline-none tracking-tighter text-gray-500 py-3 rounded-l-lg"
              type="text"
              placeholder="Search Cars eg. Honda Elevate"
            />

            <div className="bg-green-300 ms-9 px-4 flex items-center rounded-r-lg">
              {/* <IconSearch height={20} /> */}
            </div>
          </div>

          <div className="gap-5 flex items-center ml-64">
            {/* selectfield */}
            <div className="bg-red-20">
              <select
                className="text-xs outline-none underline decoration-1 "
                name="language"
              >
                <option> English </option>
                <option> Hindi </option>
              </select>
            </div>

            <div className="mt-1">{/* <IconHeart height={21} /> */}</div>

            {/* logIN Reigster */}
            <div className="flex">
              <div>{/* <IconUser /> */}</div>

              <div className="text-sm cursor-pointer" onClick={toggleLoginForm}>
                Login / Register
              </div>

              <LoginForm open={isOpen} onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default AppHeader;
