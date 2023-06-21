import React, { useState } from "react";
import Search from "./components/Search";
import Baby from "./components/Baby";
import babyNames from "../src/data/babyNamesData.json";
import "./App.css";

function App() {
  const [searchContent, setSearchContent] = useState("");
  const babies = babyNames.sort((a, b) => a.name.localeCompare(b.name));

  const getSearchContent = (searchCtx) => {
    setSearchContent(searchCtx);
  };

  const filteredBabies = babies.filter((baby) =>
    baby.name.toLocaleLowerCase().includes(searchContent.toLocaleLowerCase())
  );

  return (
    <div className="App center">
      <Search onSearch={getSearchContent} searchContent={searchContent} />
      <Baby babyNames={filteredBabies} />
    </div>
  );
}

export default App;
