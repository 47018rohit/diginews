import React, { Component } from 'react'
// import SetMode from '../SetMode'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#293473' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" style={{ color: 'yellow' }} href='/'><strong>Digi<span style={{ color: 'orange' }} >News</span></strong></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" style={{color:'white'}} href='/'>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='/about' style={{color:'white'}}>About</a>
                                </li>
                            </ul>
                            {/* <SetMode /> */}
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
