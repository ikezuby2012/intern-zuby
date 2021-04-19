import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import "../App.css";
import main from "./main";
import activity from "./Activity";
import wallet from "./wallet";
import market from "./market";
import earn from "./earn";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path={"/"} component={main}/>
                <Route exact path={"/activity"} component={activity}/>
                <Route exact path={"/wallet"} component={wallet}/>
                <Route exact path={"/market"} component={market}/>
                <Route exact path={"/earn"} component={earn}/>

            </BrowserRouter>
        );
    }
}

export default App;
