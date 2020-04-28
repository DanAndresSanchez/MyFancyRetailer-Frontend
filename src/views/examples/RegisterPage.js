import React, { Component} from 'react';
import Navigation from "../../components/Navigation";
import {Container, Input , FormGroup, CardBody, Button, Label, Row, Col, Card, CardTitle} from "reactstrap";
import {Redirect} from "react-router-dom";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Fname: '',
      Lname: '',
      caddress: '',
      ccity: '',
      cstate: '',
      czip: '',
      isRegistered: false
    }
  }

  onFNameChange = (event) =>{
    this.setState({Fname: event.target.value})
  }

  onLNameChange = (event) =>{
    this.setState({Lname: event.target.value})
  }

  onCAddressChange = (event) =>{
    this.setState({caddress: event.target.value})
  }

  onCCityChange = (event) =>{
    this.setState({ccity: event.target.value})
  }

  onCStateChange = (event) =>{
    this.setState({cstate: event.target.value})
  }

  onCZipChange = (event) =>{
    this.setState({czip: event.target.value})
  }

  onSubmitRegister = () => {
    fetch('http://localhost:3000/register-page', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Fname: this.state.Fname,
        Lname: this.state.Lname,
        caddress: this.state.caddress,
        ccity: this.state.ccity,
        cstate: this.state.cstate,
        czip: this.state.czip
      })
    })
        .then(response => response.json())
        .then(user => {
          if(user){
            this.props.loadUser(user);
            this.setState({isRegistered: true})
            console.log('Registered')
          }

          else
            console.log('Could not register')
        })
  }

  render(){
    let pageHeader = React.createRef();
    if(!this.state.isRegistered)
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
                    <Card className={"center text"}>
                      <div className={"motto text-center"}>
                        <CardTitle tag={'h3'}>Please fill out the information to register!</CardTitle>
                      </div>
                      <CardBody>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleEmail">First Name</Label>
                              <Input type="text" id="Fname" placeholder="John" onChange={this.onFNameChange} />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="examplePassword">Last Name</Label>
                              <Input type="text" name="password" id="Lname" placeholder="Smith" onChange={this.onLNameChange}/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                          <Label for="exampleAddress">Address</Label>
                          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" onChange={this.onCAddressChange}/>
                        </FormGroup>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label for="exampleCity">City</Label>
                              <Input type="text" name="city" id="exampleCity" onChange={this.onCCityChange}/>
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label for="exampleState">State</Label>
                              <Input type="text" name="state" id="exampleState" onChange={this.onCStateChange}/>
                            </FormGroup>
                          </Col>
                          <Col md={2}>
                            <FormGroup>
                              <Label for="exampleZip">Zip</Label>
                              <Input type="text" name="zip" id="exampleZip" onChange={this.onCZipChange}/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <div className={"motto text-center"}>
                          <Button type={'submit'} onClick={this.onSubmitRegister}>Register</Button>
                        </div>
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

export default RegisterPage;