import React, { Component } from 'react';
import Home from './componentes/Home.js'
import './estilos/App.css'
import ListaPelicula from './componentes/ListaPelicula.js'


class App extends Component{
 constructor(){
  super()
    this.state = {
       buscador: '',
       peliculas: []
    }
    this.apiKey = 'a7befdc011295571b90d272233b77f4e';
 }

 handleSubmit = (e) => {
   e.preventDefault();
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.buscador}`)
     .then(data => data.json())
     .then(data => {
       console.log(data);
       this.setState({peliculas: data.results})
     })
 }
//En el buscador asociar los nombres de cada imagen con el link de las paginas
//paara asi pode hacer la busquedaa! utilizando el metodo
//split - slice para poder cambiar los espacios por guiones..
 handleChange = (e) => {
   this.setState({buscador: e.target.value})

 }

  render(){
  return (
    <div className="App fondo">
      <div>
        <header className="App-header">
         <Home handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </header>
        </div>
        <div>
          <ListaPelicula peliculas ={this.state.peliculas} />
        </div>
    </div>
    );
  }
}

export default App;
