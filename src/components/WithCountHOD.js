import React, { Component } from "react";

const WithCountHOD = (WrappedComponent) => {
  class WithCountHOD extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    countHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      console.log(this.props);
      return (
        <WrappedComponent
          count={this.state.count}
          countHandler={this.countHandler}
          {...this.props}
        />
      );
    }
  }

  return WithCountHOD;
};

export default WithCountHOD;
