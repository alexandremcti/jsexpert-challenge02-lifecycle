class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const newObject = {
      valueOf() {
        return rawObject.age;
      },
    }
    return newObject;
  }

  getEnhancedObject2(rawObject) {
    const newObject = {
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`
      }
    }
    return newObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
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
