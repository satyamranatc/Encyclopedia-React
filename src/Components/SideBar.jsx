import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <aside>

      <section>
        <h2>The Encyclopedia</h2>
      </section>
      <section>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/subjects">Subjects</Link></li>
          <li><Link to="/">ABC</Link></li>
        </ul>
      </section>
       
    </aside>
  )
}
