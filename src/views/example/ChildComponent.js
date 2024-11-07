import React from "react";

class ChildComponent extends React.Component {
  render() {
    // Cách 1: dùng trực tiếp this.props. tên props
    // vd: this.props.name

    // Cách 2: dùng biến để lưu giá trị của props
    // vd: const/let name = this.props.name;
    // vd: const/let age = this.props.age;

    // Cách 3: dùng destructuring
    // vd: const { name, age } = this.props;
    // vd: let { name, age } = this.props;

    // sau đó dùng name, age thay vì this.props.name, this.props.age

    let { name, age } = this.props; // lưu ý phải dùng đúng key của props

    return (
      <div>
        <p>Child Component</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default ChildComponent;
