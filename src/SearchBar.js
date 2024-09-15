import React, { useState } from "react";
import image from "./image.png";
import s from './s.png';
import style from "./SearchBar.module.css";
import axios from "axios";

function SearchBar() {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [trademarks, setTrademarks] = useState([]);
  // const [status, setStatus] = useState("Idle");

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   if (!searchQuery.trim()) return;

  //   setStatus("Searching...");
  //   try {
  //     const data = await fetchTrademarks(searchQuery);
  //     if (data && data.length > 0) {
  //       setTrademarks(data);
  //       setStatus("Results Found");
  //     } else {
  //       setStatus("No Results Found");
  //     }
  //   } catch (error) {
  //     setStatus("Error Occurred");
  //   }
  // };

  // const fetchTrademarks = async (query) => {
  //   try {
  //     const response = await axios.get(`/api/trademarks?query=${query}`);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching trademarks", error);
  //     throw error;
  //   }
  // };

  return (
    <div className={style.container}>
      <form className={style.search_bar} >
        <img src={image} alt="TradeMarkia" className={style.logo} />
        <div className={style.input_container}>
          <img src={s} width="30px"></img>
          <input
            type="text"
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Trademark Here eg. Mickey Mouse"
            className={style.search_input}
          />
          <button
            type="submit"
            // onClick={handleSearch}
            className={style.search_button}
          >
            Search
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default SearchBar;
