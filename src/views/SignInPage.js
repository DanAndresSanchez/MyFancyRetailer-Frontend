import React, { Component} from 'react';
import Navigation from "../components/Navigation";
import {Container, Card, CardTitle, CardBody, Input , FormGroup, Form, Button} from "reactstrap";
import {Link, Redirect} from "react-router-dom";

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            signInID: '',
            signInName: '',
            isSignedIn: props.isSignedIn
        }
    }

    onIDChange = (event) =>{
        this.setState({signInID: event.target.value})
    }

    onNameChange = (event) =>{
        this.setState({signInName: event.target.value})
    }

    onSubmitSignIn = () => {
        var fullName = this.state.signInName.split(" ");
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                customerID: this.state.signInID,
                Fname: fullName[0],
                Lname: fullName[1]
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.customerID){
                    this.props.loadUser(user);
                    this.setState({isSignedIn: true})
                    console.log('Logged in')
                }

                else
                    console.log('Could not log in')
            })
    }

    render(){
        let pageHeader = React.createRef();
        if(!this.state.isSignedIn)
            return(
                <div>
                    <Navigation/>
                    <div
                        style={{
                            backgroundImage: "url(" + require("assets/img/fancy-retailer-background.jpg") + ")"
                        }}
                        className="page-header"
                        data-parallax={true}
                        ref={pageHeader}
                    >
                        <div className="filter" />
                        <Container style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                            <div >
                                <div style={{width: '40rem'}}>
                                    <Card className={"register-card"}>
                                        <div className={'motto text-center'}>
                                            <CardTitle tag={"h3"}>
                                                Welcome! Please sign in.
                                            </CardTitle>
                                        </div>
                                        <CardBody>
                                            <Form>
                                                <FormGroup>
                                                    <FormGroup >
                                                        <label htmlFor="inputEmail4">Full Name</label>
                                                        <Input
                                                            onChange={this.onNameChange}
                                                            id="inputEmail4"
                                                            placeholder="Your Full Name"
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup >
                                                        <label htmlFor="inputPassword4">customerID</label>
                                                        <Input
                                                            onChange={this.onIDChange}
                                                            id="inputPassword4"
                                                            placeholder="Your ID"
                                                            type="password"
                                                        />
                                                    </FormGroup>
                                                </FormGroup>
                                                <FormGroup>
                                                    <div className={"motto text-center"}>
                                                        <Link to={"/signin"}>
                                                            <Button color="primary" type="submit" onClick={this.onSubmitSignIn}>
                                                                Sign in
                                                            </Button>
                                                        </Link>
                                                        <Link to={'/register-page'}>
                                                            <Button style={{marginLeft: '10px'}}>Register</Button>
                                                        </Link>
                                                    </div>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            );
        else
            return(
                <Redirect to={'/'}/>
            );
    }

}

export default SignInPage;