import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import BitDisplay from './bitcoinDisplay';

function Bitcoin(props) {
    
    useEffect(() => {
        props.getData()
    }, [])
    
    if(!props.data) {
        return <h1>{props.message}</h1>
    }

    if(props.data) {
        return (
        <div>
            <h1>BITCOIN DATA</h1>
            <h1>{props.message}</h1>
            <BitDisplay data={props.data} />
        </div>
        )
    }
}
//MAP STATE TO REDUX STORE
const mapStateToProps = (state) => {
    return {
        ...state,
        data: state.data,
        message: state.message
    }

}

export default connect(mapStateToProps, { getData })(Bitcoin);