import React from 'react';
import '../estilos/ListaPelicula.css'

const ListaPelicula = ( props ) => {
   //const peliculas = props.peliculas;
	return(
      <div className="row justify-content-center"> 
        <div className="col-12 p-5 row">
             {
                  props.peliculas.map(pelicula =>{
                      const imagen = pelicula.poster_path;
                      //console.log(imagen);
                        return(
                            <React.Fragment key={pelicula.id} >
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> 
                                  <div className="card">

                                    {
                                      imagen == null ? <img src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg" alt="card" className="card-img-top"/>:<img src={`http://image.tmdb.org/t/p/w185${pelicula.poster_path}`} alt="card" className="card-img-top" />
                                      //Agregar  el  la  variable  del  nombre  de  la  pelicula..
                                    }
                                     
                                  </div> 
                                </div> 
                            </React.Fragment>
                        )
                  })
             } 
        </div>     
      </div>
       	
	)

}

export default ListaPelicula;