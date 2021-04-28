import React from 'react'
import Data from '../Data'
class Formulaire extends React.Component{
    constructor(props){
        super (props)
        this.state={}
    }
    handeronsubmit= event=>{
        alert("salut")
    }
    handeronchange= event=>{
        console.log(event.target.value)//pour recuperer la valeur qu'on entre dans le label
    }
            render() {
                return(
                    <form className="fml" onSubmit={this.handeronsubmit}>
                     
                        <label for="nom">NOM:</label>
                        <input type="text" name="nom" onChange={this.handeronchange}/> <br/><br></br>
                        <label for="prenom">PRENOM:</label>
                        <input type="text" name="prenom" onChange={this.handeronchange}/><br/><br></br>
                        <label for="nom">EMAIL:</label>
                        <input type="email" name="nom" onChange={this.handeronchange}/><br/><br></br>
                        <label for="ville">VILLE:</label>
                        <input type="text" name="ville" onChange={this.handeronchange}/><br/><br></br>
                        <label for="telephone">TELEPHONE:</label>
                        <input type="number" name="telephone" onChange={this.handeronchange}/><br/><br></br>
                        <button> envoye </button>
                    </form>
                )
            }
            }
            export default Formulaire;