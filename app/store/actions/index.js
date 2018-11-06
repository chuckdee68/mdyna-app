import ACTION_TYPES from './actionTypes';

export const addNote = note => ({
  type: ACTION_TYPES.NOTE.ADD_NOTE,
  note,
});

export const addTask = task => ({
  type: ACTION_TYPES.TASK.ADD_TASK,
  task,
});

export const saveTask = task => ({
  type: ACTION_TYPES.TASK.SAVE_TASK,
  task,
});

export const completeTask = task => ({
  type: ACTION_TYPES.TASK.COMPLETE_TASK,
  task,
});

export const failTask = task => ({
  type: ACTION_TYPES.TASK.FAIL_TASK,
  task,
});

export const snoozeTask = task => ({
  type: ACTION_TYPES.TASK.SNOOZE_TASK,
  task,
});

export const removeTask = task => ({
  type: ACTION_TYPES.TASK.REMOVE_TASK,
  task,
});

export const removeNote = note => ({
  type: ACTION_TYPES.NOTE.REMOVE_NOTE,
  note,
});

export const saveNote = note => ({
  type: ACTION_TYPES.NOTE.SAVE_NOTE,
  note,
});

export const toggleEditor = () => ({
  type: ACTION_TYPES.NOTE_EDITOR.TOGGLE_EDITOR,
});

export const setVisibilityFilter = filter => ({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  filter,
});

export const toggleNote = note => ({
  type: ACTION_TYPES.NOTE.TOGGLE_NOTE,
  note,
});

export const generateNoteLink = (keys, index) => ({
  type: ACTION_TYPES.NOTE.GENERATE_LINK,
  keys,
  index,
});

export const changeNoteSetting = (prop, value) => ({
  type: ACTION_TYPES.NOTE_EDITOR.ON_CHANGE,
  prop,
  value,
});

export const editNote = note => ({
  type: ACTION_TYPES.NOTE_EDITOR.EDIT_NOTE,
  note,
});

export const toggleWhiteMode = () => ({
  type: ACTION_TYPES.TOGGLE_WHITE_MODE,
});

export const addLabel = label => ({
  type: ACTION_TYPES.LABEL.ADD_LABEL,
  label,
});

export const removeLabel = label => ({
  type: ACTION_TYPES.LABEL.REMOVE_LABEL,
  label,
});

export const searchCards = value => ({
  type: ACTION_TYPES.FILTERS.SEARCH_CARDS,
  value,
});
export const addLabelFilter = value => ({
  type: ACTION_TYPES.FILTERS.ADD_LABEL_FILTER,
  value,
});
export const removeLabelFilter = value => ({
  type: ACTION_TYPES.FILTERS.REMOVE_LABEL_FILTER,
  value,
});
export const toggleCompletedFilter = value => ({
  type: ACTION_TYPES.FILTERS.TOGGLE_COMPLETED_FILTER,
  value,
});