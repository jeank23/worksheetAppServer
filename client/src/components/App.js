import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Landing = () => <div>Landing</div>;
const Dashboard = () => <h3>Dashboard</h3>;

const App = () => {
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

export default App;