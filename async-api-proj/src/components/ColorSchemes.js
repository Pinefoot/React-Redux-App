import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {fetchColor} from '../store/actions/colorAction';

const ColorSchemes = props => {
    useEffect(()=>{
        props.fetchColor();
    },[])


return (
    <div>
        <h1>Colors for your pallette</h1>
        {props.isFetching && (<Loader timeout={3000}/>)}
        <div>
           {props.colors && <h3>{props.colors}</h3>}
        </div>
    </div>
)





}//closes ColorSchemes component

const mapStateToProps = state =>{
    return{
        color: state.data.color,
        isFetching: state.data.isFetching
    }
}

export default connect(mapStateToProps, {fetchColor})(ColorSchemes);