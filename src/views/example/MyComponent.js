import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  /*
  
  */
  state = {
    name: "David",
    age: 30,
  };

  handleOnChangName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnClick = () => {
    alert("Hello, " + this.state.name);
  };

  handleOnClick1 = () => {
    const x = document.getElementById("tk").value;
    alert("tai khoan " + x);
  };

  render() {
    return (
      <div>
        <div className="first">
          <h1>My Component</h1>
          <p>This is my component.</p>
        </div>
        <div className="second">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangName(event)}
          />
          My name is {this.state.name}
        </div>
        <div className="third">
          <button onClick={() => this.handleOnClick()}>Click me</button>
        </div>
        <ChildComponent name={"child one"} age={"10"} />
      </div>
    );
  }
}

export default MyComponent;
