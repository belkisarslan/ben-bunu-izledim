export default (state, action) => {
    switch(action.type){
        case "ADD_MOVİE_TO_WATCHLİST":
            return{
                ...state,
                watchList:[...state.watchList, action.payload]
            }
            default:
                return state;
        case "ADD_MOVİE_TO_WATCHED":
            return{
                ...state,
                watched:[...state.watched, action.payload]
            }
    }
}