---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---

{{JSRef}}

**`Object.defineProperties()`** 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

## 语法

```plain
Object.defineProperties(obj, props)
```

### 参数

- `obj`
  - : 在其上定义或修改属性的对象。
- `props`

  - : 要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符（更多详情，请参阅 {{jsxref("Object.defineProperty()")}}）。描述符具有以下键：

    - `configurable`
      - : `true` 只有该属性描述符的类型可以被改变并且该属性可以从对应对象中删除。
        **默认为 `false`**
    - `enumerable`
      - : `true` 只有在枚举相应对象上的属性时该属性显现。
        **默认为 `false`**
    - `value`
      - : 与属性关联的值。可以是任何有效的 JavaScript 值（数字，对象，函数等）。
        **默认为 {{jsxref("undefined")}}.**
    - `writable`
      - : `true`只有与该属性相关联的值被{{jsxref("Operators/Assignment_Operators", "assignment operator", "", 1)}}改变时。
        **默认为 `false`**
    - `get`
      - : 作为该属性的 getter 函数，如果没有 getter 则为{{jsxref("undefined")}}。函数返回值将被用作属性的值。
        **默认为 {{jsxref("undefined")}}**
    - `set`
      - : 作为属性的 setter 函数，如果没有 setter 则为{{jsxref("undefined")}}。函数将仅接受参数赋值给该属性的新值。
        **默认为 {{jsxref("undefined")}}**

### 返回值

传递给函数的对象。

## 描述

`Object.defineProperties` 本质上定义了 `obj` 对象上 `props` 的可枚举属性相对应的所有属性。

## 示例

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

假设一个原始的执行环境，所有的名称和属性都引用它们的初始值，`Object.defineProperties` 几乎完全等同于（注意 `isCallable` 中的注释）以下 JavaScript 中的重新实现：

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
