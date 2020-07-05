import React from 'react'

export const CalcDisplay = props => {
    return (
        <div className="display">
            <p>{props.result}</p>
        </div>
    )
}