import ACTION_TYPES from '../actions/actionTypes';

const { ADD_NOTE, REMOVE_NOTE, TOGGLE_NOTE, GENERATE_LINK, SAVE_NOTE } = ACTION_TYPES.NOTE;

const addNoteId = noteList =>
  (noteList &&
    noteList[noteList.length - 1] &&
    noteList[noteList.length - 1].noteId &&
    noteList[noteList.length - 1].noteId + 1) ||
  (noteList && noteList.length) ||
  1;
const saveNoteId = (note, noteList) => note.noteId || addNoteId(noteList);
export default function notes(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          ...action.note,
          noteId: addNoteId(state),
          completed: false,
          taskId: null,
        },
      ];
    case REMOVE_NOTE:
      return state.filter(note => note.noteId !== action.note.noteId);
    case SAVE_NOTE:
      return state.map((note) => {
        if (action.note.noteId) {
          if (note.noteId === action.note.noteId) {
            return action.note;
          }
        }
        return { noteId: saveNoteId(action.note, state), taskId: null, ...note };
      });
    case TOGGLE_NOTE:
      return state.map((note) => {
        if (note.noteId === action.note.noteId) {
          return {
            ...note,
            completed: !note.completed,
          };
        }
        return note;
      });
    case GENERATE_LINK:
      return state.map((note) => {
        if (note.noteId === action.index) {
          return {
            ...note,
            noteId: action.keys.noteId,
            shortLink: action.keys.shortLink,
          };
        }
        return note;
      });
    default:
      return state;
  }
}