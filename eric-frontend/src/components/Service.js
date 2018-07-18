import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Service extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.services.id,
      name: this.props.services.name,
      description: this.props.services.description,
      duration: this.props.services.duration,
      price: this.props.services.price,
      image: this.props.services.imageUrl
    }
  }

  handleClick = () => {
    console.log(this.state);
  }

  render() {

    return (
      <Col sm="4">
        <Card>
          <CardBody>
            <CardImg top width="100%" src={this.state.image} alt="Card image cap" />
            <CardTitle>{this.state.name}</CardTitle>
            <CardSubtitle>Duration: {this.state.duration} hours | Price: ${this.state.price}</CardSubtitle>
            <CardText>{this.state.description}</CardText>
            <Button href="" onClick={this.handleClick}>Book Now</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Service;