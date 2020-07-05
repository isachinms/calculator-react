import React from 'react'
import * as mathjs from 'mathjs'
import { CalcDisplay } from './components/CalcDisplay'
import Keypad from './components/Keypad'
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            result: '',
            isResult: false
        }
    }

    reset = () => { this.setState({ result: ''}) }

    appendDot = () => { this.setState({ result: ".", isResult: false})}

    clearEntry = () => {
        if(this.state.result) {
            this.setState(prevState => ({ result: prevState.result.slice(0,-1)}))
        }
    }

    appendNumber = (val) => {
        this.setState(prevState => ({
            result: prevState.isResult ? val : prevState.result + val,
            isResult: false
        }))
    }

    calculate = () => {
        let result
        try {
            result = String(mathjs.evaluate(this.state.result))
        } catch(err) {
            result = 'bad expression'
        }
        this.setState({ result, isResult: true })
    }

    appendOperator = (operators, sign) => {
        const lastItem = this.state.result.slice(-1)
        if(this.state.result.length) {
            if(operators.includes(lastItem) && lastItem !== sign ) {
                this.setState(prevState => ({ result: prevState.result.slice(0,-1) + sign, isResult: false}))
            } else if(!operators.includes(lastItem)) {
                this.setState(prevState => ({ result: prevState.result + sign, isResult: false}))
            }
        } 
    }

    handleClick = (val) => {
        const operators = ['+', '-', '/', '*', '%']
        if(val === "=") {
            this.calculate()
        } else if (val === "CE") {
            this.clearEntry()
        } else if (val === "C") {
            this.reset()
        } else if (val === "." && this.state.isResult) {
            this.appendDot()
        } else if (operators.includes(val)) {
            this.appendOperator(operators, val)
        } else {
            this.appendNumber(val)
        }
    }

    render() {
        return (
            <div id="container">
                <div className="calculator">
                    <CalcDisplay result={this.state.result} />
                    <Keypad handleClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default App