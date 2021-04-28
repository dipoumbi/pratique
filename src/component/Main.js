import {BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Formulaire from "./Formulaire";
import Homedetails from "./Homedetails";

function Main(){
    return(
        <BrowserRouter>
        <Switch>
           <Route  path= "/listeslogements"> <App/></Route> 
            <Route path= "/detailslog/:id" component={Homedetails}></Route>
           <Route  path= "/identite"> <Formulaire/></Route> 

        </Switch>
        </BrowserRouter>
    )
}
export default Main;