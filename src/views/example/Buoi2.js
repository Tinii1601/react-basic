import React from "react";

class Buoi2 extends React.Component {
  state = {
    tk: "",
    mk: "",
  };
  render() {
    return (
      <div>
        <div>
          <h1>Form đăng nhập</h1>
        </div>
        <div>
          <form>
            <label>Tài khoản</label>
            <input
              type="text"
              value={this.state.tk}
              onChange={(e) => this.setState({ tk: e.target.value })}
            />
            <br />
            <label>Mật khẩu</label>
            <input
              type="password"
              value={this.state.mk}
              onChange={(e) => this.setState({ mk: e.target.value })}
            />
            <br />
            <button
            type="button"
              onClick={() =>
                alert(
                  "Tài khoản: " + this.state.tk + " Mật khẩu: " + this.state.mk
                )
              }
            >
              Đăng nhập
            </button>
          </form>
        </div>
        <div>
          <p>Tài khoản của tôi {this.state.tk}</p>
        </div>
      </div>
    );
  }
}
export default Buoi2;
