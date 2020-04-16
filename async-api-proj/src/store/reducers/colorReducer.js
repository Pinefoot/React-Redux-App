

const initialState = {
    color: '',
    isFetching: false,
    error: '',


}

export const colorReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_COLOR_START':
            return{
                ...state,
                isFetching: true
            }
        case 'FETCH_COLOR_SUCCESS':
            return{
                ...state,
                isFetching: false,
                color: action.payload,
                error: ''
            }    
        case 'FETCH_COLOR_FAILED':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: return state;
    }
}