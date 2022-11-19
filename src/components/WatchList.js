import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const WatchList = () => {
  const { watchList } = useContext(GlobalContext)
  const style = {
    display: "flex",
    marginTop: "50px"
  }
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">İzlenecekler</h1>
            <p className="lead fw-normal text-white-50 mb-0">İzlemeni bekleyen birbirinden güzel filmler</p>
          </div>
        </div>
      </header>
      <section className="features-icons bg-light text-center pt-4 ">
        <div className="container">
          {watchList.length > 0 ? (
            <div className="row">
              {watchList.map((movie) => (

                <div className="col-lg-4 border border-secondary rounded mb-4 p-4">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="fw-bolder">{movie.title}</h5>
                      <h6 className="text-muted fst-italic  mb-2">IMDB: {movie.vote_average}</h6>
                    </div>
                  </div>

                  {movie.poster_path ? (
                    <img className='rounded'
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={`${movie.poster_path}`}
                    />
                  ) : (
                    <div style={style}><p>Görsel silinmiş ya da kaldırılmış olabilir</p></div>

                  )}

                </div>

              ))}
            </div>
          ) : (
            <h2>Listenizde Film Yok...</h2>
          )}
        </div>
      </section>
    </>
  )
}

export default WatchList