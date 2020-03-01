import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <p className="footer-texte">@BKF 2020 by Stadler Raphael & Garni Ludovic</p>
            </div>
                
        );
    }
}

export default Footer;