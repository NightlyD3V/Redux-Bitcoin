import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCHING_DATA })
    axios.get('https://api.coinlore.com/api/tickers/')
    .then((res) => {
        console.log(res);
        dispatch({
            type: SUCCESS,
            payload: res.data
        })
    })
    .catch((err) => {
        dispatch({
            type: FAILURE,
            payload: err
        })
    })
}

