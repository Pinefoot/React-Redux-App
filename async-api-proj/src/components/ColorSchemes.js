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
        {console.log(props.color)}
           {props.color && props.color.map((item, index) =>{
               return (
                <div className= "color-div" key = {index} style={{backgroundColor:`${item}`}}>
                <h3  style={{color:'white'}}>{item}</h3>
                </div>
               )
           })}
        <button onClick={props.fetchColor}>Click for new pallette in like 5 minutes</button>
    </div>
)





}//closes ColorSchemes component

const mapStateToProps = state =>{
    return{
        color: state.colorReducer.color,
        isFetching: state.colorReducer.isFetching
    }
}

export default connect(mapStateToProps, {fetchColor})(ColorSchemes);