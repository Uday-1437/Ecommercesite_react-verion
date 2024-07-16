import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <b className="navbar-brand"> SHOP HERE..! </b>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <Link to='/Product' className="nav-link" >Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Cart' className="nav-link" >Cart </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Login' className='nav-link' > Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Home;