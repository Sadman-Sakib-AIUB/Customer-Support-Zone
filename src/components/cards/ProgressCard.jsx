import React from "react";

const ProgressCard = ({ ticket,handleProgress}) => {
  return (
    <div className="flex flex-col rounded-md bg-white p-3 shadow-md">
      <p className=" text-lg font-medium">{ticket.title}</p>
      <button onClick={()=>handleProgress(ticket)} className="cursor-pointer rounded-md p-2 bg-green-600  text-white hover:bg-green-800">
        Complete
      </button>
    </div>
  );
};

export default ProgressCard;
