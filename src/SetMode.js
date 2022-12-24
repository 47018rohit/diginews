import React, { Component } from 'react'

export class SetMode extends Component {
    render() {
        return (
            <div>
                <input type="radio" className="btn-check mx-2" name="options" id="option-light" style={common} onChange={toggleLight} checked />
                <label className="btn btn-secondary" htmlFor="option-light">Light</label>

                <input type="radio" className="btn-check mx-2" name="options" id="option-dark" style={common}  />
                <label className="btn btn-secondary" htmlFor="option-dark">Dark</label>

                <input type="radio" className="btn-check mx-2" name="options" id="option-greenYellow" style={common}  />
                <label className="btn btn-secondary" htmlFor="option-greenYellow">G/Y</label>

                <input type="radio" className="btn-check mx-2" name="options" id="option-voiletOrange" style={common} />
                <label className="btn btn-secondary" htmlFor="option-voiletOrange">V/O</label>
            </div>
        )
    }
}

export default SetMode

let common = {
    // aspectRatio: '1/1',
    // width: '20px',
    // borderRadius: '50%',
    // padding: '5px'
}

function toggleLight() {
    
}