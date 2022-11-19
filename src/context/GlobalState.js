import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext()

const initialState = {
  watchList: [],
  watched: []
}

export const GlobalProvider =(props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  const addMovieToWatchList = (movie) => {
    dispatch({type: "ADD_MOVİE_TO_WATCHLİST", payload: movie})
  }

    return(
        <GlobalContext.Provider value={{
          addMovieToWatchList,
          watchList: state.watchList,
          
          }}>
          {props.children}
        </GlobalContext.Provider>
    )
}