import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestionPage, setShowSuggestionPage] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("shivammmmmm");
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between bg-slate-800 p-5 text-white shadow-xl items-center sticky top-0">
      <div className="flex gap-5">
        <div onClick={() => toggleMenuHandler()}>
          <MenuIcon />
        </div>
        <h1>SparkTube</h1>
      </div>
      <div className="">
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionPage(true)}
            onBlur={() => setShowSuggestionPage(flase)}
            className="text-slate-950 w-96  rounded-l-full pl-5 z-10 outline-none"
          />
          <SearchIcon className=" text-slate-950 rounded-r-full bg-slate-200 " />
        </div>

        <div className="fixed bg-white py-2 px-2 text-black   w-[375px] z-1 border border-gray-100 shadow-md 200 rounded-b-md ml-2">
          {showSuggestionPage && (
            <ul>
              {suggestion &&
                suggestion.map((s, index) => (
                  <li key={index} className="hover:bg-gray-100">
                    <SearchIcon />
                    {s}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <PersonIcon />
      </div>
    </div>
  );
}

export default Header;
