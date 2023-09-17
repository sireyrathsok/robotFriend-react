import React, { Component } from "react";

class ErrorHandling extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Oopss.....Something went wrong....</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorHandling;
