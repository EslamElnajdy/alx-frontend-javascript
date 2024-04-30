function getListStudentIds(arrayOfObjs) {
  if (!Array.isArray(arrayOfObjs)) {
    return [];
  }
  return arrayOfObjs.map((obj) => obj.id);
}

export default getListStudentIds;
