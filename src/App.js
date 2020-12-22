import React from 'react';
import Navbar from './components/navbar/navbar.component.jsx';
import World from './pages/world/world.component.jsx';
import India from './pages/india/india.component.jsx';
import District from './pages/district/district.component.jsx';
import Credits from './pages/credits/credits.component.jsx';
import Donate from './pages/donate/donate.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// TODO
//     instructions
//     search bar
//     Dark Mode!!!! Later
//     Animations
//     better indication for sorting
//     charts and graphs ///// buttons for charts
//     reduce cell size

const App = () => (

    <div className='App'>
        <Navbar />
        <br /> 
        <div className='container'>
            <Switch> {/* as soon as one componenet renders, no others are rendered*/}
                <Route exact path='/' component={India} />
                <Route exact path='/global' component={World} />
                <Route exact path='/state/:state' component={District} />                
                <Route exact path='/credits' component={Credits} />
                <Route exact path='/donate' component={Donate} />
                <Route component={India} />
            </Switch>
            <br /><br /><br /> 
        </div>
        <Footer />
    </div>
)



export default App;