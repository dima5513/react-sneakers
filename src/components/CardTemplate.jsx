import React from "react";
const CardTemplate = () => {
  return (
    <div className="border-2 border-lightgray rounded-40 py-8 px-7 opacity-20 ">
      <div className="h-24 bg-lightgray rounded-xl mb-4 animate-pulse"></div>
      <div className="h-4 bg-lightgray rounded-40 mb-1 animate-pulse"></div>
      <div className="h-4 w-24 bg-lightgray rounded-40 mb-6 animate-pulse"></div>
      <div className="flex justify-between">
        <div className="self-end h-6 w-20 bg-lightgray rounded-40 animate-pulse"></div>
        <div className="w-8 h-8 bg-lightgray rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};
export default CardTemplate;
