var playlist = { "David Bowie": "Five Years" };

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj, key) {
  delete obj.key
  return obj
}
