import axios from 'axios';

export const fetchColor = () =>{
    return dispatch => {
        dispatch({type: 'FETCH_COLOR_START'});
        axios.get(`http://palett.es/API/v1/palette`)
        .then(res =>{
            console.log('api',res.data);
            dispatch({type: 'FETCH_COLOR_SUCCESS', payload: res.data})
        }).catch(err=>{
            dispatch({
                type: 'FETCH_C_FAILED',
                payload: `Error ${err.response.status}: ${err.response.data}`
            })
        })
    }
}