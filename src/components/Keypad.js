import React from 'react'

function Keypad(props) {
    const handleClick = (e) => {
        props.handleClick(e.target.value)
    }

    return (
        <div style={{border: "1px solid black"}}>
            <div className="row">
            <button className="button-wrapper" value="CE" onClick={handleClick}>CE</button>
            <button className="button-wrapper" value="C" onClick={handleClick}>C</button>
            <button className="button-wrapper" value="%" onClick={handleClick}>%</button>
            <button className="button-wrapper" value="/" onClick={handleClick}>/</button>
            </div>

            <div className="row">
            <button className="button-wrapper" value="7" onClick={handleClick}>7</button>
            <button className="button-wrapper" value="8" onClick={handleClick}>8</button>
            <button className="button-wrapper" value="9" onClick={handleClick}>9</button>
            <button className="button-wrapper" value="*" onClick={handleClick}>*</button>
            </div>
            
            <div className="row">
            <button className="button-wrapper" value="4" onClick={handleClick}>4</button>
            <button className="button-wrapper" value="5" onClick={handleClick}>5</button>
            <button className="button-wrapper" value="6" onClick={handleClick}>6</button>
            <button className="button-wrapper" value="-" onClick={handleClick}>-</button>
            </div>
            
            <div className="row">
            <button className="button-wrapper" value="1" onClick={handleClick}>1</button>
            <button className="button-wrapper" value="2" onClick={handleClick}>2</button>
            <button className="button-wrapper" value="3" onClick={handleClick}>3</button>
            <button className="button-wrapper" value="+" onClick={handleClick}>+</button>
            </div>

            <div className="row">
            <button className="button-wrapper" value="0" onClick={handleClick}>0</button>
            <button className="button-wrapper" value="." onClick={handleClick}>.</button>
            <button className="button-wrapper" value="=" onClick={handleClick}>=</button>
            </div>
            
        </div>
    )
}

export default Keypad