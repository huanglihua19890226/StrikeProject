export function addSection(idx, text, pos) {
  return {
    type: 'ADD_SECTION',
    id: idx,
    text,
    pos
  }
}


export function delSection(idx) {
  return {
    type: 'DEL_SECTION',
    id: idx
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
