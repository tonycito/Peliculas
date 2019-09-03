import React from 'react';

const Home = ( props ) => {

		return(
		   <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://www.youtube.com/watch?v=3vauM7axnRs&pbjreload=10">Todas las Peliculas</a>
            	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                            <a className="nav-link" href="https://www.youtube.com/watch?v=3vauM7axnRs&pbjreload=10">Home <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="https://www.youtube.com/watch?v=3vauM7axnRs&pbjreload=10">Acción</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="https://www.youtube.com/watch?v=3vauM7axnRs&pbjreload=10">Drama</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="https://www.youtube.com/watch?v=3vauM7axnRs&pbjreload=10">Comedia</a>
                          </li>
                          <li className="nav-item">
                          	<a className="nav-link" href="https://www.youtube.com/watch?v=3vauM7axnRs&pbjreload=10">Guerra</a>
                          </li>	
                        </ul>
                     
            		    <form className="form-inline my-2 my-lg-0" onSubmit={props.handleSubmit}>
              		       <input className="form-control mr-sm-2" type="text" placeholder="Buscar..." onChange={props.handleChange}/>
                           <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
              		</div>
        	  </nav>
        	</div>
		)	
	}

export default Home;
