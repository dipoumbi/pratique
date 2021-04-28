import { render } from "@testing-library/react"
import { Component } from "react"
class Home extends Component{
constructor(props){
    super(props)
    this.state ={
        house:this.props.house
      }
}

render(){
  return(

<div className="Home">
    <ul>
        <li> {this.props.salon} salon </li>
        <li> {this.props.chambre} chambre </li>
        <li> {this.props.cuisine} cuisine</li>
        <li> {this.props.douche} douche </li>
        <li> {this.props.piscine} piscine </li>
        <li> {this.props.terrase} terrase</li>
    </ul>
</div>
    )
}
}