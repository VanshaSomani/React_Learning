import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
    var users = [
        {
            id : 1,
            name : "raj"
        },
        {
            id : 2,
            name : "ram"
        }
    ]
  return (
    <div>
        <h1>Contact Us</h1>
        <ul class='navbar-nav mr-auto'>
            <li class="nav-item">
                <Link to="/contactus/manager">Manager</Link>
            </li>
            <li class="nav-item">
                <Link to="/contactus/ceo">Ceo</Link>
            </li>
            {
                users.map((user) =>{
                    return <li class="nav-item">
                        <Link to={'/contactus/director/${user.id}'}>{users.name}</Link>
                    </li>
                })
            }
        </ul>
    </div>
  )
}
