import React, { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

export function InputSearch({ onNewCategory }) {

  

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
      setInputValue(e.target.value);
    //   console.log(inputValue)
    };

  const onSubmit = (e) => {
    e.preventDefault()
    //trim eliminar los espacios adelante y atras
    if(inputValue.trim().length <= 1) return;
    // setSearch(categories => [...categories, inputValue]);
    onNewCategory(inputValue.trim())
    // console.log(`el valor es ${inputValue}`)
    setInputValue('')
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
}

