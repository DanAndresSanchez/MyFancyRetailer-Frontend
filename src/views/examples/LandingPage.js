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
import React, { Component } from "react";
import axios from 'axios';
// reactstrap components
import {Container, Row, Col} from "reactstrap";

// core components
import Navigation from "components/Navigation.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ProductCard from "../../components/ProductCard";
import Searchbar from "../../components/Searchbar";

class LandingPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  async componentDidMount() {
    const response = await fetch('https://infinite-woodland-98501.herokuapp.com/');
    const data = await response.json();
    this.setState({products: data})
  }


  render() {
    return (
        <>
          <Navigation />
          <br/>
          <br/>
          <br/>
          <LandingPageHeader />
          <div className="main">
            <div className="section text-center">
              <Container>
                <Searchbar/>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <h2 className="title">Best Sellers</h2>
                    <br />
                  </Col>
                </Row>
                <br />
                <br />
                <Row className="justify-content-md-center">
                  {this.state.products.map(product => (
                      <Col sm={{size: "auto"}}>
                        <ProductCard
                            name={product.Pname}
                            price={'$' + product.price}
                            rating={product.rating}
                            amount={product.amount}
                            UPC={product.UPC}
                            key={product.Pname}
                            style={{padding: '1em'}}
                        />
                      </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
          <DemoFooter />
        </>
    );
  }
}

export default LandingPage;
