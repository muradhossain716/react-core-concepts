import React from "react";
import Card from 'react-bootstrap/Card';

export default function Card3(){
    return(
    <div>
        <h1 className="bg-primary" style={{width:"400px"}}>Card Using Bootstrap</h1>
        <Card  bg='warning' text="white" style={{width:'300px'}} className='mb-2'>
            <Card.Header>Header</Card.Header>
            <Card.Body>
            <Card.Title> Card Title </Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
    )
}