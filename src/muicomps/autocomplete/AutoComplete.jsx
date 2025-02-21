import React, { useState, useEffect } from "react";
import "./autocomplete.css";

function AutoComplete() {
  //stae for cache to save api calls
  const [cache, setCache] = useState({});

  //state for input value
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  //state for results
  const [results, setResults] = useState([]);
  const fetchData = async (query) => {
    if (cache[query]) {
      setResults(cache[query]);
      console.log(results, 'from cache')
      return;
    }
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`
    );
    const data = await response.json();
    console.log(data)
    setResults(data?.recipes.map((recipe) => recipe.name));
    //updating cache logic
    setCache((prevState) => ({ ...prevState, [query]: data?.recipes.map((recipe) => recipe.name) }));
    console.log(results)
  };
  //state for showing results on focus && removing in blur
  const [showResults, setShowResults] = useState(true);
  useEffect(() => {
    //debouncing logic
    const timer = setTimeout(() => {  fetchData(input) },300)
    return () => {
      console.log("clearing timeout")
      clearTimeout(timer);
    };
  }, [input]);


  return (
    <div className="autocomplete-container">
      <div className="input-container">
        <input
        className="input-box"
          value={input}
          onChange={handleInputChange}
          placeholder="food name"
          onFocus={() => setShowResults(true)}
          onBlur={()=> setShowResults(false)}
        ></input>
      </div>
      {showResults && 
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result">{result}</div>
        ))}
      </div>
      }
    </div>
  );
}

export default AutoComplete;
