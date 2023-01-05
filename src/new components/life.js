import  { Component } from "react";

export default class componentAlert extends Component {
  constructor() {
    super();
    alert("Constructor was invoked ");
  }

  componentDidMount() {
    alert("Component Did Mounted");
  }

  componentWillMount() {
    alert("Component Will mount");
  }

  render() {
    return alert("Component Rendered.");
  }
}
