import React from "react";
import iconOpen from "../../assets/Icons/open.svg";
import iconProgress from "../../assets/Icons/progress.svg";

const TicketsCard = ({ ticket,handleTicket }) => {
  return (
    <div onClick={ () => handleTicket(ticket)} className="flex cursor-pointer flex-col justify-between space-y-2.5 rounded-md bg-white p-3 shadow-lg duration-300 hover:scale-105 ">
      <div className="flex justify-between">
        <h4 className=" text-lg font-medium">{ticket.title}</h4>
        <div
          className={`flex items-center gap-1 rounded-full px-3 ${
            ticket.status == "Open" ? "bg-[#9becb7]" : "bg-[#f6efa2]"
          }`}
        >
          <img src={ticket.status == "Open" ? iconOpen : iconProgress} />
          <p
            className={`${
              ticket.status == "Open" ? "text-[#0a6305]" : "text-[#b28a05]"
            }`}
          >
            {ticket.status}
          </p>
        </div>
      </div>
      <p className=" text-slate-500">{ticket.description}</p>
      <div className="flex flex-col justify-between gap-1 text-sm md:flex-row md:items-center">
        <div className="flex gap-2">
          <p className=" text-slate-500 font-semibold">#{ticket.id}</p>
          <p
            className={`font-semibold ${
              ticket.priority == "High"
                ? "text-red-500"
                : ticket.priority == "Medium"
                ? "text-amber-500"
                : "text-green-500"
            } `}
          >
            {`${ticket.priority}`.toUpperCase()}
          </p>
        </div>
        <div className="flex gap-2 text-slate-500">
          <p>{ticket.customer}</p>
          <p>📅{` ${ticket.createdAt}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
