import React, { Component } from 'react';
import {
    FaAcquisitionsIncorporated, FaUserCircle, 
     FaBell, FaRecordVinyl
} from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <header>
                    <div className="header-div">
                        <div className="header-ribbon">
                            <FaRecordVinyl className="header-record"/>
                            <span>
                                ribbon
                            </span>
                        </div>
                        <div className="header-logos">
                            <div className="header-logo">
                                <FaUserCircle className="header-user"/>
                            </div>
                            <div className="header-logo-1">
                                <FaBell className="header-bell"/>
                            </div>
                        </div>
                    </div>
                </header>
        );
    }
}

export default Header;
