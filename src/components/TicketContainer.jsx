import React, { use, useState } from "react";
import States from "./States";
import Container from "./Container";
import TicketsCard from "./cards/ticketsCard";
import ProgressCard from "./cards/ProgressCard";
import ResolveCard from "./cards/ResolveCard";
import { toast } from "react-toastify";

const TicketContainer = ({ ticketsPromise }) => {
  const data = use(ticketsPromise);

  const [ticketItems, setTicketItems] = useState(data);

  const [progressItems, setProgressItems] = useState([]);

  const [resolveItems, setResolveItems] = useState([]);

  // ---------------------handling click on "tickets" functionality--------------------
  const handleTicket = (ticket) => {
    // return console.log(ticket);

    const isExist = progressItems.find(item => item.id == ticket.id);
    if(isExist){
      toast.error("Already in Progress");
      return;
    }

    //---------------- Pushing tickets in Progress list ---------------- 
    const newProgressItems = [...progressItems, ticket];
    setProgressItems(newProgressItems);
    ticket.status = "Pending ";

    toast.success("Ticket added to the queue");

  };

  //---------------------- handling Complete Button functionality ------------------------- 
  const handleProgress = (ticket) => {
    const newResolveItems = [...resolveItems,ticket];
    setResolveItems(newResolveItems);

    //-------------------------- Removing from Progress List ---------------------------- 
    const remainingProgTickets = progressItems.filter(item => item.id !== ticket.id);
    setProgressItems(remainingProgTickets); 

    //-------------------------- Removing from Total ticket List ------------------------- 

    const remainingTickets = ticketItems.filter(item => item.id !== ticket.id);
    setTicketItems(remainingTickets);

    toast("Ticket Resolved");
    
  }



  return (
    <div>
      <Container>
        <States progressItemsCount = {progressItems.length} resolveItemsCount = {resolveItems.length}></States>

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
                  <p className="mt-5 text-slate-500">Select A ticket to add to Task Status</p>
                ) : (
                  progressItems.map((ticket) => (
                    <ProgressCard handleProgress={handleProgress} key={ticket.id} ticket={ticket}></ProgressCard>
                  ))
                )}
              </section>
            </div>

            <p className="text-2xl font-bold">Resolve Task</p>
            <div>
              <section className="mb-8 space-y-2">
                {resolveItems.length == 0 ? (
                  <p className="mt-5 text-slate-500">No resolve task yet</p>
                ) : (
                  resolveItems.map((ticket) => (
                    <ResolveCard key={ticket.id} ticket={ticket}></ResolveCard>
                  ))
                )}
              </section>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default TicketContainer;
