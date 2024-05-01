function cleanSet(set, startString) {

  if (startString.length === 0) {
    return '';
  }

  const list = [];
  for (const item of set) {
    if (item && item.startWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }
  return list.join('-');
}

export default cleanSet;
