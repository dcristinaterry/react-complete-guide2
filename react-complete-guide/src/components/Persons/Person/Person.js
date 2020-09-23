import React from 'react'
// import './Person.css'
// import Radium from 'radium';
import styled from 'styled-components'

const person = (props) => {


    // const style = {
    //     '@media (min-width:500px)': { width: '450px' }
    // }

    const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid gray;
        box-shadow: 0 2px 3px darkgray;
        padding: 16px;
        text-align: center;


        @media(min-width:500px) {
        width:450px;
        }
    `
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
        {/* // <p>I'm a person! and I am Math.floor(Math.random()*30) years old!</p>
        //  <h4>using curly brackets for dynamic content: </h4>
        // <p>I'm a person! and I am {Math.floor(Math.random() * 30)} years old!</p> */}

        < div >
        <p>now with props</p>
        <p onClick={props.click}>I'm {props.name}! and I am {props.age} years old!</p>
        <p>{props.children}</p>

        <input type="text" onChange={props.changed} value={props.name} />
    </div >
    </StyledDiv>

    );



}

// export default Radium(person);
export default person;