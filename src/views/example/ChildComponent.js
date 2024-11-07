import React from "react";

class ChildComponent extends React.Component {
  state = {
    check_show: false,
  };

  handelOnClick = () => {
    this.setState({
      check_show: !this.state.check_show,
    });
  };

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

    // let { name, age } = this.props; // lưu ý phải dùng đúng key của props

    let { array_info } = this.props;
    let { check_show } = this.state;

    return (
      <>
        {check_show === false ? (
          <div>
            <button type="button" onClick={() => this.handelOnClick()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="list_info">
              {array_info.map((item, index) => {
                return (
                  <div key={index}>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <button type="button" onClick={() => this.handelOnClick()}>
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
