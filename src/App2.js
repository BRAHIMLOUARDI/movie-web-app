import React from 'react';
import App1 from './App1'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operation: '+', value1: 0, value2: 0, value3: 0, scores: [] };
    // this.increase = this.increase.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);

  }
  handleSubmit(event) {
    event.preventDefault();
    let oper = this.state.operation;
    if (oper === '+') {
      this.setState({
        value3: parseInt(this.state.value1) + parseInt(this.state.value2)
      })
    }
    else if (oper === '-') {
      this.setState({
        value3: parseInt(this.state.value1) - parseInt(this.state.value2)
      })
    }
    else if (oper === '/') {
      this.setState({
        value3: parseInt(this.state.value1) / parseInt(this.state.value2)
      })
    } else {
      this.setState({
        value3: parseInt(this.state.value1) * parseInt(this.state.value2)
      })
    }

    this.setState(perv => ({
      scores: [...perv.scores, perv.value3]
    }))
    this.setState({
      value1: 0
    })
    this.setState({
      value2: 0
    })
    this.setState({
      value3: 0
    })

  }
  handleChange1(event) {
    this.setState({ operation: event.target.value });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    if (target.name === "num1") {
      this.setState({
        value1: value
      });
    }
    else {
      this.setState({
        value2: value
      });
    }

  }

  render() {

    return (
      <>
        <App1 className="App1" />
        <form onSubmit={this.handleSubmit}>
          <label>
            num1
        <input type="number" value={this.state.value1} name="num1" onChange={this.handleChange} />
          </label><br />
          <select value={this.state.value} onChange={this.handleChange1}>
            <option selected value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="x">x</option>
          </select><br />
          <label>
            num2
        <input type="number" value={this.state.value2} name="num2" onChange={this.handleChange} />
          </label><br />
          <label>
            resultat
        <input type="text" value={this.state.value3} />
          </label>
          <input type="submit" value="calculete" />
        </form>
        <ul>
          {this.state.scores.map(score => <li>{score}</li>)}
        </ul>
      </>
    )

  }

}




export default App;