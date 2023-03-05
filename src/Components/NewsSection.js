import React, { useEffect,useState } from 'react'
import NewsDetails from './NewsDetails'
import InfiniteScroll from "react-infinite-scroll-component";

function NewsSection() {

    const [newsArray, setNewsArray] = useState([])
    const openSeseme = process.env.REACT_APP_DIGINEWS

    useEffect(() => {
        fetchNews();

    }, []);

    const fetchNews = async()=>{
        // console.log(openSeseme)

        const newsData = await fetch(`https://api.newscatcherapi.com/v2/latest_headlines`, {
            method:'GET',
            headers: {
                'x-api-key': openSeseme
            },
        })
        const jsonData = await newsData.json()
        // console.log(jsonData)

        setNewsArray(jsonData.articles)
    }

    return (
        <>
            {/* <div className="heading-container">
                <h1 className="text-center" >DigiNews- { }</h1>
            </div>
            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
            // loader={<h4>Loading...</h4>}
            > */}
            <div className='container my-5 ' >
                <div className="row">
                    {newsArray.map((element) => {
                        return <div className='col-md-4' key={element.link}>
                            <NewsDetails title={element.title ? element.title : ""} discription={element.excerpt? element.excerpt: ""} imageUrl={element.media} url={element.link} date={element.published_date} author={element.author} />
                        </div>
                    })}
                </div>
            </div>
            {/* </InfiniteScroll> */}
        </>
    )
}


export default NewsSection
