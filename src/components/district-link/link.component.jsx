import React from 'react';
import {Link} from 'react-router-dom';
import './link.styles.css';

const DistrictLink = (props) => (<Link className='table-link' to={`/state/${props.value}`}>{props.value}</Link>);

export {DistrictLink};