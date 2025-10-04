import { Suspense } from "react";
import Navbar from "./components/Navbar"
import TicketContainer from "./components/TicketContainer"
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const loadTickets = async () => {
    return await fetch("/tickets.json")
    .then(res => res.json())
    
}

function App() {
  const ticketsPromise = loadTickets();

  return (
    <div className="bg-[#F5F5F5] space-y-12">
      
      <Navbar></Navbar>
      <Suspense fallback="Data Loading...⌛">
      <TicketContainer ticketsPromise={ticketsPromise}></TicketContainer>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
