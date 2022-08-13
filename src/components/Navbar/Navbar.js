import React from "react";
import "./Navbar.css";
import img from "../../assets/relevel.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.searchCard);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const title = e.target.value;
    dispatch({
      type: "SEARCH",
      payload: title,
    });
  };

  const handleClear = () => {
    dispatch({
      type: "SEARCH",
      payload: "",
    });
  };

  return (
    <div className="mainNavContainer">
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="title">
        <p>Relevel Trello</p>
      </div>
      <div className="searchBar">
        <input
          type="text"
          value={state}
          onChange={handleChange}
          placeholder="search card by title name"
        />
        <span onClick={() => handleClear()}>X</span>
      </div>
    </div>
  );
}
