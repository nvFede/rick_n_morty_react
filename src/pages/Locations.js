import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import { Card } from '../components/Card';
import { InputGroup } from '../components/Filter/Category/InputGroup';


const Locations = () => {
    
    let [results, setResults] = useState([]);
    let [info, setInfo] = useState([]);
    let { dimension, type, name } = info;
    let [number, setNumber] = useState(1);
  
    let api = `https://rickandmortyapi.com/api/location/${number}`;
  
    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);
  
        let a = await Promise.all(
          data.residents.map((x) => {
            return fetch(x).then((res) => res.json());
          })
        );
        setResults(a);
      })();
    }, [api]);

    return (
        <>
           <Hero Children='Locations' />
           <div className="container mx-auto mt-10 mb-3 max-w-7xl">
        <h1 className="text-center mb-3 font-bold text-2xl">
         Location:{" "}
          <span className="text-rnm-blue  font-light">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h4 className="text-center font-bold">
          DImension:{" "}
          <span className="font-light text-rnm-blue">
            {dimension === "" ? "Unknown" : dimension}
          </span>
        </h4>
        <h5 className="text-center font-bold">
          Type:{" "}
          <span className="font-light text-rnm-blue">
            {type === "" ? "Unknown" : type}
          </span>
        </h5>
        <div className="mb-4  w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Choose Location
          </label>

          <InputGroup
            className="w-64"
            name="Location"
            changeID={setNumber}
            total={126}
          />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4 w-full  ">
              <Card page="/locations/" characters={results} />
            </div>
          </div>
        </div>
      </div>

        </>
    );
};

export default Locations;