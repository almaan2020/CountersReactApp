import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete} //bubbling event to parent
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement} 
            counter={counter}
          >
            <h5>counter#{counter.id}</h5>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
