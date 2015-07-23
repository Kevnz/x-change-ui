import React, { Component, PropTypes } from 'react';
import { TextBox, DropDown } from 'react-form-elements';


export default class Picker extends Component {
    constructor(props) {
        super(props); 
    }
    get to() {
        return this.refs.to ? this.refs.to.getValue() : 'USD';
    }
    get from() {
        return this.refs.from ? this.refs.from.getValue() : 'NZD';
    }
    isDisabled(val, con) {
        return val === con;
    }
    render() {
        var to = this.to;
        var from = this.from;
        return (
            <div className="picker">
                <DropDown ref="from" label="From Currency">
                    <option value="NZD" disabled={this.isDisabled('NZD', to)}>New Zealand</option>
                    <option value="USD" disabled={this.isDisabled('USD', to)}>America</option>
                    <option value="AUD" disabled={this.isDisabled('AUD', to)}>Australia</option>
                    <option value="GBP" disabled={this.isDisabled('GBP', to)}>UK Pound</option>
                    <option value="EUR" disabled={this.isDisabled('EUR', to)}>Euro</option>
                </DropDown>
                <DropDown ref="to" label="To Currency">
                    <option value="USD">America</option>
                    <option value="NZD">New Zealand</option>
                    <option value="AUD">Australia</option>
                    <option value="GBP">UK Pound</option>
                    <option value="EUR">Euro</option>
                </DropDown>
            </div>
            );
    }
}

Picker.propTypes = { to: PropTypes.string, from: PropTypes.string };
Picker.defaultProps = { to: 'NZD', from: 'USD' };