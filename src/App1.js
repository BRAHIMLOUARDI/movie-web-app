import React from 'react';
import './App.css';
import car from './logo192.png'

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: 1, magic: 0, img: { title: "react ", dure: "1h", src: "./logo192.png" } };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.magic = this.magic.bind(this);
    this.goback = this.goback.bind(this);


    // this.handleClick = this.handleClick.bind(this);
  }
  goback() {
    this.setState(prev => ({
      magic: 0
    }))
  }
  decrease() {
    if (this.state.like !== 0) {
      this.setState(prev => ({
        like: (prev.like - 1)
      }))
    }

  }
  magic() {
    this.setState(prev => ({
      magic: 1
    }))
  }
  increase() {
    this.setState(prev => ({
      like: (prev.like + 1)
    }))
  }
  render() {
    if (this.state.magic === 1) {
      return (
        <>
          <h1> {this.state.like}{(this.state.like === 1 || this.state.like === 0) ? ' like' : ' likes'}  </h1>
          <h1>{this.state.img.title}</h1>
          <h1>{this.state.img.dure}</h1>
          <button onClick={this.increase}>click here to increase likes</button>
          <button onClick={this.decrease}>click here to decrease likes</button>


          <button onClick={this.goback}>go back </button>

        </>
      )

    }
    else {
      return (
        <div className="hhhh">
          <h1> {this.state.like}{(this.state.like === 1 || this.state.like === 0) ? ' like' : ' likes'}  </h1>
          <button onClick={this.increase}>click here to increase likes</button>
          <button onClick={this.decrease}>click here to decrease likes</button>
          <img src={car} onClick={this.magic} alt="hhhhhhhhhhhh" Id={this.state.like} />


        </div>

      )

    }

  }


}

export default App1;
