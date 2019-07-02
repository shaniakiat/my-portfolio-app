import React, {Component} from 'react';
import Background from './img/bg1-01.png';
import './Header.css';

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: '60vh',
    backgroundSize: 'cover'
}

class Header extends Component {
    render() {
        
        return(
            <header style={myStyles}>
                <h1>{this.props.title}</h1>
                <p>Welcome to My Portfolio</p>
                <a href='#button'>{this.props.button}</a>
            </header>
        );
    }
};

export default Header;
