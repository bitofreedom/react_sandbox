import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    countUp() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log(`Callback Value ${this.state.count}`)})
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count: prevState.count + 1 
        }), () => {console.log(`Callback Value ${this.state.count}`)})
        console.log(this.state.count)
    }

    countDown() {
        this.setState({
            count: this.state.count - 1
        }, () => {console.log(`Callback Value ${this.state.count}`)})
        console.log(this.state.count)
    }

    incrementFive() {
        this.countUp()
        this.countUp()
        this.countUp()
        this.countUp()
        this.countUp()
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <div>
            <button onClick={() => this.countUp()}>Count +1</button>
        </div>
        <div>
            <button onClick={() => this.countDown()}>Count -1</button>
        </div>
        <div>
            <button onClick={() => this.incrementFive()}>Count +5</button>
        </div> 
      </div>
    )
  }
}

export default Counter