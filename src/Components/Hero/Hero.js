import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Hero.css';
import HeroImage from '../../images/cityscape.png';

class Hero extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return(
            <div className="hero">
                <div className="container">
                    <div className="hero-value" >
                        <h1>Get Live Code Help</h1>
                        <h6>Get unstuck with expert help in any language, now.</h6>
                        <div className="form-container">
                            <form action="https://bonsterxbonster.us2.list-manage.com/subscribe/post" method="POST">
                                <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                                <Input type="hidden" name="id" value="75e70fa2e8" />    
                                <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Your Email"/>
                                <Button type="submit" className="float-left">Try for free</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;