import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({ movie }) => {
  const{addMovieToWatchList, addMovieToWatched} = useContext(GlobalContext)
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
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{movie.title}</h5>
          <h6 className="text-muted fst-italic  mb-2">IMDB: {movie.vote_average}</h6>
        </div>
      </div>

      <div className="d-flex justify-content-between card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div>
          <button onClick={()=>addMovieToWatched(movie)} className="btn btn-outline-dark mt-auto" href="#">İzledim</button>
        </div>
        <div>
          <button onClick={()=>addMovieToWatchList(movie)} className="btn btn-outline-secondary mt-auto">İzleyeceğim</button>
        </div>
      </div>
    </>
  )
}

export default ResultCard