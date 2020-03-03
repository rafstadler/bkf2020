import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Members.css';
import droite from './flechedroite.png';
import gauche from './flechegauche.png';
import dudu from './dudu.png';
import tchap from './tchap.png';
import emota from './emota.png';
import insta from './insta.png';


class Header extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            dudu : {
                name : "Ludovic Garni",
                image : dudu,
                story : "Ludovic Garni, membre fondateur du collectif créatif Breakfast Paris, est un artiste s’inspirant du style impressionnisme et du réalisme afin de réaliser des tableaux de paysages et d’autres de femmes : deux éléments primordiaux l’inspirant dans sa vie de tous les jours.\nIl est également gérant de la marque de vêtements Breakfast Paris en tant que Brand Manager mais aussi Art Director et Project Manager pour la mise en place des Breakfast Exhibitions. ",
                insta : "dududavies_"
            },
            emota : {
                name : "EMOTA",
                image : emota,
                story : "Emota, membre fondateur de la marque Breakfast Paris, est un artiste accompli en tant que chanteur, peintre et tatoueur. Il réalise des tableaux s’inscrivant dans le style cubisme tout en s’inspirant de masques africains, de forme géométrique qu’il retravaille à sa manière dans un mélange formant des personnages défigurés tout cela afin de créer son propre style. Emota puise son inspiration principalement dans la faune et la flore tout en les ralliant à la femme et à ses personnages aux masques africains.",
                insta : "emota.lov"
            },
            tchap : {
                name : "TCHAP",
                image : tchap,
                story : "Tchap, membre fondateur du collectif créatif Breakfast Paris, est un rappeur, event planner et commercial . Tout en participant au bon fonctionnement de la marque Breakfast Paris et de la mise en place des évènements avec Ludovic Garni, Tchap est aussi un rappeur avec ces derniers titres tels que Trouble, En Scène ou encore Replay.",
                insta : "tchap.bkf"
            },
            
            actuel: ""
        };

        this.state.actuel=this.state.dudu;
    }



    next = () => {
        if(this.state.actuel.name == "Ludovic Garni" ){
            this.setState({ actuel: this.state.emota});
        }else if(this.state.actuel.name == "EMOTA" ){
            this.setState({ actuel: this.state.tchap});
        }else if(this.state.actuel.name == "TCHAP" ){
            this.setState({ actuel: this.state.dudu});
        }
    }
    
    previous = () => {
        if(this.state.actuel.name == "Ludovic Garni" ){
            this.setState({ actuel: this.state.tchap});
        }else if(this.state.actuel.name == "EMOTA" ){
            this.setState({ actuel: this.state.dudu});
        }else if(this.state.actuel.name == "TCHAP" ){
            this.setState({ actuel: this.state.emota});
        }
    }

    render() {
        return (
            <div className="general-members">
                <h2 className="d-md-none d-sm-block members">{this.state.actuel.name}</h2>
                <Row className="align-items-center">
                    <Col md="1" className="d-none d-sm-none d-md-block">
                        <Image src={gauche} fluid onClick={() => this.previous()}></Image>
                    </Col>
                    <Col md="4">
                        <Image className="image-members" src={this.state.actuel.image} fluid></Image>
                    </Col>
                    <Col md="6">
                        <h1 className="d-none d-sm-none d-md-block members">{this.state.actuel.name}</h1>
                        <p className="texte-members">{this.state.actuel.story}</p>
                        <Row className="align-items-center">
                            <Col xs="2" >
                                <Image src={insta} fluid></Image>
                            </Col>
                            <Col >
                                <h4 className="members">{this.state.actuel.insta}</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="1" className="d-none d-sm-none d-md-block">
                        <Image src={droite} fluid onClick={() => this.next()}></Image>
                    </Col>
                </Row>
                <Row className="d-md-none d-sm-block fleche-mobile">
                        <Col xs="3"></Col>
                        <Col xs="3" >
                            <Image src={gauche} fluid onClick={() => this.previous()}></Image>
                        </Col>
                        <Col xs="3" >
                            <Image src={droite} fluid onClick={() => this.next()}></Image>
                        </Col>
                </Row>
            </div>
        );
    }
}

export default Header;