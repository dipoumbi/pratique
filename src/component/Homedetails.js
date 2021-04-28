import React from 'react'
import Data from '../Data'
class Homedetails extends React.Component{
    constructor(props){
        super (props)
        this.state={
            id: this.props.match.params.id,
           logement:[{}]
        }
    }
    componentDidMount() {

   var logements=     Data.filter(value=>{
    return value.id==this.state.id
        })

        this.setState({
            logement:logements
        })
    }
    render(){

        let  log= this.state.logement[0]
        return(
            <div> 
                <h1>bienvenue dans mes logements  </h1>
                <ul>
            <img src={log.photo}/>
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
    }
}
export default Homedetails;
