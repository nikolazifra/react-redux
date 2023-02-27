import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>React-Redux sample project</h1>
        <div><p>Hello Eearthlings, I am Redux from Outer space, I come in peace</p></div>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts...</Link>
          </div>
        </div>
      </section>
    </nav>
  )
};

export default Navbar
