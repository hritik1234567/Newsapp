import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsurl,date,source}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="badge text-bg-danger " >{source}</span>
  <img src={!imageurl?"https://imgs.search.brave.com/ABh24Pp6G1v05i68xOYkrlindtGn3IwzZhtUCIGTAHA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMzLmRlcG9zaXRw/aG90b3MuY29tLzEw/MDU0NjAvMjYwL2kv/NjAwL2RlcG9zaXRw/aG90b3NfMjYwNTYw/MS1zdG9jay1waG90/by1sYXRlc3QtbmV3/cy5qcGc":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,45)}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">{new Date(date).toUTCString()}</small></p>
  
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>     
      </div>
    )
  }
}
