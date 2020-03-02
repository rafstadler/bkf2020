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
import exhib1 from './exhib1.png';
import exhib2 from './exhib2.png';
import exhib3 from './exhib3.png';
import exhib4 from './exhib4.png';

class Header extends Component {

    render() {
        return (
            <div>
                
                <Row className="intro">
                    <Col md={{ span: 8, offset: 2 }}>
                        <p className="texte">Les Breakfast Exhibitions, organisées par ce groupe d’amis, consistent à vous faire découvrir cette atmosphère en mélangeant leurs peintures, leurs musiques et leur marque de vêtements à l’aide de la promotion de ses différents produits, tout cela dans une salle décorée afin qu’elle reflète au mieux leur univers.</p>
                        <p className="texte">Le but étant d’attirer la jeunesse dans nos évènements et de leur offrir notre vision de l’art urbain. Le but du projet étant de montrer qu’il n’y a pas de limite à la création et que chacun peut créer autant qu’il le souhaite. Que cette création soit l’essence même de l’humanité car elle permet de laisser une trace dans l’histoire. C’est ce que nous souhaitons : laisser une trace dans l’histoire en partageant notre univers aux autres. </p>
                    </Col>
                </Row> 
                
                <Image className="image" src={barre} fluid></Image>
                
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Row className="expo">
                    <Col md="5"></Col>
                    <Col><h1>BREAKFAST LEGACY</h1></Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Image className="image" src={legacy1} fluid></Image>
                    </Col>
                    <Col>
                        <Image className="image" src={legacy2} fluid></Image>
                        <p className="texte">L'exposition Legacy consistait à mélanger les peintures de l'artiste Emota et de Ludovic Garni, la musique du producteur et Dj Charles Offmann, la marque de vêtements Breakfast Paris à l'aide de la promotion de ses différents produits, tout cela dans une salle décorée afin qu'elle reflète au mieux notre univers.En l'honneur de notre première exposition, la Bkf a décidé d’ offrir le Legacy ( l'héritage ) à  travers des textes explicatifs et une vidéo permettant de comprendre  notre atmosphère. </p>
                    </Col>
                </Row> 
                    </Col>
                </Row>
                
                <Image className="image" src={barre} fluid></Image>
                
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                    <h1>EXPOSITION BKF x BDA</h1>
                <Row>
                    <Col md="6">
                        <Image className="image" src={bda1} fluid></Image>
                        <p className="texte">L’exposition Bkf x BDA fut orgranisé entre le collectif créatif Breakfast et le Bureau des Arts de l’école de commerce INSEEC BS. Ayant pour but de mêler le concept d’afterwork et d’exposition, cet évènement a su rassembler à la fois étudiants et habitués du bar Le POint Éphémère tout cela dans une salle décorée à la manière « Bkf ».</p>
                    </Col>
                    <Col>
                        <Image className="image" src={bda2} fluid></Image>
                    </Col>
                </Row> 
                    </Col>
                </Row>
                
                <Image className="image" src={barre} fluid></Image>
                
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Row className="expo">
                    <Col md="3"></Col>
                    <Col><h1>BREAKFAST EXHIBITION PART.1</h1></Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Image className="image" src={exhib1} fluid></Image>
                    </Col>
                    <Col>
                        <Image className="image" src={exhib2} fluid></Image>
                        <p className="texte">La Breakfast Exhibition Part.1 était une exposition sur le thème de la Femme,  cet être magnifique qui procure à la fois amour et inspiration à chacun d’entre nous.  Nous avions également mis en place un défilé de mode afin de présenter notre nouvelle collection de vestes en  jean customisées  par les membres du collectif.</p>
                    </Col>
                </Row> 
                    </Col>
                </Row>
                
                <Image className="image" src={barre} fluid></Image>
                
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                    <h1>BREAKFAST EXHIBITION PART.2</h1>
                <Row>
                    <Col md="6">
                        <Image className="image" src={exhib3} fluid></Image>
                        <p className="texte">Le Lundi 06 Janvier a eu lieu la Breakfast Exhibition dans ce lieu mythique qu’est le Point Éphémère (200 quai de Valmy 75010). Cette exposition, rassemblant les artistes du groupe Bkf ainsi que Wate en invité, a eu pour but de vous dévoiler les nouveaux travaux de ces artistes tout en restant fidèle à l’atmosphère bkf.</p>
                    </Col>
                    <Col>
                        <Image className="image" src={exhib4} fluid></Image>
                    </Col>
                </Row> 
                    </Col>
                </Row>
                
            </div>
            
        );
    }
}

export default Header;