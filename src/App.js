
import './App.css';
import React from 'react';
import axios from 'axios'
import Data from '../src/Data'
import { Link } from 'react-router-dom';

class App extends React.Component
{
  constructor(props){
    super(props)
    this.state ={
    tableau : Data
    }

    
  }

  //propriete contenant une fonction avc une var event
  handerimage= event => {
  var link= event.target.src 
  console.log(link)
  if (link==='https://res.cloudinary.com/doratine/image/upload/v1619178408/imagereact/coeur3_ngqpqw.png'){
    event.target.src="https://res.cloudinary.com/doratine/image/upload/v1619178408/imagereact/coeur1_pm3vgi.png"
  }
  else{
    event.target.src='https://res.cloudinary.com/doratine/image/upload/v1619178408/imagereact/coeur3_ngqpqw.png'
  }
 }
  // render permet d'afficher ce qu'on retourne
  render() {
    return(
      <div className= "logement">
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">Recherche</a>
          <div className="" id="navbarText">
           <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">ACCUEIL <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/identite">FORMULAIRE</Link>
          </li>
          
        </ul>
      </div>
    </nav>
        <h1>mes logements</h1>
       
        <div className="d-flex flex-wrap">
      
        {
          //map sert a parcourir le tableau
          this.state.tableau.map((log,index)=>{

       
            return(
             //on retourne les valeurs qui sont dans le tableau pour que ca s'affiche
       <div>
          <Link to={'/detailslog/'+log.id}><img src={log.photo}/></Link>
         
        <div>
        <img src={log.image} onClick={this.handerimage} />
         </div>
         <ul>
          <li>{log.chambres} chambres</li>
          <li>{log.salon} salon</li>
          <li>{log.douche} douche</li>
          <li>{log.cuisine} cuisine</li>
          <li>{log.piscine}piscine</li>
          <li>{log.terrase}terrase</li>
          <li>{log.loyer} loyer</li>
          <li> {log.etat} etat </li>
        </ul>
        </div>
        )
          })
        }
        </div>
      </div>
    )
    
  }
}
export default App;
