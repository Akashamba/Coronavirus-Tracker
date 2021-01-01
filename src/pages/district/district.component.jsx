import React, { Component } from 'react';
import Table from '../../components/table/table.component.jsx';
import image from '../../assets/home2.jpg';
import Chart from '../../components/chart/chart.component';
import {Button, Row, Col} from 'reactstrap';
import './district.styles.css';

class District extends Component {

    constructor(props) {
        super(props);

        this.state = {
            state: [],
        }

    }

    capitalize(state) {
        return state[0].toUpperCase() + state.substring(1);
    }

    getDistrictData = () => {
        fetch('https://api.covid19india.org/state_district_wise.json')
            .then((response) => response.json())
            .then(states => {
                const {state} = this.props.match.params;
                const stateName = this.capitalize(state);
                const {districtData} = states[stateName];
                let array = []
    
                Object.keys(districtData).map(districtName => {

                    const district = districtData[districtName];
                    array.push({
                                    'name': districtName, 
                                    
                                    'confirmed': [district.confirmed.toLocaleString('en-IN'), 
                                                  (district.delta.confirmed||0).toLocaleString('en-IN')],
                                    
                                    'active': [district.active.toLocaleString('en-IN'), 
                                               (district.delta.confirmed||0).toLocaleString('en-IN')],
                                    
                                    'recovered': [district.recovered.toLocaleString('en-IN'), 
                                                  (district.delta.recovered||0).toLocaleString('en-IN')],
    
                                    'deaths': [district.deceased.toLocaleString('en-IN'), 
                                               (district.delta.deceased||0).toLocaleString('en-IN')],
                                });  
                    return null
                })
                this.setState({state: array})
            })
            .catch (() => {
                this.setState({state: null})
            })
    }

    componentDidMount() {
        this.getDistrictData();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params !== this.props.match.params)
            this.getDistrictData();   
    }

    render() {
        const {history, match} = this.props;
        const stateName = this.capitalize(match.params.state);

        if(!this.state.state) 
            history.push('/');

        return (
            <div className={`district ${stateName}`}>
                <br/>
                
                <Row>
                    <Col xs="8" md="6">
                        <h1 id="state-header" >{stateName} Statistics</h1>
                    </Col>

                    <Col xs="4" md="6">
                        <Button id="state-search" onClick={() => history.push('/search-state')} ><i class="fas fa-search"></i> Search</Button>
                    </Col>
                </Row>
        
                <br/>
                <img src={image} alt="coronavirus" className="image" />
                <br/><br/><br/>
                <Table key={stateName} tableName={`${stateName} Statistics`} headerName="District" rowData={this.state.state}/>
                <br/><br/><br/>
                <Chart title={stateName} data={this.state.state} />
            </div>
        );
    }
}

export default District;