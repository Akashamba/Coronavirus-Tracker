import React, { Component } from 'react';
import Table from '../../components/table/table.component.jsx';
import Summary from '../../components/summary/summary.component.jsx';
import Chart from '../../components/chart/chart.component';
import image from '../../assets/world.jpg';

class World extends Component {

    constructor(props) {
        super(props);

        this.state= {
            global: [],
        }
    }

    componentDidMount() {
        fetch("https://api.covid19api.com/summary")
            .then(response => response.json())
            .then(global => {
                let array = [];
                global.Countries.map(country => {

                    const { 
                            Country,
                            TotalConfirmed, NewConfirmed, 
                            TotalRecovered, NewRecovered, 
                            TotalDeaths, NewDeaths 
                          } = country;
                          
                    let active = TotalConfirmed -TotalRecovered -TotalDeaths

                    array.push({
                                    'name': Country,

                                    'confirmed': [TotalConfirmed.toLocaleString(), 
                                                  NewConfirmed.toLocaleString()], 

                                    'active': [active.toLocaleString(), 
                                               NewConfirmed.toLocaleString()],

                                    'recovered': [TotalRecovered.toLocaleString(), 
                                                  NewRecovered.toLocaleString()],

                                    'deaths': [TotalDeaths.toLocaleString(), 
                                               NewDeaths.toLocaleString()],
                                })
                    return null
                })

                let active = global.Global.TotalConfirmed
                            -global.Global.TotalRecovered
                            -global.Global.TotalDeaths

                array.push({
                    'name': 'TT',

                    'confirmed': [global.Global.TotalConfirmed.toLocaleString(), 
                                  global.Global.NewConfirmed.toLocaleString()], 

                    'active': [active.toLocaleString(), 
                               global.Global.NewConfirmed.toLocaleString()],

                    'recovered': [global.Global.TotalRecovered.toLocaleString(), 
                                  global.Global.NewRecovered.toLocaleString()],

                    'deaths': [global.Global.TotalDeaths.toLocaleString(), 
                               global.Global.NewDeaths.toLocaleString()],
                            })

                this.setState({global: array})
            })
    }

    render() {
        return (
            <div className='world'>
                <h1>Global Statistics</h1> Data sourced from <a rel='noreferrer' target="_blank" href="https://api.covid19api.com/">api.covid19api.com</a>
                <br/>
                <img className='image' src={image} alt="Let's Stop This Pandemic Together"/>
                <br /><br /><br />
                <Summary summary={this.state.global} />
                <br/><br/><br/>
                <Table tableName={"Global Statistics"} headerName="Country" rowData={this.state.global}/>
                <br/><br/><br/>
                <Chart title={"the World"} data={this.state.global} />
            </div>        
        );
    }
}

export default World;