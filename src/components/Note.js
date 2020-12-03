import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteNoteSuccess,
  editNote,
  updateNote,
  cancelEdit,
} from "../actions/index";
import { Card, Button, ButtonGroup } from "react-bootstrap";

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        id: props.note.id,
        title: props.note.title,
        body: props.note.body,
      },
    };
  }

  formatDate = (string) => {
    var options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(string).toLocaleDateString([], options);
  };
  handleDelete = () => {
    fetch(`http://localhost:3000/notes/${this.props.note.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(this.props.deleteNoteSuccess(this.props.note.id));
  };
  handleEdit = () => {
    this.props.editNote(this.props.note.id);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/notes/${this.props.note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.note),
    })
      .then((resp) => resp.json())
      .then((note) => this.props.updateNote(note));
  };
  handleCancel = () => {
    this.props.cancelEdit(this.props.note.id);
  };
  handleChange = (e) => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value },
    });
  };
  render() {
    return this.props.note.edit ? (
      <Card
        className={"m-1 sm-6"}
        style={{ minWidth: "18rem", maxWidth: "18rem" }}
      >
        <Card.Header>{this.formatDate(this.props.note.created_at)}</Card.Header>
        <Card.Body>
          <form onSubmit={this.handleSubmit}>
            <Card.Title>
              <input
                onChange={this.handleChange}
                name={"title"}
                style={{ width: "100%" }}
                value={this.state.note.title}
              ></input>
            </Card.Title>
            <Card.Text>
              <textarea
                onChange={this.handleChange}
                name={"body"}
                style={{ width: "100%" }}
                value={this.state.note.body}
              ></textarea>
            </Card.Text>
            <ButtonGroup>
              <Button type="submit" variant="outline-primary">
                Submit
              </Button>
              <Button onClick={this.handleCancel} variant="outline-danger">
                Cancel
              </Button>
            </ButtonGroup>
          </form>
        </Card.Body>
      </Card>
    ) : (
      <Card
        className={"m-1 sm-6"}
        style={{ minWidth: "18rem", maxWidth: "18rem" }}
      >
        <Card.Header>{this.formatDate(this.props.note.created_at)}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.note.title}</Card.Title>
          <Card.Text>{this.props.note.body}</Card.Text>
          <ButtonGroup>
            <Button onClick={this.handleEdit} variant="outline-primary">
              Edit
            </Button>
            <Button onClick={this.handleDelete} variant="outline-danger">
              Delete
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  deleteNoteSuccess,
  editNote,
  updateNote,
  cancelEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
