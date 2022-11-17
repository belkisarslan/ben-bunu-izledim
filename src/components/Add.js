import React, { useState } from 'react'
import "../App.css"

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])

  function onChange(e) {
    setQuery(e.target.value)

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res) => res.json().then((data) => {
      if (!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    }))
  }
  return (
    <>
    <header className='masthead'>
      <div className='container position-relative'>
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              <h1 className="mb-5">Sen Hangilerini İzledin?</h1>
              <div className='row'>
                <div className='col'>
                  <input value={query} onChange={onChange} className="form-control form-control-lg" type="text" placeholder='Film, dizi, oyuncu ara...' />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </header >
      {results.map((movie)=>(
        <p>{movie.title}</p>
      ))}
 </>
  )
}

export default Add