import React from 'react'
import TicketForm from '../../(components)/TicketForm'

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store"
    })
    return res.json();
  } catch (error) {
    throw new Error("Failed to get ticket.")
  }
}

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    const fetchData = await getTicketById(params.id);
    updateTicketData = fetchData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new"
    }
  }
  return (

    <TicketForm ticket={ updateTicketData } />
  )
}

export default TicketPage
