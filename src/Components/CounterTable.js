import React, { Component } from 'react'

export default class CounterTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counterVal: this.props.values.counterVal
        }

        this.plusHandler = this.plusHandler.bind(this);
        this.minusHandler = this.minusHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    plusHandler(e) {
        let result = this.state.counterVal + this.props.values.interval;
        if (result <= this.props.values.maximumVal) {
            this.setState({ counterVal: this.state.counterVal + this.props.values.interval });
        }
        else {
            alert("Can't do the opertion, the result of the opertion is larger than the maximum value");
        }
    }

    minusHandler(e) {
        let result = this.state.counterVal - this.props.values.interval;
        if (result >= this.props.values.minimumVal) {
            this.setState({ counterVal: this.state.counterVal - this.props.values.interval });
        }
        else {
            alert("Can't do the opertion, the result of the opertion is smaller than the minimum value");
        }
    }

    resetHandler(e) {
        this.setState({ counterVal: this.props.values.counterVal });
    }

    onEdit(e) {
        this.props.notifyInputChanges({ counterVal: this.props.values.counterVal, isTableMode: false, isFormMode: true });
    }

    render() {
        return (
            <>
                <h1>Counter Table</h1>
                <div>
                    <table className='table' style={{ width: '300px' }}>
                        <tbody>
                            <tr>
                                <td><button onClick={this.plusHandler} type='button' className='btn btn-primary'>+</button></td>
                                <td><h1>{this.state.counterVal}</h1></td>
                                <td><button onClick={this.minusHandler} type='button' className='btn btn-primary'>-</button></td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button onClick={this.resetHandler} type='button' className='btn btn-primary'>Reset</button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button onClick={this.onEdit} type='button' className='btn btn-primary'>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
