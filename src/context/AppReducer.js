export default (state, action) => {
    switch(action.type){
        case "ADD_MOVİE_TO_WATCHLİST":
            return{
                ...state,
                watchList:[...state.watchList, action.payload]
            }
        
        case "ADD_MOVİE_TO_WATCHED":
            return{
                ...state,
                watched:[...state.watched, action.payload]
            }
        case "MOVE_TO_WATCHEDLİST":
            return{
                ...state,
                watchList: state.watchList.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watched: [...state.watched, action.payload]
            };
    default:
        return state;    
    }
}