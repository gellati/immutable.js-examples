export const ageUp = (value) => {
  return { type: 'AGE_UP', value }
}

export const ageDown = (value) => {
  return { type: 'AGE_DOWN', value }
}

export const deleteItem = (id) => {
  return { type: 'DELETE_ITEM', key: id }
}
