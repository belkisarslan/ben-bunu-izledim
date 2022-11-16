import React from 'react'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-light bg-light static-top">
                <div class="container">
                    <a class="navbar-brand" href="#!">Ben Bunu İzledim!</a>
                    <div>İzlenecekler</div>
                    <div>İzlenenler</div>
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
                                    <div class="col-auto">
                                        <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Ara</button>
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