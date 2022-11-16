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
            <header className='masthead'>
                <div className='container position-relative'>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                <h1 className="mb-5">Sen Hangilerini İzledin?</h1>
                                <div className='row'>
                                    <div className='col'>
                                        <input className="form-control form-control-lg" type="text" />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Ara</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header