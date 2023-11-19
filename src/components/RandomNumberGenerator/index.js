// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateNo = () => {
    this.setState({num: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.generateNo}>
            Generate
          </button>
          <h1 className="heading heading2">{num}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
