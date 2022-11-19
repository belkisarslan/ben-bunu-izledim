export default (state, action) => {
    switch(action.type){
        case "ADD_MOVİE_TO_WATCHLİST":
            return{
                ...state,
                watchList:[...state.watchList, action.payload]
            }
            default:
                return state;
    }
}