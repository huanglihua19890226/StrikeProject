import {combineReducers} from 'redux';

function sectionList (state = [], action) {
  switch (action.type) {
    case 'ADD_SECTION':
      var newState = [...state];
      newState.push({
        text: action.text,
      });
      return newState;
    case 'DEL_SECTION':
      var newState = [...state];
      var index = -1;
      newState.forEach((s, idx) => {
        if (s.text === action.code) index = idx;
      });
      if (index !== -1) newState.splice(index, 1);
      return newState;
    case 'SELECT_SECTION':
      var newState = [...state];
      return newState;
    case 'UPDATE_SECTION_POS':
      var newState = [...state];
      newState[action.id].pos = action.pos
      return newState;
    default:
      return state;
  }
}

function sectionListIdexs (state = [], action) {
  switch (action.type) {
    case 'ADD_SECTION':
      var newState = [...state];
      newState.push(action.text);
      return newState;
    case 'DEL_SECTION':
      var newState = [...state];
      newState.splice(action.id, 1);
      return newState;
    case 'SELECT_SECTION':
      var newState = [...state];
      var section = newState.splice(action.id, 1);
      newState.push(section[0]);
      return newState;
    default:
    return state;
  }
}
const sections = combineReducers({
  sectionList,
  sectionListIdexs
})
const sectionReducers = sections;
export default sectionReducers;
