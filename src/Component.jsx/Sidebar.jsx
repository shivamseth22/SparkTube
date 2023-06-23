import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillFilePlayFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BsCollectionPlay } from "react-icons/bs";
import { Link } from "react-router-dom";
function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className=" flex flex-col gap-5 shadow-lg  px-10 p-5 sm:hidden">
      <ul className="flex flex-col gap-2">
        <Link to="/Home" className="flex items-center gap-3 text-lg">
          <AiFillHome />
          <li>Home</li>
        </Link>

        <div className="flex items-center gap-3 text-lg">
          <BsFillFilePlayFill />
          <li>Short</li>
        </div>
        <div className="flex items-center gap-3 text-lg ">
          <BsCollectionPlay />
          <li>Subscription</li>
        </div>
      </ul>
      <ul className="flex flex-col gap-4">
        <li>History</li>
        <li>Library</li>
        <li>Your Video</li>
        <li>Watch Late</li>
        <li>Your Clip</li>
      </ul>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold ">Subscription</h1>
        <ul className="flex flex-col gap-4">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Watch Later</h1>
        <ul className="flex flex-col gap-4">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
