import React from 'react';
import {CardDeck,Card} from 'react-bootstrap'

const News = (props) => {
    const {title,description,publishedAt,urlToImage} = props.article;
    console.log(props);
    return (
        <CardDeck>
            <Card>
                <Card.Img style={{width: '500px',height: '250px',display: 'block',margin:'auto',marginTop:'20px'}} variant="top" src={urlToImage} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {description} </Card.Text>
                <Card.Text> {publishedAt} </Card.Text>

                
                </Card.Body>
            </Card>

        </CardDeck>
    );
};

export default News;