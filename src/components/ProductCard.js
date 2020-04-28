import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardImg} from "reactstrap";
import StarRating from "./StarRating";
import Button from "reactstrap/es/Button";
import {Link} from "react-router-dom";

class ProductCard extends Component{
    constructor(props) {
        super(props);
        this.state={
            url: ''
        }
    }

    async getPic(){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: this.props.name },
            headers: {
                Authorization: 'Client-ID dtaTz_Cge-6eCOjxaNcyFR-H4-nX9fcSzkZfx8B6LfA'
            }
        });
        this.setState({url: response.data.results[7].urls.regular}) ;
    }

    render(){
        this.getPic();
        return(
            <Card  style={{width: '15rem'}}>
                <CardImg top height='1rem' src={this.state.url} alt="..."/>
                <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="motto text-center">
                            <CardTitle tag="h3">{ this.props.name }</CardTitle>
                        </div>
                    </a>

                    <StarRating rating={this.props.rating} amount={this.props.amount} name={this.props.name}/>
                    <h5 className="card-description text-center">{ this.props.price }</h5>
                    <div className={'motto text-center'}>
                        <Link to={'/products/'+ this.props.UPC}>
                            <Button>Buy Now</Button>
                        </Link>

                    </div>
                </CardBody>

            </Card>
        );
    }

}

export default ProductCard;