export function addSection(idx, text) {
  return {
    type: 'ADD_SECTION',
    text,
  }
}


export function delSection(idx, code) {
  return {
    type: 'DEL_SECTION',
    id: idx,
    code
  }
}

export function selectSection(idx) {
  return {
    type: 'SELECT_SECTION',
    id: idx
  }
}


export function updateSectionPos(idx, pos) {
  return {
    type: 'UPDATE_SECTION_POS',
    id: idx,
    pos
  }
}
