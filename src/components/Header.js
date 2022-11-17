import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
   
    return (
        <>
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#!">Ben Bunu İzledim!</a>
                    <div className='brand'>
                        <Link to={"/"}>İzlenecekler</Link>
                    </div>
                    <ul className='nav-links'>
                        <li>
                            <Link to={"/Watched"}>İzlenenler</Link>
                        </li>
                        <li>
                            <Link to={"/Add"}><span className="material-symbols-outlined">
                                note_add
                            </span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
           
           
        </>
    )
}

export default Header