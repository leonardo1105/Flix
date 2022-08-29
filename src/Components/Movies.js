import React from 'react';
import axios from 'axios';
import {Container} from './MoviesStyle.js'
const MyApi_Movies=axios.create({
  baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=941e6353d1c816a3fbe7635fcc19ea82&language=en-US&page=1'
})

export default class App extends React.Component{
  
  state={
    movies:[],
    filtroDeFilmes:[]
  }

  addMovies=async () => {
    const response= await MyApi_Movies.get();
    const Infos= response.data.results.map((item)=> {
      return{name:item.title,sinopse:item.overview,image:`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
    })
    this.setState({movies:Infos})
  }
  filtrarFilmes=(event) => {
    const FiltrandoFilmes = this.state.movies.filter(item =>{
      if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
        return true
      }else{
        return false
      }
    })
    console.log(FiltrandoFilmes)
    this.setState({filtroDeFilmes:FiltrandoFilmes})
  }


  componentDidMount(){
    this.addMovies();
  }
  render(){
    return(
      <Container>
        <input onChange={this.filtrarFilmes}/>
        <div>{this.state.filtroDeFilmes.map(item=>(
          <>
            <h2>{item.name}</h2>
            <img src={item.image} alt='pôster'/>
            <p>{item.sinopse}</p>
          </>
        ))}</div>
      </Container>
    )
  }
}