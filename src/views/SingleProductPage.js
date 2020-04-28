import React, { Component } from 'react';
import axios from "axios";
import Navigation from "../components/Navigation";
import { UncontrolledCarousel, CarouselCaption, CarouselItem, Row, Col,
    FormGroup, Label, FormText, Input, Button, Container } from 'reactstrap';
import StarRatings from "../components/StarRating";
import StarRating from "../components/StarRating";
import DemoFooter from "../components/Footers/DemoFooter";

class SingleProductPage extends Component{
    constructor(props) {
        super(props);
        this.state ={
            UPC: '',
            Pname: '',
            price: '',
            rating: '',
            amount: '',
            image1: '',
            image2: '',
            image3: ''
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3000/products/'+ window.location.href.slice(-2));
        const data = await response.json();
        await this.setState({UPC: data.UPC})
        await this.setState({Pname: data.Pname})
        await this.setState({price: data.price})
        await this.setState({rating: data.rating})
        await this.setState({amount: data.amount})
        await this.getPic();
    }

    async getPic(){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: this.state.Pname },
            headers: {
                Authorization: 'Client-ID dtaTz_Cge-6eCOjxaNcyFR-H4-nX9fcSzkZfx8B6LfA'
            }
        });
        this.setState({image1: response.data.results[7].urls.regular}) ;
        this.setState({image2: response.data.results[8].urls.regular}) ;
        this.setState({image3: response.data.results[9].urls.regular}) ;
    }



    render(){

        const carouselItems = [
            {
                src: this.state.image1,
                altText: "Slide 1",
                caption: ""
            },
            {
                src: this.state.image2,
                altText: "Slide 2",
                caption: ""
            },
            {
                src: this.state.image3,
                altText: "Slide 3",
                caption: ""
            }
        ];
        return(
            <div>
                <Navigation/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col>
                            <UncontrolledCarousel items={carouselItems} />
                        </Col>
                        <Col>
                            <h2 style={{paddingBottom: '5px'}}>{this.state.Pname}</h2>
                            <div>
                                <Col>
                                    <StarRating rating={this.state.rating} amount={this.state.amount} name={this.state.name}/>
                                </Col>
                            </div>
                            <hr/>
                                <h3>${this.state.price}</h3>
                            <hr/>
                            <Button color="primary" type="submit">
                                Buy Now
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <DemoFooter />
            </div>
        );
    }
}

export default SingleProductPage;