import React, { Component, PropTypes } from 'react';
import { TextBox, DropDown } from 'react-form-elements';


export default class SelectedCurrencies extends Component {
    constructor(props) {
        super(props); 
    }
    
    render() {

        let xchange = this.props.currencies.map(item => {
            return <li>{item.label}</li>
        })
        return (
            <aside>
                <ul className="SelectedCurrencies">
                    {xchange}
                </ul>
            </aside>
            );
    }
}

SelectedCurrencies.propTypes = { currencies: PropTypes.array };
SelectedCurrencies.defaultProps = { currencies: [] };