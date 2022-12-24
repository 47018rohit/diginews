import React, { Component } from 'react'
import NewsDetails from './NewsDetails'

export class NewsSection extends Component {
    articles = [];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page:1
        }

    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=019cb77b61e1487fb97e34a01c6419ed&page=${this.state.page}&pagesize=9`;

        let response = await fetch(url)
        let newsData = await response.json();
        this.setState({ articles: newsData.articles });
    }
    
    handlePrevClick=()=>{
        this.setState({page:this.state.page -1})
        console.log('prev')
    }
    handleNextClick=()=>{
        this.setState({page:this.state.page +1})
        console.log('next')
    }

    render() {
        return (
            <div className='container my-5 '>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsDetails title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
                <div className="btn d-md-flex justify-content-between">
                    <button type="button" className="btn btn-outline-info" onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <button type="button" className="btn btn-outline-info" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default NewsSection
