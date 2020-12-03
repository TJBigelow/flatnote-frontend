export const logIn = (response) => {
  return {
    type: "LOG_IN",
    response,
  };
};

export const fetchNotesSuccess = (notes) => {
  return {
    type: "FETCH_NOTES_SUCCESS",
    notes,
  };
};

export const deleteNoteSuccess = (id) => {
  return {
    type: "DELETE_NOTE_SUCCESS",
    id,
  };
};

export const newNote = (note) => {
  return {
    type: "NEW_NOTE",
    note,
  };
};

export const editNote = (id) => {
  return {
    type: "EDIT_NOTE",
    id,
  };
};

export const updateNote = (note) => {
  return {
    type: "UPDATE_NOTE",
    note,
  };
};

export const cancelEdit = (id) => {
  return {
    type: "CANCEL_EDIT",
    id,
  };
};
