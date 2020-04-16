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
        <h1>Pallette Here:</h1>
        {props.isFetching && (<Loader timeout={3000}/>)}
           {props.color && <h3>"{props.color}"</h3>}
        <button onClick={props.fetchColor}>Click for new pallette</button>
    </div>
)





}//closes ColorSchemes component

const mapStateToProps = state =>{
    return{
        color: state.color,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {fetchColor})(ColorSchemes);