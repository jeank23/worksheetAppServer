import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

const Landing = () => <div>Landing</div>;
const Dashboard = () => <h3>Dashboard</h3>;

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route path="/dashboard" component={Dashboard} />
                    </div>
                </BrowserRouter>   
            </div>
        );
    }
}

export default connect(null, actions)(App);