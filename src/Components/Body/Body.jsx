import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';
import logo from './image.png';

class Header extends Component {

    render() {
        return (
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Image className="image" src={logo} alt="Logo" fluid />
                    <p className="texte">Breakfast, c’est dans un premier temps une atmosphère, une façon très particulière de vivre sa vie. Mais c’est aussi une vision du monde et des points communs qui ont rassemblé un groupe d’amis en vue de construire un collectif créatif mêlant art et musique.</p>
                </Col>
            </Row>
                
            
            
            
        );
    }
}

export default Header;