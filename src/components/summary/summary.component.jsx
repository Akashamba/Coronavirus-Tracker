import React from 'react';
import {Card, CardText, CardBody, Row, Col, CardTitle} from 'reactstrap';
import './summary.styles.css';

const Summary = ({ summary }) => {

    summary = summary.filter(element => element.name === 'TT')[0]

    if(summary) {
        return (
            <Row className='summary'>
                {
                    Object.keys(summary).filter(key => key !== 'name')
                    .map(key => (
                        <Col key={key} className='column' xs={6} md={3}>
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        {key[0].toUpperCase() + key.substring(1)}
                                    </CardTitle>
                                    
                                    <CardText>
                                        {summary[key][0]}
                                        <span className='changes'>Today: {summary[key][1]}</span>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        );
    }
    return (<div></div>);
}

export default Summary;