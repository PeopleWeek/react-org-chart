module.exports = {
  getCursorForNode,
}

function getCursorForNode(datum) {
  return datum.children || datum._children || datum.hasChild
    ? 'pointer'
    : 'default'
}
