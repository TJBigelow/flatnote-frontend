import React, { Component } from "react";
import { newNote } from "../actions/index";
import { connect } from "react-redux";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";

export class NavBar extends Component {
  handleNew = () => {
    let newNote = { title: "New Note", body: "", user_id: this.props.user.id };

    fetch("http://localhost:3000/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((resp) => resp.json())
      .then((note) => this.props.newNote(note));
  };
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">FlatNote</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {this.props.user ? (
              <ButtonGroup>
                <Button onClick={this.handleNew}>New Note</Button>
                <Nav.Link href="/">Sign Out</Nav.Link>
              </ButtonGroup>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  newNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
