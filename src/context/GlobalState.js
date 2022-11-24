import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

const initialState = {
  watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
}

export const GlobalProvider =(props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched",JSON.stringify(state.watched))
  }, [state])
  
  
  const addMovieToWatchList = (movie) => {
    dispatch({type: "ADD_MOVİE_TO_WATCHLİST", payload: movie})
  }

  const addMovieToWatched = (movie) => {
    dispatch({type: "ADD_MOVİE_TO_WATCHED", payload: movie})
  }

  const moveToWatchedList = (id) => {
    dispatch({type: "MOVE_TO_WATCHEDLİST", payload: id})
  }

  const deleteMovie = (id) => {
    dispatch({type: "DELETE_MOVİE", payload: id})
  }

    return(
        <GlobalContext.Provider value={{
          addMovieToWatchList,
          addMovieToWatched,
          moveToWatchedList,
          deleteMovie,
          watchList: state.watchList,
          watched: state.watched,
          }}>
          {props.children}
        </GlobalContext.Provider>
    )
}