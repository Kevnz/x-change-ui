import React, { Component, PropTypes } from 'react';

var LineChart =  require('react-d3/linechart').LineChart;

export default class CurrencyComparison extends Component {
    constructor(props) {
        super(props); 
    }
    render() {
        console.log(this.props.data);
        if(this.props.data.length === undefined) {
            return (<div> No Data</div>);
        }
        return (
            <LineChart
                legend={true}
                data={this.props.data}
                width={750}
                height={300}
                xAxisTickInterval={{unit: 'month', interval: 1}}
                title="Exchange Rate"
                xAccessor={(d)=> {
                    console.log('xaxx',d);
                    let arrD = d[0].split('-');
                    let nd = new Date(arrD[0], Number(arrD[1])-1, arrD[2]);
                    return nd;
                }}
                yAccessor={(d)=> {
                    console.log('yacc data', d)
                    return   Number(d[1])
                }}
            />
        );
    }
} 