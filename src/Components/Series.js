import React from 'react';
import axios from 'axios';

const MySeries_Api=axios.create({
    baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=941e6353d1c816a3fbe7635fcc19ea82&language=en-US&page=1'
})

export default class App extends React.Component{
    state={
        series:[]
    }
    addSeries=async () => {
        const Response=await MySeries_Api.get()
        console.log(Response)
        const Infos=Response.data.results.map(item=>{
            return{
                name:item.name,sinopse:item.overview,image:`https://image.tmdb.org/t/p/w300/${item.poster_path}`
            }
        })
        this.setState({series:Infos})
    }
    componentDidMount(){
        this.addSeries();
    }
    render(){
        return(
            <>
               <div>{this.state.series.map(item=>(
                  <>
                     <h2>{item.name}</h2>
                     <img src={item.image} alt='pôster'/>
                     <p>{item.sinopse}</p>
                  </>
                  ))}
               </div>
            </>
        )
    }
}