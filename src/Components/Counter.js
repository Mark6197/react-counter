//rcc
import React, { Component } from 'react'
import CounterTable from './CounterTable'
import CounterForm from './CounterForm'

export default class Counter extends Component {
    //rconst
    constructor(props) {
        super(props)

        this.state = {
            counterVal: props.initialVal,
            interval: props.interval,
            minimumVal: props.minimum,
            maximumVal: props.maximum,
            isTableMode: true,
            isFormMode: false
        };
        this.handleInputChanges = this.handleInputChanges.bind(this);
    }



    handleInputChanges(values) {
        this.setState({ counterVal: values.initialVal })
        this.setState({ ...values })
    }

    render() {
        return (
            <>
                {this.state.isTableMode && <CounterTable values={this.state} notifyInputChanges={this.handleInputChanges} />}

                {this.state.isFormMode && <CounterForm values={this.state} notifyInputChanges={this.handleInputChanges} />}
            </>
        )
    }
}
