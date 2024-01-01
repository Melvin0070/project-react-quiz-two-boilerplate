import React, { Component } from 'react'
import "./Quiz.css"
import questions from "../resources/quizQuestion.json"

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state ={
          currentQuestion: 0,
        }
      }
    
      handlePrevious =()=>{
        this.setState((prevState)=>({
          currentQuestion: prevState.currentQuestion - 1,
        }))
      }
    
      handleNext=()=>{
        this.setState((prevState)=>({
          currentQuestion: prevState.currentQuestion + 1,
        }))
      }
      handleQuit = ()=>{
        window.confirm("Do you want to quit?")
      }
  render() {
    const { currentQuestion } = this.state
    const question = {
      ...questions[currentQuestion],
    }
    return (
        <div>
        <div className="question">
          <h1>Question</h1>
          <div>
            <p className='questionNumber'>{currentQuestion+1} of 15</p>
            <h2>{question.question}</h2>
          </div>

          <div className="optionsContainer">
            <button className="option">{question.optionA}</button>
            <button className="option">{question.optionB}</button>
            <button className="option">{question.optionC}</button>
            <button className="option">{question.optionD}</button>
          </div>

          <div className="buttonsBox">
            <button className="previous" onClick={this.handlePrevious} disabled={currentQuestion === 0}>Previous</button>
            <button className="next" onClick={this.handleNext} disabled={currentQuestion === questions.length - 1}>Next</button>
            <button className="quit" onClick={this.handleQuit}>Quit</button>
          </div>
        </div>
      </div>
    )
  }
}