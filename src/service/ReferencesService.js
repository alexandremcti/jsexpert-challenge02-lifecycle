class ReferencesService {
  getCounterCopyingReferences(object) {
    return object;
  }

  getCounterWithoutCopyingReferences(object) {
    return Object.create(object);
  }

  getCounterWithoutDeepCopyingReferences(object) {
    const newObject = JSON.parse(JSON.stringify(object));
    return newObject;
  }
}

module.exports = ReferencesService;
