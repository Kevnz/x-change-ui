import React, { Component, PropTypes } from 'react';
import { TextBox, DropDown } from 'react-form-elements';


export default class Picker extends Component {
    constructor(props) {
        super(props); 
    }
    get to() {
        return this.refs.to.getValue();
    }
    get from() {
        return this.refs.from.getValue();
    }
    render() {

        return (
            <div className="picker">
                <TextBox ref="amount" label="Amount" />
                <DropDown ref="from" label="From Currency">
                    <option value="NZD">New Zealand</option>
                    <option value="USD">America</option>
                    <option value="AUD">Australia</option>
                    <option value="GBP">UK Pound</option>
                </DropDown>
                <DropDown ref="to" label="To Currency">
                    <option value="USD">America</option>
                    <option value="NZD">New Zealand</option>
                    <option value="AUD">Australia</option>
                    <option value="GBP">UK Pound</option>
                </DropDown>
            </div>
            );
    }
}

Picker.propTypes = { to: PropTypes.string, from: PropTypes.string };
Picker.defaultProps = { to: 'NZD', from: 'USD' };