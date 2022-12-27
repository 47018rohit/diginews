import React, { Component } from 'react'


export class NewsDetails extends Component {
    render() {
        let { title, discription, imageUrl, url, author, date, source } = this.props
        return (
            <div className="card my-3" style={{ height: '30rem' }}>
                <span className="position-absolute top-0 translate-middle " style={{left:'90%'}}>
                    <span className="badge bg-info text-dark">{source}</span>
                </span>
                <img src={!imageUrl ? "https://cdn.allthings.how/wp-content/uploads/2021/07/allthings.how-how-to-get-classic-context-menu-of-file-explorer-back-in-windows-11-file-explorer-menu-759x427.png?width=600" : imageUrl} className="card-img-top" style={{ overflow: 'auto' }} alt="..." />
                <h5 className="card-title">{title}</h5>
                <div className="card-body" style={{ overflow: 'auto' }}>
                    <p className="card-text" >{discription}</p>
                    <p className="card-text"><small className="text-muted">By: {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a href={url} className="btn readMore" target='_blank' rel="noopener noreferrer">Read more..</a>
                </div>
            </div>

        )
    }
}

export default NewsDetails

