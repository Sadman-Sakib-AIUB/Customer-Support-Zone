import React, { use } from 'react';
import States from './States';
import Container from './Container';
import TicketsCard from './cards/ticketsCard';

const TicketContainer = ({ticketsPromise}) => {

    const tickets = use(ticketsPromise);



    return (
        <div>
            <Container>
            <States></States>

            <section className=' grid grid-cols-1 md:grid-cols-12 gap-5 mt-12'>


                <div className=' col-span-9'>

                    <p className=' text-2xl font-bold mb-5'>
                        Customer Tickets
                    </p>

                    <div className=' space-y-3 grid grid-cols-1 gap-4 md:grid-cols-2'>
                        {
                            tickets.map(ticket => <TicketsCard ticket={ticket}></TicketsCard>)
                        }
                    </div>

                </div>

                <div className=' col-span-3'>
                    <p className='text-2xl font-bold'>Task Status</p>
                    <p className='text-2xl font-bold'>Resolve Task</p>
                </div>

            </section>

            </Container>
        </div>
    );
};

export default TicketContainer;