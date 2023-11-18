// Write your code here
import './index.css'

const RandomNumberGenerator = () => {
  let num = 0
  const generateNo = () => {
    num = Math.ceil(Math.random() * 100)
  }

  return (
    <div className="bg-container1">
      <div className="bg-container2">
        <h1 className="heading">Random Number</h1>
        <p className="para">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="button" type="button" onClick={generateNo}>
          Generate
        </button>
        <h1 className="heading heading2">{num}</h1>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
