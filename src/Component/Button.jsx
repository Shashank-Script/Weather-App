import React from 'react'

function Button(props) {
    return (
        <button className="bg-blue-500 text-white p-2 rounded mb-2 shadow-lg" onClick={props.onClick}>
            {props.value}
            </button>
    )
}

export default Button
