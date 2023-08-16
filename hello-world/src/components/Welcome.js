import React, { Component } from "react";

/**
 * @description Class Components - Only use these for complex UI logic
 * Maintain their own private 'state'
 * Provide lifecycle 'hooks'
 * Known as 'stateful', 'smart', or 'container' components
 */

class Welcome extends Component {
    render() {
        return (
            <h1>
                Class Component
            </h1>
        )
    }
}

export default Welcome