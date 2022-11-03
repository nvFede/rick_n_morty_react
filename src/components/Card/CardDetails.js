import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg.png";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  let navigate = useNavigate();
  let goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="h-screen w-screen bg-cover bg-center d-flex justify-content-center pt-20 mb-20 "
        style={{backgroundImage: `url( ${bg} )`}}
    >
     

      <div className="bg-white container max-w-2xl mx-auto justify-content-center flex p-2 shadow-md mt-20" key={id}>
        <div className="col col-1/3">
          <img src={image}></img>
        </div>
        <div className="px-3 text-left">
          <div className="relative  w-full flex items-start justify-start text-left bg-cover bg-center">
            Status:
            {status === "Alive" ? (
              <span className="bg-green-100 text-green-800 text-xs font-semibold m-2 px-3.5 py-1.5 rounded dark:bg-green-700 dark:text-green-300">
                Alive
              </span>
            ) : status === "Dead" ? (
              <span className="bg-red-100 text-red-800 text-xs font-semibold m-2 px-3.5 py-1.5 rounded dark:bg-red-200 dark:text-red-900">
                Dead
              </span>
            ) : (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold m-2 px-3.5 py-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Unknown
              </span>
            )}
          </div>
          {name ? <p className="font-bold">Name: {name} </p> : null}
          {species ? <p className="font-bold">Specie: {species} </p> : null}
          {gender ? <p className="font-bold">Gender: {gender} </p> : null}
          {/* {origin ? <p className="font-bold">Origin: {origin} </p> : null} */}
          {/* {location ? <p className="font-bold">Last Location: {location} </p> : null} */}

          <button
        className="shadow-md bg-rnm-blue mt-10  h-10 hover:bg-rnm-blue border-rnm-blue border-2 hover:border-rnm-green text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline"
        onClick={() => goBack()}
      >
        Go Back
      </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
