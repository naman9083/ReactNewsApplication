import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    // console.log("Hello! I am a xpressConstructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      apiKey: "e3f3a884d1144042b59bc43f7391c6b4",
      totalResults: 0,
    };
    document.title = `TanzXpress-${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  // handlePrevClick = async ()=>{

  //           // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e3f3a884d1144042b59bc43f7391c6b4&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  //         // this.setState({loading:true});
  //         // let data = await fetch(url);
  //         // let parsedData = await data.json()
  //         // console.log(parsedData);
  //         // this.setState({
  //         //     page: this.state.page - 1,
  //         //     articles: parsedData.articles,
  //         //     loading:false
  //         // })

  //         this.setState({
  //           page:this.state.page -1 ,
  //         });
  //         this.updateNews();
  //     }

  render() {
    return (
      <>
        <h1 className="text-center text-dark" style={{ margin: "35px" }}>
          TanzXpress - Top{" "}
          {`${
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)
          }`}{" "}
          Headlines{" "}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      category={this.props.category}
                      title={element.title ? element.title.slice(0, 57) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageURL={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wHc3OzKebPw9iQ9NMcjKRHSxIFKN2Ds2LQ&usqp=CAU"
                      }
                      newsURL={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={
                        element.publishedAt.slice(0, 10) +
                        " at " +
                        element.publishedAt.slice(11, 16)
                      }
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    );
  }
}

export default News;
