import Link from 'next/link'
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";


const Nav = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>

      <div>
        <p className="text-default-text">yotu@example.com</p>
      </div>
    </nav>
  )
}

export default Nav
