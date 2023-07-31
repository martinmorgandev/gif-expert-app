import { useState } from "react";
import "./App.css";
import { InputSearch, ListGif } from "./components";

function App() {

  const [search, setSearch] = useState(["dragon ball"]);

  const onNewCategory = (newCategory) => {
    console.log(newCategory)
    if (search.includes(newCategory)) return;
    setSearch([newCategory, ...search]);
  };


  return (
    <>
      <h1>Hola mundo</h1>

      <InputSearch
        onNewCategory={(e) => onNewCategory(e)}
      ></InputSearch>

      {search.map((item) => (
        <ListGif item={item} key={item}></ListGif>
      ))}
    </>
  );
}

export default App