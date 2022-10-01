---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---

{{JSRef}}

**`Object.defineProperties()`** 函式可定義新的或是修改已存在的物件屬性，並回傳修改後的物件。

## 語法

```plain
Object.defineProperties(obj, props)
```

### 參數

- `obj`
  - : The object on which to define or modify properties.
- `props`

  - : An object whose own enumerable properties constitute descriptors for the properties to be defined or modified. Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors (see {{jsxref("Object.defineProperty()")}} for more details). Descriptors have the following keys:

    - `configurable`
      - : `true` if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
        **預設為 `false`.**
    - `enumerable`
      - : `若該屬性設為 true，則該屬性可被物件所列舉。`
        **預設為 `false`.**
    - `value`
      - : The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
        **預設為 {{jsxref("undefined")}}.**
    - `writable`
      - : `若該屬性為 true`，則該屬性可透過{{jsxref("Operators/Assignment_Operators", "賦予運算子", "", 1)}}所改變
        **預設為 `false`.**
    - `get`
      - : A function which serves as a getter for the property, or {{jsxref("undefined")}} if there is no getter. The function return will be used as the value of property.
        **預設為 {{jsxref("undefined")}}.**
    - `set`
      - : A function which serves as a setter for the property, or {{jsxref("undefined")}} if there is no setter. The function will receive as only argument the new value being assigned to the property.
        **預設為 {{jsxref("undefined")}}.**

### 回傳值

The object that was passed to the function.

## 描述

`Object.defineProperties`, in essence, defines all properties corresponding to the enumerable own properties of `props` on the object `obj` object.

## 範例

```js
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

## Polyfill

Assuming a pristine execution environment with all names and properties referring to their initial values, `Object.defineProperties` is almost completely equivalent (note the comment in `isCallable`) to the following reimplementation in JavaScript:

```js
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB: modify as necessary if other values than functions are callable.
      return typeof v === 'function';
    }

    if (typeof desc !== 'object' || desc === null)
      throw new TypeError('bad desc');

    var d = {};

    if (hasProperty(desc, 'enumerable'))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, 'configurable'))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, 'value'))
      d.value = desc.value;
    if (hasProperty(desc, 'writable'))
      d.writable = !!desc.writable;
    if (hasProperty(desc, 'get')) {
      var g = desc.get;

      if (!isCallable(g) && typeof g !== 'undefined')
        throw new TypeError('bad get');
      d.get = g;
    }
    if (hasProperty(desc, 'set')) {
      var s = desc.set;
      if (!isCallable(s) && typeof s !== 'undefined')
        throw new TypeError('bad set');
      d.set = s;
    }

    if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d))
      throw new TypeError('identity-confused descriptor');

    return d;
  }

  if (typeof obj !== 'object' || obj === null)
    throw new TypeError('bad obj');

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i < descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Enumerability and ownership of properties](/zh-TW/docs/Enumerability_and_ownership_of_properties)
