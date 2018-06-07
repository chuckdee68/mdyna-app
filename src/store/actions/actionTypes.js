const ACTION_TYPES = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TASK_EDITOR: {
    ON_CHANGE: 'TASK_EDITOR_CHANGE',
    TOGGLE_EDITOR: 'TOGGLE_EDITOR',
    EDIT_TASK: 'EDIT_TASK',
  },
  TASK: {
    ADD_TASK: 'ADD_TASK',
    SAVE_TASK: 'SAVE_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    GENERATE_LINK: 'GENERATE_TASK_LINK',
  },
  REMINDER: {
    ADD_REMINDER: 'ADD_REMINDER',
    DELETE_REMINDER: 'DELETE_REMINDER',
    COMPLETE_REMINDER: 'COMPLETE_REMINDER',
    FAIL_REMINDER: 'FAIL_REMINDER',
  },
};

export default ACTION_TYPES;
