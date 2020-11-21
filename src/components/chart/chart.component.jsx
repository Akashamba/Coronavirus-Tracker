import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './chart.styles.css';

function stringComparator(a, b) {
    let num1 = +a.confirmed[0].replaceAll(',', '');
    let num2 = +b.confirmed[0].replaceAll(',', '');
    let num3 = num1 - num2;
    if(num3>0) 
        return -1
    else if(num3<0)
        return 1
    
    return 0
}

const Chart = ({title, data}) => {
    data.sort(stringComparator)
    data = data.filter(element => element.name!=='TT')
    
    const chartData = {
            labels: data.slice(0, 10).map(state => (state.name)),
            datasets: [
                {
                    label: 'Confirmed Cases',
                    data: data.map(state => (+(state.confirmed[0]).replaceAll(',', ''))), 
                    backgroundColor: [
                        '#075208','#46a521','#5ed42d',
                        '#6de33b','#6de33b','#7fe653',
                        '#a6e54c','#ade75b','#c0e446',
                        '#c0e446',
                    ]
                    
                }
            ]
        }

    return (
        <div>
            <h1>{`Confirmed Cases in ${title}`}</h1>
            <div className='chart canvas-container'>
                <Bar 
                    data={chartData}
                    options ={{
                        title: {
                            display: false,
                        },

                        legend: {
                            display: false
                        },
                        maintainAspectRatio: false,
                    }}
                />
            </div>
        </div>
    )
}



export default Chart;