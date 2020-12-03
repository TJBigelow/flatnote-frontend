import React, { Component } from "react";
import { logIn } from "../actions/index";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };
  }

  handleChange = (e) => {
    this.setState({ user: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((resp) => resp.json())
      .then(
        (resp) => this.props.logIn(resp) && this.props.history.push("/notes")
      );
  };

  render() {
    return (
      <div className="d-flex flex-column container align-items-center justify-content-center">
        <div className="col-12 col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="row m-3">
              <input
                onChange={this.handleChange}
                value={this.state.user}
                name="username"
                placeholder="username"
                style={{ width: "100%" }}
              ></input>
            </div>
            <div className="row m-3">
              <br />
              <Button type="submit" style={{ width: "100%" }}>
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
