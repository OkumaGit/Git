import { Component } from 'react';
import './App.css';
import Canvas from './Canvas'
import { useState } from 'react';
import { useEffect } from 'react';

// let savedCounter = JSON.parse(localStorage.getItem('Counter'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // componentDidMount() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }
  // componentDidUpdate() {
  //   document.title = `You clicked ${this.state.count} times`;
  // }


  handleClick = (event) => {
    let Counter = parseInt(localStorage.getItem('Counter'));

    if(event.target.id == 'plus') {
      this.setState({counter: this.state.counter =  Counter + 1})
    }
    if (event.target.id == 'minus' && Counter != 0) {
      this.setState({counter: this.state.counter =  Counter - 1})
    }
    if(event.target.id == 'reset') {
      this.setState({counter: this.state.counter = 0})
    }

    localStorage.setItem('Counter', this.state.counter)
    console.log(localStorage.getItem('Counter'))
}

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentDidUpdate() {
    document.addEventListener('click', this.handleClick);
  }

  render() {
    return(
      <div className="App">
        <h1>Counter app</h1>
        {/* <h2>{this.state.counter}</h2> */}
        <h2>{localStorage.getItem('Counter')}</h2>
        <button id="plus" className='button plus' type="button" value="Increase +">Increase +</button>
        <button id="minus" className='button minus' type="button" value="Decrease -">Decrease -</button>
        <button id="reset" className='button reset' type="button" value="Reset">Reset</button>
      </div>
      // <Canvas counter = {this.state.counter}/>
    )
  }
}


export default App;
