import React, { Component } from 'react'
import NewsDetails from './NewsDetails'
import PropTypes from 'prop-types'

export class NewsSection extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    articles = [];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }

    }

    async componentDidMount(pageSize) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=019cb77b61e1487fb97e34a01c6419ed&page=${pageSize}&pagesize=9`;

        let response = await fetch(url)
        let newsData = await response.json();
        this.setState({ articles: newsData.articles, totalResults: newsData.totalResults });
    }

    handlePrevClick = () => {
        let pageSize = this.state.page - 1;
        this.componentDidMount(pageSize)
        this.setState({ page: this.state.page - 1 })
    }
    handleNextClick = () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {

        }
        else {
            let pageSize = this.state.page + 1;
            this.componentDidMount(pageSize)
            this.setState({ page: this.state.page + 1 })
        }
    }
    render() {
        return (
            <div className='container my-5 ' >
                <h1 className="text-center" style={{ margin: '10% 0px 4% 0px' }}>DigiNews {this.props.heading}</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsDetails title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} />
                        </div>
                    })}
                </div>
                <div className="btn d-md-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)} type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default NewsSection
