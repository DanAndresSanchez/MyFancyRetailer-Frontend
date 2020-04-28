/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';
import LandingPage from "./views/examples/LandingPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SignInPage from "./views/SignInPage";
import RegisterPage from "./views/examples/RegisterPage";
import AllProductsPage from "./views/AllProductsPage";
import SingleProductPage from "./views/SingleProductPage";

class App extends Component {
    constructor() {
        super();
        this.state ={
            isSignedIn: false,
            user: {
                Fname: '',
                Lname: '',
                caddress: '',
                ccity: '',
                cstate: '',
                czip: ''
            }
        }
    }

    loadUser = (data) => {
        this.setState({
            Fname: data.Fname,
            Lname: data.Lname,
            caddress: data.caddress,
            ccity: data.ccity,
            cstate: data.cstate,
            czip: data.czip
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" render={props => <LandingPage isSignedIn={this.state.isSignedIn} {...props} />} />
                    <Route
                        exact={true}
                        path="/signin"
                        render={props => <SignInPage isSignedIn={this.state.isSignedIn} loadUser={this.loadUser} {...props} />}
                    />
                    <Route
                        path="/landing-page"
                        render={props => <LandingPage {...props} />}
                    />
                    <Route
                        exact={true}
                        path="/products"
                        render={props => <AllProductsPage {...props} />}
                    />
                    <Route
                        exact={true}
                        path="/register-page"
                        render={props => <RegisterPage isSignedIn={this.state.isSignedIn} loadUser={this.loadUser}{...props} />}
                    />
                    <Route
                        exact={true}
                        path="/products/:UPC"
                        render={props => <SingleProductPage {...props} />}
                    />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;