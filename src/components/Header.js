import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue">
          <div className='container'>
            <Link to="/" className="brand-logo">Practice</Link>
          </div>
        </div>
      </nav>
      <div style={{height: 64}}>
      </div>
    </>
  )
}
