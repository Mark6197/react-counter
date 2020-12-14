import React, { Component } from 'react'


export default class CounterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initialVal: props.values.counterVal,
            interval: props.values.interval,
            minimumVal: props.values.minimumVal,
            maximumVal: props.values.maximumVal
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = parseInt(target.value);
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSumbit(e) {
        e.preventDefault();
        this.props.notifyInputChanges({ ...this.state, isTableMode: true, isFormMode: false });
    }

    render() {
        return (
            <form onSubmit={this.onSumbit}>
                <div className="form-group row">
                    <label htmlFor="intialVal" className="col-sm-2 col-form-label">Initial Value:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control-plaintext" id="intialVal" name="initialVal" value={this.state.initialVal} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="interval" className="col-sm-2 col-form-label">Interval:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control-plaintext" id="interval" name="interval" value={this.state.interval} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="minVal" className="col-sm-2 col-form-label">Minimum Value:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control-plaintext" id="minVal" name="minimumVal" value={this.state.minimumVal} onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="maxVal" className="col-sm-2 col-form-label">Maximum Value:</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control-plaintext" id="maxVal" name="maximumVal" value={this.state.maximumVal} onChange={this.handleInputChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
