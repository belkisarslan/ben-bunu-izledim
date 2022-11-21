import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Home = () => {
  return (
    <section class="page-section clearfix">
    <div class="container">
        <div class="intro">
            <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="https://picsum.photos/id/1078/800/400" alt="..." />
            <div class="intro-text left-0 text-center p-5 rounded">
                <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">Ben Bunu İzledim'e</span>
                    <span class="section-heading-lower">Hoş Geldiniz!</span>
                </h2>
                <p class="mb-3">İzlediğiniz ya da izlemek istediğiniz filmleri listeleyin</p>
                <Link to={"/Add"}><div class="intro-button mx-auto"><a class="btn btn-secondary btn-xl" href="#!">Film listeni oluşturmaya başla!</a></div></Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Home