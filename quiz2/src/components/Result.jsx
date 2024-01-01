import React, { Component } from 'react'
import "./Results.css"

export default class Result extends Component {
  render() {
    return (
      <div className='result'>
        <h1>Result</h1>
        <div className='resultContainer'>
            <h2>You need more practice</h2>
            <h1>Your Score is 20%</h1>
            <div className='stats'>
            <div className='leftStats'>
                <p>Total number of question </p>
                <p>Number of questions attempted</p>
                <p>Number of correct question</p>
                <p>Number of wrong answers</p>
            </div>
            <div className='rightStats'>
                <p>15</p>
                <p>9</p>
                <p>3</p>
                <p>6</p>
            </div>


            </div>
        </div>
        <div className="buttons">
          <button className="play">Play Again</button>
          <button className="home">Back to home</button>
        </div>
        
      </div>
    )
  }
}
