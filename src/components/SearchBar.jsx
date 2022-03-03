import React, { useState } from "react";
// import Card from "./Card";
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  console.log(city);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
      class="form-inline"
    >
      <input
        type="text"
        placeholder="Ciudad..."
        class="form-control mr-sm-2"
        aria-label="Search"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="submit"
        value="Agregar"
        class="btn btn-outline-success my-2 my-sm-0"
      />
    </form>
  );
}
