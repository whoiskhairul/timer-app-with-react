import './App.css';
import React from 'react';



class App extends React.Component {
  state = {
    count: 0,
  }

  intervalId = null

  increment = () =>{
    this.setState({
      count: this.state.count+ 1
    })
  }
  decrement = () =>{
    if(this.state.count>0){
      this.setState({count: this.state.count-1})
    }
  }
  start = () =>{
    if(this.state.count>0 && !this.intervalId){
      this.intervalId = setInterval(() => {
         this.setState({count: this.state.count-1}, () =>{
          if(this.state.count ===0 ){
            alert('Countdown Finished.')
            clearInterval(this.intervalId)
            this.intervalId = null
          }
        })
      }, 1000);
    }
  }
  stopTimer = () =>{
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }
  reset = () =>{
    if (this.state.count>0){
      this.setState({count: 0})
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }
  render() {
    return (
      <div>
        <div className="container" >
          <h2>Timer</h2>
          <button onClick={this.decrement} className="btn" > - </button>
          <b>{this.state.count}s</b> 
          <button onClick={this.increment} className="btn">+</button>
          <br></br>

          <button onClick={this.start} className="btn">Start</button>
          <button onClick={this.stopTimer} className="btn">Stop</button>
          <button onClick={this.reset} className="btn">Reset</button>


        </div>
      </div>
    )
  }
}

export default App;
