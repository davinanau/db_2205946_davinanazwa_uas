import React, { Component } from 'react';
import '../styles/header.css'; 
import icon from '../assets/icon.png'; 

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar bg-peach">
                        <div>
                            <a href="/" className="navbar-brand">
                                <img
                                    src={icon}
                                    alt="Icon"
                                    className="icon"
                                    style={{ width: '90px', height: 'auto' }}
                                />
                                Puskesmas Davina
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
