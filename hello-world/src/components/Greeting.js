import React from 'react'

/**
 * @description Functional Components - Should be used over 'Class' Components whenever possible
 * Does not require use of 'this' keyword (i.e. this.varName)
 * Does NOT require management of 'state'
 * Most commonly-used component type
 * Known as 'stateless', 'dumb', or 'presentational' components
 */

// Traditional function definition
// function Greet() {
//     return <h1>Hello Darrin!</h1>
// }

// ES6 (arrow function) approach
const Greet = (props) => {
console.log(props)
return (
    <div>
        <h1>Hello {props.name}, I understand your favorite color is {props.favColor}?</h1>
        {props.children}
    </div>
)
}

export default Greet