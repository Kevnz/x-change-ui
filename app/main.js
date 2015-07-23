var React =require('react');
var AreaChart =  require('react-d3/areachart').AreaChart;
var LineChart =  require('react-d3/linechart').LineChart;
var Picker = require('./components/picker');
var SelectedCurrencies = require('./components/selected-currencies');
var CurrencyComparison = require('./components/currency-comparison');
var request = require('superagent');


var chartOptions = {};

var colors = ['#595752', '#727272', '#85B8C5', '#D5B986', '#A18862'];
var i = 0;
var chartData = [];
var App = React.createClass({
    getInitialState: function() {
        return {
          data: []
        };
    },
    _handleClick: function (e) {
        e.preventDefault();
        var self = this;
        let to = this.refs.picker.to;
        let from = this.refs.picker.from;
        request.get(`http://x-change.azurewebsites.net/rates/year/2015?from=${from}&to=${to}`)
            .end(function (err, res){ 
                console.log(res.body);
                var data = {
                    axesColor: colors[i],
                    name: `${from} to ${to}`,
                    values: res.body.map((entry) => {return [entry.date, entry.result];})
                };
                console.log(data);
                let currentData = self.state.data.slice(0);
                currentData.push(data);
                
                self.setState({data: currentData});
                i++;
          });
    },
    render: function() {
        let currenciesLabels = this.state.data.map(item => { 
            console.log(item);
            return {label: item.name};
        });
        console.log(currenciesLabels);
        return (<div>
            <article>
                <Picker ref='picker' />
            
                <button onClick={this._handleClick}>Get</button>
            </article>
            <SelectedCurrencies currencies={currenciesLabels} />
            <CurrencyComparison data={this.state.data} />
            
    </div>
    )
  }
});

 React.render(<App  />, document.getElementById('app'));
/*
request.get('http://x-change.azurewebsites.net/rates/year/2015?from=NZD&to=USD')
.end(function (err, res){ 
    console.log(res.body);
    var data = [{
            name: 'NZD to USD',
            values: res.body.map((entry) => {return [entry.date,entry.result]})
        }];
    console.log(data);
    request.get('http://x-change.azurewebsites.net/rates/year/2015?from=NZD&to=AUD')
    .end(function (err, res){ 
        data.push({
            name: 'NZD to AUD',
            values: res.body.map((entry) => {return [entry.date,entry.result]})
        })
        React.render(<App data={data} />, document.getElementById('app'));
    });
});*/