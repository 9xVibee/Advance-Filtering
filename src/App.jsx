/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// importing database :)
import products from "./db/data";
import Price from "./Sidebar/Price/Price";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- input filter --------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // buttons filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // filtering data
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, prevPrice, newPrice, reviews }) => (
        <Card
          key={Math.random()}
          img={img}
          star={star}
          prevPrice={prevPrice}
          newPrice={newPrice}
          title={title}
          reviews={reviews}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav handleInputChange={handleInputChange} query={query} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
