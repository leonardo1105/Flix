import React from 'react';
import { BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import Movies from './Components/Movies.js';
import Home from './Components/Homepage.js';
import Series from './Components/Series.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle=createGlobalStyle`
   margin:0;
   padding:0;
   box-sizing: border-box;
`

export default class App extends React.Component{
   render(){
      return(
         <Router>
            <GlobalStyle/>
            <h2><Link to='/movies'>Filmes</Link></h2>
            <h2><Link to='/series'>Séries</Link></h2>
            <Routes>
               <Route path='/movies' element={<Movies/>}/>
               <Route path='/' element={<Home/>}/>
               <Route path='/series' element={<Series/>}/>
            </Routes>
         </Router>
      )
   }
}