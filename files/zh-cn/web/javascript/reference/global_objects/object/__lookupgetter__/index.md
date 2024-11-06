---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
---

{{JSRef}} {{deprecated_header}}

> [!NOTE]
> 该特性已被弃用，建议使用 {{jsxref("Object.getOwnPropertyDescriptor()")}} API。该方法的行为只针对 Web 兼容性进行了规定，在任何平台上都不需要实现该方法。它可能无法在所有地方正常工作。

**`__lookupGetter__()`** 方法返回绑定到指定属性的 getter 函数。

## 语法

```js-nolint
__lookupGetter__(prop)
```

### 参数

- `prop`
  - : 包含应返回其 getter 的属性名称的字符串。

### 返回值

绑定到指定属性的 getter 函数。如果找不到这样的属性或者该属性是[数据属性](/zh-CN/docs/Web/JavaScript/Data_structures#数据属性)，则返回 `undefined`。

## 描述

所有继承自 `Object.prototype` 的对象（也就是除了 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)的对象）都会继承 `__lookupGetter__()` 方法。如果为对象的属性定义了一个 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get)，则无法通过该属性引用 getter 函数，因为该属性引用该函数的返回值。`__lookupGetter__()` 可用于获取对 getter 函数的引用。

`__lookupGetter__()` 沿着[原型链](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)向上查找指定的属性。如果原型链上的任何对象具有指定的[自有属性](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)，则返回该属性的[属性描述符](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)的 `get` 属性。如果该属性是数据属性，则返回 `undefined`。如果在整个原型链上都找不到该属性，也同样返回 `undefined`。

`__lookupGetter__()` 在规范中被定义为“可选规范”，这意味着不需要任何实现来实现它。然而，所有主要的浏览器都实现了它，并且由于它的持续使用，它不太可能被删除。如果一个浏览器实现了 `__lookupGetter__()`，那么它还需要实现 [`__lookupSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)、[`__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) 和 [`__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) 方法。

## 示例

### 使用 \_\_lookupGetter\_\_()

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

obj.__lookupGetter__("foo");
// [Function: get foo]
```

### 以标准方式查找属性的 getter

你应该使用 {{jsxref("Object.getOwnPropertyDescriptor()")}} API 来查找属性的 getter。与 `__lookupGetter__()` 相比，该方法允许查找 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 属性。`Object.getOwnPropertyDescriptor()` 方法还适用于 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)，它们不继承自 `Object.prototype`，因此没有 `__lookupGetter__()` 方法。如果 `__lookupGetter__()` 沿着原型链向上查找属性的行为很重要，则可以使用 {{jsxref("Object.getPrototypeOf()")}} 自行实现它。

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").get;
// [Function: get foo]
```

```js
const obj2 = {
  __proto__: {
    get foo() {
      return Math.random() > 0.5 ? "foo" : "bar";
    },
  },
};

function findGetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, "foo");
    if (desc) {
      return desc.get;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findGetter(obj2, "foo")); // [Function: get foo]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.prototype.__lookupGetter__` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}} 语法
- {{jsxref("Object.getOwnPropertyDescriptor()")}} 和 {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS 指南：定义 Getter 和 Setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
