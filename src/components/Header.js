import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <div className='header'>
                <h1>Header</h1>
            </div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href='#'>
                                Home
                            </a>
                        </li>
                        <li class="navbar-item active">
                            <Link class="nav-link" to="/aboutus">
                                AboutUs
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
