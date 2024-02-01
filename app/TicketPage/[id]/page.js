import React from 'react'
import TicketForm from '../../(components)/TicketForm'

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store"
    })
  } catch (error) {
    throw new Error("Failed to get ticket.")
  }

  return res.json();
}

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(param.id);
    console.log(updateTicketData)
  }
  return (
    <TicketForm />
  )
}

export default TicketPage
