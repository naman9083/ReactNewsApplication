import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {

  const [articles,setArticles]= useState([])
  const [loading,setloading]= useState(true)
  const [page,setPage]= useState(1)
  const [totalResults,setTotalResults]= useState(0)
 
    document.title = `TanzXpress-${props.category.charAt(0).toUpperCase() + props.category.slice(1) }`;
const updateNews=async()=> {
     props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
     setArticles(parsedData.articles) 
     setTotalResults(parsedData.totalResults)
     setloading(false)
     props.setProgress(100)
  }
  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line
  },[])

//  const handleNextClick = async () => {
//      setState({
//       page:   page + 1,
//     });
//      updateNews();
//   };
 const fetchMoreData = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalResults(parsedData.totalResults);
    setArticles(articles.concat(parsedData.articles));
  };

  // handlePrevClick = async ()=>{

  //           // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e3f3a884d1144042b59bc43f7391c6b4&page=${  page -1}&pageSize=${props.pageSize}`;
  //         //  setState({loading:true});
  //         // let data = await fetch(url);
  //         // let parsedData = await data.json()
  //         // console.log(parsedData);
  //         //  setState({
  //         //     page:   page - 1,
  //         //     articles: parsedData.articles,
  //         //     loading:false
  //         // })

  //          setState({
  //           page:  page -1 ,
  //         });
  //          updateNews();
  //     }
    return (
      <>
        <h1 className="text-center text-dark" style={{ margin: "35px",marginTop:"90px" }}><strong>
          TanzXpress - Top{" "}
          {`${
             props.category.charAt(0).toUpperCase() +
             props.category.slice(1)
          }`}{" "}
          Headlines{" "}
          </strong>
        </h1>
        {  loading && <Spinner />}
        <InfiniteScroll
          dataLength={  articles.length}
          next={fetchMoreData}
          hasMore={  articles.length !==   totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {  articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      category={props.category}
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
            <button disabled={  page<=1} type="button" className="btn btn-dark" onClick={ handlePrevClick}> &larr; Previous</button>
            <button type="button" disabled={  page + 1 > Math.ceil(  totalArticles/ props.pageSize)} className="btn btn-dark" onClick={ handleNextClick}>Next &rarr;</button>
            </div> */}
      </>
    );
  }
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
