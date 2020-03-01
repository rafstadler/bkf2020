import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Exhib.css';
import logo from './image.png';
import barre from './barre.png';
import legacy1 from './legacy1.png';
import legacy2 from './legacy2.png';
import bda1 from './bda1.png';
import bda2 from './bda2.png';

class Header extends Component {

    render() {
        return (
            <div>
                <div className="intro">
                    <p className="texte">Breakfast, c’est dans un premier temps une atmosphère, une façon très particulière de vivre sa vie. Mais c’est aussi une vision du monde et des points communs qui ont rassemblé un groupe d’amis en vue de construire un collectif créatif mêlant art et musique.</p>
                    <p className="texte">Breakfast, c’est dans un premier temps une atmosphère, une façon très particulière de vivre sa vie. Mais c’est aussi une vision du monde et des points communs qui ont rassemblé un groupe d’amis en vue de construire un collectif créatif mêlant art et musique.</p>
                </div> 
                <Image className="image" src={barre} fluid></Image>
                <Row className="expo">
                    <Col md="5"></Col>
                    <Col><h1>BREAKFAST LEGACY</h1></Col>
                </Row>

                <Row>
                    <Col md="5">
                        <Image className="image" src={legacy1} fluid></Image>
                    </Col>
                    <Col>

                        <Image className="image" src={legacy2} fluid></Image>

                        <p className="texte">Breakfast, c’est dans un premier temps une atmosphère, une façon très particulière de vivre sa vie. Mais c’est aussi une vision du monde et des points communs qui ont rassemblé un groupe d’amis en vue de construire un collectif créatif mêlant art et musique.</p>
                    </Col>
                </Row> 
                <Image className="image" src={barre} fluid></Image>
            </div>
            
        );
    }
}

export default Header;