import React from "react";
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
