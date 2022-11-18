import React from 'react'

const ResultCard = ({ movie }) => {
  console.log(movie)
  const style = {
    display: "flex",
    marginTop: "50px"
  }
  return (
    <>
      <div className='result-card'>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div style={style}><p>Görsel silinmiş ya da kaldırılmış olabilir</p></div>
        )}
      </div>
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">{movie.title}</h5>
          <h6 class="text-muted fst-italic  mb-2">IMDB: {movie.vote_average}</h6>
        </div>
      </div>

      <div class="d-flex justify-content-between card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div><button class="btn btn-outline-dark mt-auto" href="#">İzledim</button></div>
        <div><button class="btn btn-outline-secondary mt-auto" href="#">İzleyeceğim</button></div>
      </div>
    </>
  )
}

export default ResultCard