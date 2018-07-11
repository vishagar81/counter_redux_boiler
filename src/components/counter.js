import React, { Component } from 'react';
import { connect } from 'react-redux'

class counter extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props

        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
            </p>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state
    };
};

const mapDispatchToProps = dispatch => {
return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" })
};
};

export default connect(mapStateToProps, mapDispatchToProps)(counter);