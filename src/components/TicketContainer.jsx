import React, { use, useState } from "react";
import States from "./States";
import Container from "./Container";
import TicketsCard from "./cards/ticketsCard";
import ProgressCard from "./cards/ProgressCard";

const TicketContainer = ({ ticketsPromise }) => {
  const data = use(ticketsPromise);

  const [ticketItems, setTicketItems] = useState(data);

  const [progressItems, setProgressItems] = useState([]);

  // ---------------------handling click on "tickets" functionality--------------------
  const handleTicket = (ticket) => {
    // return console.log(ticket);

    const newProgressItems = [...progressItems, ticket];
    setProgressItems(newProgressItems);

  };



  return (
    <div>
      <Container>
        <States progressItemsCount = {progressItems.length}></States>

        <section className=" grid grid-cols-1 md:grid-cols-12 gap-5 mt-12">
          <div className=" col-span-9">
            <p className=" text-2xl font-bold mb-5">Customer Tickets</p>

            <div className=" space-y-3 grid grid-cols-1 gap-4 md:grid-cols-2">
              {ticketItems.map((ticket) => (
                <TicketsCard
                  key={ticket.id}
                  handleTicket={handleTicket}
                  ticket={ticket}
                ></TicketsCard>
              ))}
            </div>
          </div>

          <div className=" col-span-3">
            <p className="text-2xl font-bold">Task Status</p>
            <div>
              <section className="mb-8 space-y-2">
                {progressItems.length == 0 ? (
                  <p className=" text-slate-500">Select A ticket to add to Task Status</p>
                ) : (
                  progressItems.map((ticket) => (
                    <ProgressCard key={ticket.id} ticket={ticket}></ProgressCard>
                  ))
                )}
              </section>
            </div>

            <p className="text-2xl font-bold">Resolve Task</p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default TicketContainer;
