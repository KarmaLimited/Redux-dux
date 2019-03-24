import React, { Component } from 'react';
// connect is a fn that return a HOC used to connect data from react to redux
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                {/* 
                in normal react you use to the components state
                <CounterOutput value={this.state.counter} /> 
                now with redux we connect to the redux state ->
                */}
                <CounterOutput value={this.props.ctr} />

                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                {/* difference  above is now a reference to the fn in mapDispatchTo props and does not need to have ()
                while below ther is a 'standard react fn'
                */}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onIncrementCounterWithValue} />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounterWithValue} />
            </div>
        );
    }
}
// instructions to redux how its state should be mapped to props
// props are not changed internally, state is. this is why we call it 
// map state to props -> not changing state --> create a new clone for every update of state
const mapStateToProps = state => {
    return {
        // define prop names
        // our name : redux state name
        ctr: state.counter
    }
}


// which kind of actions do i want to dispatch in this container
const mapDispatchToProps = dispatch => {
    return {
        // hold prop name which are refs (like a pointer) to fns
        // which will be exected and dispatch the actions

        // fn ref: fn              // needs to be anon & the actual fn is executed in the reducer.js
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onIncrementCounterWithValue: () => dispatch({ type: 'INCREMENT_WITH_VALUE', value: 5 }),
        onDecrementCounterWithValue : () => dispatch({type: 'DECREMENT_WITH_VALUE', value: -5 })
    }
}

// connect
// used like this:
// --> What piece of state do i want to pass along, what actions do i want to dispatch and from which component
// export default connect('configs')(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//sidenote
// connnect(null, mapDispatchToProps)
// connnect(mapStateToProps)