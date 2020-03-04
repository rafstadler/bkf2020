import React, { Component } from 'react';
import {Row,Col,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

class Header extends Component {

    render() {
        return (
            
                <Row>
                    <Col className="header-titre" xs="6" >BREAKFAST</Col>
                    <Col onClick={() => this.props.callbackpage("ABOUT")} className="header-categorie d-none d-sm-none d-md-block">ABOUT</Col>
                    <Col onClick={() => this.props.callbackpage("EXHIBITIONS")} className="header-categorie d-none d-sm-none d-md-block">EXHIBITIONS</Col>
                    <Col onClick={() => this.props.callbackpage("MEMBERS")} className="header-categorie d-none d-sm-none d-md-block">MEMBERS</Col>
                    <Col className="header-drop d-md-none d-sm-block">
                        <NavDropdown title={this.props.page} id="nav-dropdown">
                            <NavDropdown.Item  onClick={() => this.props.callbackpage("ABOUT")}>ABOUT</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.props.callbackpage("EXHIBITIONS")}>EXHIBITIONS</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.props.callbackpage("MEMBERS")}>MEMBERS</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                </Row>
    
        );
    }
}

export default Header;