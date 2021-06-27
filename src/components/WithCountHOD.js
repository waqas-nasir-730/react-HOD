import React, { Component } from "react";

const WithCountHOD = (WrappedComponent, incrementBy = 1) => {
  class WithCountHOD extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    countHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementBy };
      });
    };

    render() {
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
