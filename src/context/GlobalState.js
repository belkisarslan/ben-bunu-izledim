import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

const initialState = {
  watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")) : [],
  watched: []
}

export const GlobalProvider =(props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList))
  }, [state])
  
  
  const addMovieToWatchList = (movie) => {
    dispatch({type: "ADD_MOVİE_TO_WATCHLİST", payload: movie})
  }

  const addMovieToWatched = (movie) => {
    dispatch({type: "ADD_MOVİE_TO_WATCHED", payload: movie})
  }

    return(
        <GlobalContext.Provider value={{
          addMovieToWatchList,
          addMovieToWatched,
          watchList: state.watchList,
          watched: state.watched,
          }}>
          {props.children}
        </GlobalContext.Provider>
    )
}