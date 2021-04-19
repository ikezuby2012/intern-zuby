import React, { Component } from 'react';
import {
    FaAcquisitionsIncorporated, FaUserCircle, 
     FaBell, FaRecordVinyl
} from 'react-icons/fa';
import {
    BsHouse, BsFillBriefcaseFill
} from 'react-icons/bs';
import { MdAssignment, MdCardGiftcard} from "react-icons/md";
import { RiStore3Line,} from "react-icons/ri";
import { Link } from "react-router-dom";

import Header from "./header";
class main extends Component {
    constructor() {
        super();

        this.state = {
            options: [],
            option: "AFYA"
        }
    }
    render() {
        let options = ["AFYA", "ZAR"];
        let selectOptions = options.map((el, i) => (
            <option key={i} value={el} id={el}>{el}</option>
        ));
        return (
            <div className="container">
                <Header />
        
                <section className="desc">
                    <div className="desc-box">
                        <span className="desc-upper" style={{color: '#ea5974'}}>afya</span>
                        <span className="desc-num">143.00</span>
                        <span className="desc-let">balance</span>
                    </div>
                    <div className="desc-box desc-box-1">
                        <span className="desc-upper" style={{color: '#1764ec'}}>zar</span>
                        <span className="desc-num">r21.00</span>
                        <span className="desc-let">equivalent</span>
                    </div>
                </section>

                <section className="currency">
                    <div className="currency-box">
                        <span style={{color: '#1764ec'}}>select currency:</span>
                    </div>
                    <div className="currency-box-2">
                        <form action="" className="currency-form">
                            <select name="" id="">
                               {selectOptions}
                            </select>
                            <input type="text" placeholder="0.0000001"/>
                            <div className="currency-btns">
                                <input type="submit" value="send" className="currency-button"/>
                                <input type="submit" value="receive" className="currency-button"/>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="activity">
                <div className="currency-box">
                        <span style={{color: ' #f9f7f6'}}>recent activity</span>
                    </div>
                    <ul className="activity-list">
                            <li className="activity-item">
                                <div className="activity-itemBox">
                                    <FaAcquisitionsIncorporated className="header-bell"/>
                                    <span className="desc-let" style={{color: '#333'}}>HIV blood draw Test</span>
                                    <span className="desc-let" style={{color: '#333'}}>a100</span>
                                </div>
                            </li>

                            <li className="activity-item">
                                <div className="activity-itemBox">
                                    <FaAcquisitionsIncorporated className="header-bell"/>
                                    <span className="desc-let" style={{color: '#333'}}>TB Radiology Xray</span>
                                    <span className="desc-let" style={{color: '#333'}}>a30</span>
                                </div>
                            </li>

                            <li className="activity-item">
                                <div className="activity-itemBox">
                                    <FaAcquisitionsIncorporated className="header-bell"/>
                                    <span className="desc-let" style={{color: '#333'}}>Blood Pressure Check</span>
                                    <span className="desc-let" style={{color: '#333'}}>a10</span>
                                </div>
                            </li>
                        </ul>
                </section>

                <section className="footer">
                    <div className="footer-logos">
                        <Link to="/" className="footer-icon" activeClassName="ft-icon">
                            <BsHouse className="footer-logo"/>
                            <span>home</span>
                        </Link>

                        <Link to="/activity" className="footer-icon" activeClassName="ft-icon">
                            <MdAssignment className="footer-logo" />
                            <span>activity</span>
                        </Link>

                        <Link to="/wallet" className="footer-icon" activeClassName="ft-icon">
                            <BsFillBriefcaseFill className="footer-logo"/>
                            <span>wallet</span>
                        </Link>

                        <Link to="/market" className="footer-icon" activeClassName="ft-icon">
                            <RiStore3Line className="footer-logo"/>
                            <span>market</span>
                        </Link>

                        <Link to="/earn" className="footer-icon" activeClassName="ft-icon">
                            <MdCardGiftcard className="footer-logo"/>
                            <span>gift</span>
                        </Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default main;
