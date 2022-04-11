import React from "react";

const NewsItem =(props)=> {
 
const changeBadgeColor=(category)=>{
    if(category==='general'||category==='science')
        return 'success';
    else if(category==='health')
        return 'danger';
    else if(category==='entertainment')
        return 'warning';
    else if(category==='sports')
        return 'info';
    else
      return 'primary';
   

  }
const changeBadgeColor2=(category)=>{
    if(category==='general')
        return 'danger';
    else if(category==='health')
        return 'success';
    else if(category==='science')
        return 'info';
    else if(category==='entertainment')
        return 'primary';
    else if(category==='sports')
        return 'warning';
    else
      return 'dark';
  
  }
    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ height: "440px", width: "400px" }}>
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
          <span
            className={`badge rounded-pill bg-${ changeBadgeColor(props.category)}`}
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          </div>
          <img
            src={imageURL}
            style={{ height: "200px", width: "398px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text">
              <small className="text-danger">
                By {author} on {date}
              </small>
            </p>
            <div className="d-flex">
              <a
                href={newsURL}
                target="_blank"
                rel="noreferrer"
                className={`btn btn-sm btn-${changeBadgeColor2(props.category)}`}
              >
                Read Details
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;

