import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from '../components/Persons/Person/'

// **************************************************************
// OLD WAY of creating components:
// 
// 
class App extends Component {
  // this will show the same output but using the state property, if the state values are change the page will get re-render
  state = { persons: [{ name: "max", age: "28", id: 1 }, { name: "manu", age: "30", id: 2 }], otherAttribute: "something", showPersons: false }

  // when assinging a method it becomes a function, it will be a property that witholds a function
  switchNameHandler1 = () => {
    console.log("was clicked!");

    // DON'T DO THIS:  this.state.persons[0].name = "ana"; to change a value of the state
    this.setState({ persons: [{ name: "maximillian", age: "28" }, { name: "ana", age: "320" }] });
  }
  // I could also use the handler to recieve data from a lower component
  switchNameHandler = (data) => {
    console.log("was clicked!");

    // DON'T DO THIS:  this.state.persons[0].name = "ana"; to change a value of the state
    this.setState({ persons: [{ name: data, age: "28" }, { name: data, age: "32" }] });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      console.log("finding PersonIndex id", id);
      return p.id === id;
    });
    console.log("finding PersonIndex id",personIndex );

    const person = { ...this.state.persons[personIndex] }
    console.log("new Person", person);
    // other way to create a copy without spread operators would be with Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    console.log("entry", event.target.value);

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (peronsIndex) => {
    //  this is a bad practice! remember.  this will only make another pointer to the same object and lead to errors along the way.  the state should be updated with unmutable objects.
    // const persons = this.state.persons;

    // this is another the best approach  with slice or with spread operators which are more commun 

    // 1. const persons = this.state.persons.slice();
    // 2.:
    const persons = [...this.state.persons];

    persons.splice(peronsIndex, 1);
    this.setState({ persons: persons })

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (

        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
          {/* This way still hardcoded, so instead of accessing each element of the state we would want to use a map */}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            // click={this.switchNameHandler}

            // to pass down information in the hadler I can use the bind, to bind the "this of the funciton" with the "this of the class"
            click={this.switchNameHandler.bind(this, 'cristina')}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // click={this.switchNameHandler}
            click={this.switchNameHandler.bind(this, 'max!!!!!!!!!!!!!')}
            changed={this.nameChangeHandler} */}
          {/* />   */}

        </div>

      );
    }

    return (
      <div className="App">

        <h1>Hi, I'm a react APP</h1>
        <p>This is really working!</p>

        {/* adding event handler */}
        {/* when assinging the handler do not use () in the end, other wise it will execute the function immediately.  we just want to pass a reference to the function */}
        <button
          style={style}
          // onClick={this.switchNameHandler.bind(this, "brad")}
          onClick={this.togglePersonHandler}>
          Swithch Name
        </button>

        {/* !!!!Another way of dynamicaly adding conditions keeping the code cleaner since ternary conditions can get messy !!!!!*/}
        {persons}



        {/* another sintax is with arrow functions.  this way is not highly recommended because of perfomance. it can be inneficient, the bind sintax will be better*/}
        {/* <button onClick={()=>this.switchNameHandler.bind("brad")}>Swithch Name</button> */}


        {/*  
        /////////////////////////////////////////
        Hard Coded Way of adding elements:
        /////////////////////////////////////////
        */}

        {/* <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            // click={this.switchNameHandler}

            // to pass down information in the hadler I can use the bind, to bind the "this of the funciton" with the "this of the class"
            click={this.switchNameHandler.bind(this, 'cristina')}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // click={this.switchNameHandler}
            click={this.switchNameHandler.bind(this, 'max!!!!!!!!!!!!!')}
            changed={this.nameChangeHandler}
          />

        </div> */}


        {/*  
        /////////////////////////////////////////
        Dynamic way with ternary conditions:
        /////////////////////////////////////////
        */}

        {/* { this.state.showPersons ? 
        
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            // click={this.switchNameHandler}

            // to pass down information in the hadler I can use the bind, to bind the "this of the funciton" with the "this of the class"
            click={this.switchNameHandler.bind(this, 'cristina')}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // click={this.switchNameHandler}
            click={this.switchNameHandler.bind(this, 'max!!!!!!!!!!!!!')}
            changed={this.nameChangeHandler}
          />

        </div> : null
        } */}



      </div>
    );
  }
}


// with hooks:

// const App = props => {
//   // this will show the same output but using the state property, if the state values are change the page will get re-render
//   // this is a hook, use state returns two elements.  1. current state, 2. will always be a function that will let us update the state

//   // OPTION1
//   // let stateArr =useState({ persons: [{ name: "max", age: "28" }, { name: "manu", age: "30" }] })

//   // OPTION2 , with array destructuring
//   let [personState, setPersonState] =useState({ persons: [{ name: "max", age: "28" }, { name: "manu", age: "30" }] })
//   let [otherAttribute, setOtherAttribute] = useState({otherAttribute:"something"});



// // this is a function inside a function
//   const switchNameHandler = () => {
//     console.log("was clicked!");

//     // DON'T DO THIS:  this.state.persons[0].name = "ana"; to change a value of the state
//     //this is what should be done:
//     setPersonState({ persons: [{ name: "maximillian", age: "28" }, { name: "ana", age: "320" }] });
//   }



//   return (
//     <div className="App">

//       <h1>Hi, I'm a react APP</h1>
//       <p>This is really working!</p>

//       {/* adding event handler */}
//       {/* when assinging the handler do not use () in the end, other wise it will execute the function immediately.  we just want to pass a reference to the function */}
//       <button onClick={switchNameHandler}>Swithch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} />

//     </div>
//   );

// }

export default App;
