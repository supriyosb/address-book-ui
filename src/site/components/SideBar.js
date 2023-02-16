import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar'>
        <ul class='side-menu'>
            <li><Link to="/site/addressbook">Show All Address Book</Link></li>
            <li><Link to="/site/addressbook/create">Create Address Book</Link></li>
            <li><Link to="/site/addressbook/uncommonperson">Show Uncommon Person</Link></li>
        </ul>
    </div>
  )
}

export default SideBar
