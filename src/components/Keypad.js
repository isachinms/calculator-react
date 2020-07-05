import React from 'react'

function Keypad(props) {
    const handleClick = (e) => {
        props.handleClick(e.target.value)
    }

    return (
        <div id="keypad">
            <div className="row">
            <button className="btn operator" value="CE" onClick={handleClick}>CE</button>
            <button className="btn operator" value="C" onClick={handleClick}>C</button>
            <button className="btn operator" value="%" onClick={handleClick}>%</button>
            <button className="btn operator" value="/" onClick={handleClick}>/</button>
            </div>

            <div className="row">
            <button className="btn" value="7" onClick={handleClick}>7</button>
            <button className="btn" value="8" onClick={handleClick}>8</button>
            <button className="btn" value="9" onClick={handleClick}>9</button>
            <button className="btn operator" value="*" onClick={handleClick}>*</button>
            </div>
            
            <div className="row">
            <button className="btn" value="4" onClick={handleClick}>4</button>
            <button className="btn" value="5" onClick={handleClick}>5</button>
            <button className="btn" value="6" onClick={handleClick}>6</button>
            <button className="btn operator" value="-" onClick={handleClick}>-</button>
            </div>
            
            <div className="row">
            <button className="btn" value="1" onClick={handleClick}>1</button>
            <button className="btn" value="2" onClick={handleClick}>2</button>
            <button className="btn" value="3" onClick={handleClick}>3</button>
            <button className="btn operator" value="+" onClick={handleClick}>+</button>
            </div>

            <div className="row">
            <button className="btn" value="0" onClick={handleClick}>0</button>
            <button className="btn" value="." onClick={handleClick}>.</button>
            <button className="btn operator equal" value="=" onClick={handleClick}>=</button>
            </div>
            
        </div>
    )
}

export default Keypad