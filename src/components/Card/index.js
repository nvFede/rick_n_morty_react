import React from "react";

const Card = ({ characters }) => {
  return (
    <>
        {characters &&
          characters.map((character) => (
            <div
              className=" p-2 shadow-md"
              key={character.id}
            >
              <div
                className="relative h-64 w-full flex items-start justify-start text-left bg-cover bg-center"
                style={{ backgroundImage: `url(${character.image})` }}
              >
                {character.status === "Alive" ? (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold m-2 px-3.5 py-1.5 rounded dark:bg-green-700 dark:text-green-300">
                    Alive
                  </span>
                ) : character.status === "Dead" ? (
                  <span className="bg-red-100 text-red-800 text-xs font-semibold m-2 px-3.5 py-1.5 rounded dark:bg-red-200 dark:text-red-900">
                    Dead
                  </span>
                ) : (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold m-2 px-3.5 py-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    Unknown
                  </span>
                )}
              </div>

              <div className="py-3 text-center">

                <p className="font-bold">{character.name}</p>
                <p className="italic">{character.species}</p>
              </div>
            </div>
          ))}
    </>
  );
};

export { Card };
