import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default class News extends Component {
    static defaultProps={
        country:"in",
        pagesize:9,
        category:"",
    }
    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
    }
   
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
   async componentDidMount(){
        console.log("cmd");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let datatojson=await data.json();
        console.log(datatojson);
        this.setState({articles:datatojson.articles,
            totalpages:datatojson.totalResults,
        loading:false})
    }
    handleprevstate=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let datatojson=await data.json();
        console.log(datatojson);
        
        this.setState({
            page:this.state.page-1,
            articles:datatojson.articles,
            loading:false
        })
    }
    handlenextstate=async()=>{
        if(Math.ceil(this.state.totalpages/15)<this.state.page+1){

        }
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let datatojson=await data.json();
        console.log(datatojson);
        
        this.setState({
            page:this.state.page+1,
            articles:datatojson.articles,
            loading:false
        })}
    }
  render() {
    return (
      <div>
       
       {this.state.loading&&<Spinner/>}
        <div className="container my-3">
        <h1>News Headlines</h1>
        
            <div className="row">
                {!this.state.loading&&this.state.articles.map((element)=>{
                   return  <div className="col-md-4" key={element.url}><NewsItem  title={element.title?element.title:"..."} description={element.description?element.description:"..."} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} source={element.source.name}/></div>
                })}
               
               <hr />
            </div>
            
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-link" onClick={this.handleprevstate}>&laquo; Previous</button>
            <button disabled={(Math.ceil(this.state.totalpages/this.props.pagesize))<this.state.page+1} type="button" className="btn btn-link" onClick={this.handlenextstate}>Next &raquo;</button>
            </div>
        </div>
       
      </div>
    )
  }
}
