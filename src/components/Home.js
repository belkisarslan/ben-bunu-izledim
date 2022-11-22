import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Home = () => {
  return (
    <section className="page-section clearfix">
    <div className="container">
        <div className="intro">
            <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="https://picsum.photos/id/1078/800/400" alt="..." />
            <div className="intro-text left-0 text-center p-5 rounded">
                <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Ben Bunu İzledim'e</span>
                    <span className="section-heading-lower">Hoş Geldiniz!</span>
                </h2>
                <p className="mb-3">İzlediğiniz ya da izlemek istediğiniz filmleri listeleyin</p>
                <Link to={"/Add"}><div className="intro-button mx-auto"><div className="btn btn-secondary btn-xl" href="#!">Film listeni oluşturmaya başla!</div></div></Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Home