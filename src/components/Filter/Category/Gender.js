import React from "react";
import DropDown from "./DropDown";

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
console.log(genders)
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        disabled
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        {/* <option value="1">Choose...</option>
        {genders.map((items, index) => {
            
          return <option key={index}>{items[index]}</option>;
        })} */}
      </select>
    </div>
  );
};

export default Gender;
