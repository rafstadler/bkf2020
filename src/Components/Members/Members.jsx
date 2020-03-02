import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Members.css';
import droite from './flechedroite.png';
import gauche from './flechegauche.png';
import dudu from './dudu.png';


class Header extends Component {

    render() {
        return (
            <Row>
                <Col xs="1">
                    <Image className="image" src={gauche} fluid></Image>
                </Col>
                <Col xs="4">
                    <Image className="image" src={dudu} fluid></Image>
                </Col>
                <Col xs="6">
                </Col>
                <Col xs="1">
                    <Image className="image" src={droite} fluid></Image>
                </Col>
            </Row>
        );
    }
}

export default Header;