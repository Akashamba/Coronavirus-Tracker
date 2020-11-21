import React, { Component } from 'react';
import statecodes from './statecodes.js';
import Table from '../../components/table/table.component.jsx';
import Summary from '../../components/summary/summary.component.jsx';
import image from '../../assets/home.jpg';
import Chart from '../../components/chart/chart.component';
import './india.styles.css';

class India extends Component {

    constructor(props) {
        super(props);

        this.state = {
            india: [],
            chartData: {},
        }
    }

    componentDidMount() {

        const { history, match } = this.props;
        history.push(match.url);
        
        fetch('https://api.covid19india.org/v4/data.json') //https://api.covid19india.org/v4/min/data.min.json
            .then((response) => response.json())
            .then(states => {
                let array = [];
                Object.keys(states).map(stateName => {

                    const state = states[stateName];

                    if(!state.delta) state.delta = '';

                    let active = (state.total.confirmed||0) 
                                -(state.total.deceased||0) 
                                -(state.total.recovered||0) 
                                -(state.total.other||0);
                                
                    array.push({
                                    'name': statecodes[stateName], 
                                    
                                    'confirmed': [(state.total.confirmed||0).toLocaleString('en-IN'), 
                                                  (state.delta.confirmed||0).toLocaleString('en-IN')],
                                    
                                    'active': [active.toLocaleString('en-IN'), 
                                               (state.delta.confirmed||0).toLocaleString('en-IN')],
                                    
                                    'recovered': [(state.total.recovered||0).toLocaleString('en-IN'), 
                                                  (state.delta.recovered||0).toLocaleString('en-IN')],

                                    'deaths': [(state.total.deceased||0).toLocaleString('en-IN'), 
                                               (state.delta.deceased||0).toLocaleString('en-IN')],
                                })
                    return null
                })
                this.setState({india: array})        
            })        
    }

    render() {
        
        return (
            <div className='india'>
                <h1>Indian Statistics</h1>
                <br/>
                <img className='image' src={image} alt="Let's Stop This Pandemic Together"/>
                <br /><br /><br />
                <Summary summary={this.state.india} />
                <br/><br/><br/>
                <Table tableName={"Indian Statistics"} headerName="State" rowData={this.state.india}/>
                <br/><br/><br/>
                <Chart title={"India"} data={this.state.india} />
            </div>
        );
    }
}

export default India;