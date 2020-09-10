import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">

            {/* <p>I'm a person! and I am Math.floor(Math.random()*30) years old!</p>
             <h4>using curly brackets for dynamic content: </h4>
            <p>I'm a person! and I am {Math.floor(Math.random() * 30)} years old!</p> */}

            <div>
                <p>now with props</p>
                <p onClick={props.click}>I'm {props.name}! and I am {props.age} years old!</p>
                <p>{props.children}</p>

                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        </div>

    );
}

export default person;