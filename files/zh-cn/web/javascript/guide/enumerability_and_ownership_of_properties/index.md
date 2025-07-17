---
title: 属性的可枚举性和所有权
slug: Web/JavaScript/Guide/Enumerability_and_ownership_of_properties
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

JavaScript 对象中的每个属性能根据三个因素进行分类：

- 可枚举或不可枚举；
- 字符串或 [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)；
- 自有属性或从原型链继承的属性。

*可枚举属性*是那些内部的可枚举标志设置为 `true` 的属性，对于通过直接赋值或属性初始化器创建的属性，该标识值默认为 `true`。对于通过 [`Object.defineProperty`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 等定义的属性，默认并不是可枚举的。大多数迭代方法（如：[`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环和 [`Object.keys`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)）仅访问可枚举的键。

属性的所有权取决于属性是否直接属于该对象，而不是对象的原型链。

所有的属性，不论是可枚举或不可枚举、是字符串或 symbol、是自有的或继承的，都能用[点记号表示法或方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)进行访问。在本文，我们将专注于 JavaScript 提供的逐一访问一组对象属性的方法。

## 查询对象属性

有四种内置的查询对象属性的方法。它们全部都支持字符串和 symbol 键。下表总结了每个方法支持的类型。

|                                                                                                             | 可枚举的、自有的 | 可枚举的、继承的 | 不可枚举的、自有的 | 不可枚举的、继承的 |
| ----------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | ------------------ | ------------------ |
| [`propertyIsEnumerable()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | `true ✅`        | `false ❌`       | `false ❌`         | `false ❌`         |
| [`hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)             | `true ✅`        | `false ❌`       | `true ✅`          | `false ❌`         |
| [`Object.hasOwn()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                      | `true ✅`        | `false ❌`       | `true ✅`          | `false ❌`         |
| [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)                                                   | `true ✅`        | `true ✅`        | `true ✅`          | `true ✅`          |

## 遍历对象属性

在 JavaScript 中有许多遍历对象属性的方法。有时候，属性作为数组返回；有时候，属性在循环中一个接着一个地迭代；有时候，属性用于构造或修改另一个对象。下表总结了属性能访问的情况。

仅访问字符串属性或仅访问 symbol 属性的方法有额外的注解。✅ 表示能访问这个类型的属性；❌ 表示不能访问这个类型的属性。

|                                                                                                                                                                                                                                                                        | 可枚举的、自有的   | 可枚举的、继承的   | 不可枚举的、自有的 | 不可枚举的、继承的 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ | ------------------ |
| [`Object.keys`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br />[`Object.values`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<br />[`Object.entries`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | ✅<br />(字符串)   | ❌                 | ❌                 | ❌                 |
| [`Object.getOwnPropertyNames`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)                                                                                                                                                         | ✅<br />（字符串） | ❌                 | ✅<br />（字符串） | ❌                 |
| [`Object.getOwnPropertySymbols`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                                     | ✅<br />（symbol） | ❌                 | ✅<br />（symbol） | ❌                 |
| [`Object.getOwnPropertyDescriptors`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)                                                                                                                                             | ✅                 | ❌                 | ✅                 | ❌                 |
| [`Reflect.ownKeys`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                                                                                                                                                                               | ✅                 | ❌                 | ✅                 | ❌                 |
| [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)                                                                                                                                                                                                 | ✅<br />（字符串） | ✅<br />（字符串） | ❌                 | ❌                 |
| [`Object.assign`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<br />（第一个参数之后）                                                                                                                                                           | ✅                 | ❌                 | ❌                 | ❌                 |
| [对象展开](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                                                                                                                                                                                               | ✅                 | ❌                 | ❌                 | ❌                 |

## 通过可枚举性和所有权获取对象的属性

注：以下实现并非是适用于所有情况的最优算法，但可以快捷的展示语言特性。

- 使用 `SimplePropertyRetriever.theGetMethodYouWant(obj).includes(prop)` 时将发生检测操作。
- 使用 `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach((value, prop) => {}));` 时将发生迭代操作。（或使用 `filter()`、`map()` 等方法）

```js
const SimplePropertyRetriever = {
  getOwnEnumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // 或使用 for...in 和 Object.hasOwn 过滤，或者：return Object.keys(obj);
  },
  getOwnNonenumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    // 或者仅使用：return Object.getOwnPropertyNames(obj);
  },
  getPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // 或者使用未过滤的 for...in
  },
  getOwnAndPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  // 私有的静态属性检查器回调
  _enumerable(obj, prop) {
    return Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _notEnumerable(obj, prop) {
    return !Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _enumerableAndNotEnumerable(obj, prop) {
    return true;
  },
  // 受到 http://stackoverflow.com/a/8024294/271577 的启发
  _getPropertyNames(obj, iterateSelf, iteratePrototype, shouldInclude) {
    const props = [];
    do {
      if (iterateSelf) {
        Object.getOwnPropertyNames(obj).forEach((prop) => {
          if (props.indexOf(prop) === -1 && shouldInclude(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototype) {
        break;
      }
      iterateSelf = true;
      obj = Object.getPrototypeOf(obj);
    } while (obj);
    return props;
  },
};
```

## 参见

- [`in`](/zh-CN/docs/Web/JavaScript/Reference/Operators/in)
- [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)
- [`Object.prototype.hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`Object.prototype.propertyIsEnumerable()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`Object.getOwnPropertyNames()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.getOwnPropertyDescriptors()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
- [`Object.hasOwn()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [`Reflect.ownKeys()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
