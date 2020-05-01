import React, { Component } from 'react';
import ProductCard from "../components/ProductCard";
import { Row, Col , Container, FormGroup, Input, Label } from 'reactstrap';
import Navigation from "../components/Navigation";
import Searchbar from "../components/Searchbar";
import DemoFooter from "../components/Footers/DemoFooter";

class AllProductsPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            products: [],
            searchField: ''
        }
    }


    async componentDidMount() {
        const response = await fetch('https://infinite-woodland-98501.herokuapp.com/products');
        const data = await response.json();
        this.setState({products: data})
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }


    render() {
        const filteredProducts = this.state.products.filter(product => {
            return product.Pname.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(!this.state.products.length)
            return(
                <div>
                    <Navigation/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Got No Products
                </div>)
        else
            return(
                <div>
                    <Navigation/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Container>
                        <Searchbar style={{padding: '20px'}} searchChange={this.onSearchChange}/>
                        <br/>
                            <form>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect1">Department</Label>
                                            <Input type="select" name="select" id="exampleSelect1">
                                                <option>-</option>
                                                <option>Baby</option>
                                                <option>Book</option>
                                                <option>Clothing</option>
                                                <option>Educational</option>
                                                <option>Electronics</option>
                                                <option>Food</option>
                                                <option>Gourmet</option>
                                                <option>Specialty</option>
                                                <option>Toys</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect1">Rating</Label>
                                            <Input type="select" name="select" id="exampleSelect1">
                                                <option>-</option>
                                                <option>4 and up</option>
                                                <option>3 and up</option>
                                                <option>2 and up</option>
                                                <option>1 and up</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="exampleSelect1">Price</Label>
                                            <Input type="select" name="select" id="exampleSelect1">
                                                <option>-</option>
                                                <option>Low To High</option>
                                                <option>High To Low</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </form>
                        <hr/>
                        <Col>
                            <Row className={'justify-content-md-center'} xs={'3'}>

                                {filteredProducts.map(product => (
                                    <Col sm={{size: "3"}}>
                                        <ProductCard
                                            name={product.Pname}
                                            price={'$' + product.price}
                                            rating={product.rating}
                                            amount={product.amount}
                                            key={product.Pname}
                                            UPC={product.UPC}
                                            style={{padding: '1em'}}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                    </Container>
                    <DemoFooter />
                </div>
            )
    }
}

export default  AllProductsPage;