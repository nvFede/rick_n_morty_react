import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="flex">
      <div
        onClick={clear}
        className="pointer text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>

      <Gender updatePageNumber={updatePageNumber} updateStatus={updateStatus} />
      {/* <Status updatePageNumber={updatePageNumber} updateStatus={updateStatus} />
      <Species updatePageNumber={updatePageNumber} updateStatus={updateStatus} /> */}
    </div>
  );
};

export { Filter };
