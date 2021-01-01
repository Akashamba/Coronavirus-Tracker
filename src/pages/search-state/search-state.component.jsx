import React, {useState} from 'react';
import {Container, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
import statecodes from '../../components/table/statecodes.js';
import './search-state.styles.css';

export default function SearchState() {

    let [matched, setMatched] = useState(statecodes); 

    const handleChange = (event) => {
        const {value} = event.target;
        matched = Object.values(statecodes).filter(state => state.toLowerCase().includes(value.toLowerCase()));
        setMatched(matched);
    }

    return(
        <Container className="search-results-container" >
            <br/>
            <Input type="search" name="state-search" placeholder="Enter State" onChange={handleChange} />
            <br/>
            <ul className="search-results" >
                {Object.values(matched).map(state => (
                    <div className="result">
                        <li><Link to={`/state/${state}`} >{state}</Link></li>
                    </div>
                ))}
            </ul>
        </Container>
        )
}