const initialState = [];

export default function notes(state = initialState, action) {
  let updatedNotes;

  switch (action.type) {
    case "DELETE_NOTE_SUCCESS":
      updatedNotes = state.filter((n) => n.id !== action.id);
      return updatedNotes;
    case "NEW_NOTE":
      updatedNotes = [...state, { ...action.note, edit: true }];
      return updatedNotes;
    case "EDIT_NOTE":
      updatedNotes = state.map((n) =>
        n.id === action.id ? { ...n, edit: true } : n
      );
      return updatedNotes;
    case "UPDATE_NOTE":
      updatedNotes = state.map((n) =>
        n.id === action.note.id ? { ...n, ...action.note, edit: false } : n
      );
      return updatedNotes;
    case "CANCEL_EDIT":
      updatedNotes = state.map((n) =>
        n.id === action.id ? { ...n, edit: false } : n
      );
      return updatedNotes;
    case "LOG_IN":
      console.log(action)
      return action.response.notes.map((note) => {
        return { ...note, edit: false };
      });
    default:
      return state;
  }
}
