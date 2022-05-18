class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const newObject = {
      valueOf() {
        return rawObject.age;
      },
    }
    return newObject;
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const newObject = {
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`
      }
    }
    return newObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    const newObject = {
      [Symbol.toPrimitive](coercionType) {
        const type = {
          number: rawObject.age,
          string: `[name="${rawObject.name}",age=${rawObject.age}]`
        }
        return type[coercionType];
      }
    }
    return newObject;
  }
}

module.exports = ObjectMethodsService;
