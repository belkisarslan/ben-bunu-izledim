import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const WatchList = () => {
  const {watchList} = useContext(GlobalContext)
  return (
    <div>
      {watchList.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  )
}

export default WatchList