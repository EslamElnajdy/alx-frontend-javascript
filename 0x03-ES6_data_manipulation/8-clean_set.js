function cleanSet(set, startString) {
  const list = [];
  for (const item of set) {
    if (item && item.startWith(startString)) {
      list.push(item.slice(startString.length));
    }
  }
  return list.join('-');
}

export default cleanSet;
