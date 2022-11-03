import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { InputGroup } from "../components/Filter/Category/InputGroup";
import Hero from "../components/Hero";

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <>
      <Hero Children="Episodes" />
      <div className="container mx-auto mt-10 mb-3 max-w-7xl">
        <h1 className="text-center mb-3 font-bold text-2xl">
          Episode name:{" "}
          <span className="text-rnm-blue  font-light">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center font-bold">
          Air Date:{" "}
          <span className="font-light text-rnm-blue">
            {air_date === "" ? "Unknown" : air_date}
          </span>
        </h5>
        <div className="mb-4  w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Pick Episode
          </label>

          <InputGroup
            className="w-64"
            name="Episode"
            changeID={setID}
            total={51}
          />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4 w-full  ">
              <Card page="/episodes/" characters={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
