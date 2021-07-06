import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {fetchColor} from '../store/actions/colorAction';
import styled from 'styled-components';


// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid yellow;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;



// `

const ColorSchemes = props => {
    useEffect(()=>{
        props.fetchColor();
    },[])






// const Card = styled.div`
//     background-color: 
// `






return (
    <div>
        <h1>Random Color Pallettes Generated Just For You</h1>
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