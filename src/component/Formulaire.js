import React from 'react'
import Data from '../Data'
import 'bootstrap/dist/css/bootstrap.min.css'
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
                    <div className="container">
                        <form  className="needs-validation" onSubmit={this.handeronsubmit}>
                        <div className="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" className="form-label">NOM</label>
                            <input type="text" className="form-control"
                            id="firstName" placeholder="entrer votre nom"  required
                            name="nom"
                            onChange={this.handeronchange}
                            name="prenom"
                            />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                            </div>

                            <div className="col-sm-6">
                                <label for="lastName" className="form-label">PRENOM</label>
                                <input type="text" className="form-control" id="lastName" placeholder="entrer votre prenom"required
                                onChange={this.handeronchange}
                                />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <label for="email" className="form-label">Email <span class="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com"
                                name="nom" onChange={this.handeronchange}
                                />
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <label for="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Num tel" required
                                name="ville" onChange={this.handeronchange}
                                />
                                <div class="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                                </div>
                                <div class="col-sm-6">
                                    <label for="ville" className="form-label">Ville  <span class="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Ville habitée"/>
                                </div>
                                
                                <hr class="my-4"/>       
                        
                        </div>
                        <div>
                            <br/>
                            <br/>
                            <button className="w-10 btn btn-primary btn-lg" type="submit">envoye</button>
                        </div>
                    </form>
                    </div>
                )
            }
            }
            export default Formulaire;