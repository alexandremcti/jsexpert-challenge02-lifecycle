class ReferencesService {
  getCounterCopyingReferences(object) {
    return object;
  }

  getCounterWithoutCopyingReferences(object) {
    return Object.create(object);
  }

  getCounterWithoutDeepCopyingReferences(object) {
    const newObject = {};
    const keys = Object.keys(object);
    for (const key of keys) {
      newObject[key] = Object.create(object[key]);
    }
    return newObject;
  }
}

module.exports = ReferencesService;
