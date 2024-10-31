import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useSubmit } from "react-router-dom";

const HomeScreen = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="relative min-h-[calc(100vh-140px)] mt-[300px] bg-stone-100 m-2 border rounded-md p-2">
      <div>start here</div>
      <div className="absolute right-0 bottom-0 m-2">
        {toggle ? (
          <div className="rounded-full p-2 text-[35px] cursor-pointer">
            <div className="mb-[2px] ml-[1px]">
              <FaRobot />
            </div>
          </div>
        ) : (
          <div className="w-[350px] h-[600px] border rounded-md overflow-hidden flex-col">
            <div className="h-[60px] bg-neutral-950 w-full text-white flex justify-end items-center px-2 text-[30px] cursor-pointer">
              <MdClose
                className="cursor-pointer"
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
            <div className=" h-[495px] overflow-auto p-2">
              <div className=" h-[600px]"></div>
            </div>
            <div className="flex-1"></div>
            <div className="m-2 border rounded-md h-[45px] flex items-center">
              <input
                className="h-[90%] w-[90%] outline-none bg-transparent pl-2"
                title="h"
              />
              <IoSendSharp className="text-[30px] text-slate-400" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
