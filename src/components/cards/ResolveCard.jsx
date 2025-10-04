import React from "react";

const ResolveCard = ({ticket}) => {
  return (
    <div className="rounded-md bg-[#d1dafa] p-3 shadow-md">
      <p>{ticket.title}</p>
    </div>
  );
};

export default ResolveCard;
