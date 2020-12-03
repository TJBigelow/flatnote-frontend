import React, { Component } from "react";
import Note from "./Note";
import { connect } from "react-redux";
import { fetchNotesSuccess } from "../actions/index";
import { Container, CardDeck } from "react-bootstrap";

export class NoteList extends Component {
  componentDidMount() {
    if (!this.props.user) {
        this.props.history.push("/")
    }
  }

  renderNotes = () => {
    return this.props.notes.sort(function(a,b){
        if (a.created_at < b.created_at) {
            return 1;
          }
          if (a.created_at > b.created_at) {
            return -1;
          }
          return 0;
    }).map((note) => <Note key={note.id} note={note} />);
  };

  render() {
    return (
      <Container fluid>
        <CardDeck className={"justify-content-center"}>{this.renderNotes()}</CardDeck>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes,
  user: state.user
});

const mapDispatchToProps = {
  fetchNotesSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
