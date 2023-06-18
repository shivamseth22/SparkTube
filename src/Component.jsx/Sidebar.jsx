import React from "react";
import { AiFillHome } from "react-icons/ai";
import {BsFillFilePlayFill} from "react-icons/bs";
import { useSelector } from "react-redux";
import {BsCollectionPlay} from "react-icons/bs"
function Sidebar() {

    const isMenuOpen = useSelector(store =>store.app.isMenuOpen) 
    // Early return
    if(!isMenuOpen) return null ; 

    return (
    <div className=" flex flex-col gap-2 shadow-lg w-48 bg-red-300 p-5">
      <ul>
        <div className="flex items-center gap-3">
          <AiFillHome />
          <li>Home</li>
        </div>

        <div className="flex items-center gap-3">
          <BsFillFilePlayFill  />
          <li>Short</li>
        </div>
        <div className="flex items-center gap-3 ">
        <BsCollectionPlay/>
        <li>Subscription</li>
        </div>
      </ul>
      <ul>
        <li>History</li>
        <li>Library</li>
        <li>Your Video</li>
        <li>Watch Late</li>
        <li>Your Clip</li>
      </ul>
      <div>
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Watch Later</h1>
        <ul>
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
