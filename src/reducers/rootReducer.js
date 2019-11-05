import { FETCHING_DATA, SUCCESS, FAILURE } from '../actions/index';

//THE SOURCE OF ALL TRUTH
const initialState = {
    data: [],
    isLoading: false,
    message: '',
}

//REDUCER
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_DATA :
            return {
                ...state,
                message: 'Fetching some data...',
                isLoading: true,
            }
        case SUCCESS :
            return {
                ...state,
                data: action.payload.data,
                message: 'Got some data!',
                isLoading: false
            }
        case FAILURE :
            return {
                message: 'Getting data failed',
                isLoading: false
            }
        default :
            return {
                ...state
            }
    }
}