import Navbar from "./components/Navbar"
import TicketContainer from "./components/TicketContainer"

const loadTickets = async () => {
    return await fetch("/tickets.json")
    .then(res => res.json())
    
}

function App() {
  const ticketsPromise = loadTickets();

  return (
    <div className="bg-[#F5F5F5] text-[#627382] space-y-12">
      
      <Navbar></Navbar>
      <TicketContainer ticketsPromise={ticketsPromise}></TicketContainer>
     
    </div>
  )
}

export default App
