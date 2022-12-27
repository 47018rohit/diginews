import React, { Component } from 'react'
import NewsDetails from './NewsDetails'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `DigiNews - ${this.props.heading}`
    }

    async componentDidMount() {
        this.props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=9`;
        this.props.setProgress(20)
        let response = await fetch(url)
        this.props.setProgress(50)
        let newsData = await response.json();
        this.props.setProgress(80)
        this.setState({
            articles: newsData.articles,
            totalResults: newsData.totalResults
        });
        this.props.setProgress(100)
    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=019cb77b61e1487fb97e34a01c6419ed&page=${this.state.page + 1}&pagesize=9`;
        let response = await fetch(url)
        let newsData = await response.json();
        this.setState({
            articles: this.state.articles.concat(newsData.articles),
            totalResults: newsData.totalResults ,
            page: this.state.page + 1
        });
    }


    render() {
        return (
            <>
                <div className="heading-container">
                    <h1 className="text-center" >DigiNews- {this.props.heading}</h1>
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                // loader={<h4>Loading...</h4>}
                >
                    <div className='container my-5 ' >
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsDetails title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default NewsSection

