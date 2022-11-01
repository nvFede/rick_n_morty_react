import React, { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Episodes from "./pages/Episodes";
import Locations from './pages/Locations'
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<CardDetails />} /> */}
        
        <Route path="/about" element={<About />} />

        <Route path="/episodes" element={<Episodes />} />
        {/* <Route path="/episodes/:id" element={<CardDetails />} /> */}

        <Route path="/locations" element={<Locations />} />
        {/* <Route path="/location/:id" element={<CardDetails />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}


const Home = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async () => {
      await axios.get(api).then(function (response) {
        setFetchedData(response.data.results);
      });
    })();
  }, [api]);

  return (
    <div className="App">
      

      <Hero Children="Characters" />

      <div className="container  mx-auto sm:px-3 flex-col flex align-middle items-center m-10 ">
        <div className="w-1/3">
          <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4 w-full  ">
          {fetchedData && <Card characters={fetchedData} />}
        </div>

        {/* <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        /> */}
      </div>

      <Filter />
    </div>
  );
}

export default App;
