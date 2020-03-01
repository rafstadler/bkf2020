import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Exhib from "./Components/Exhib/Exhib";
import Members from "./Components/Members/Members";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            page : "ABOUT"
        }
    }
    
    pageCallback = (page) => {
        this.setState({ page: page});
    }
    
    render() {
        return (
        <div className="general">
            <Container>
                <Header callbackpage={this.pageCallback} page={this.state.page}></Header>
                <div className={this.state.page=="ABOUT" ? '' : 'hidden'}>
                    <Body></Body>
                </div>
                <div className={this.state.page=="EXHIBITION" ? '' : 'hidden'}>
                    <Exhib></Exhib>
                </div>
                <div className={this.state.page=="MEMBERS" ? '' : 'hidden'}>
                    <Members></Members>
                </div>
                <Footer></Footer>
            </Container>
        </div>
            
            
                
        );
    }
}

export default App;