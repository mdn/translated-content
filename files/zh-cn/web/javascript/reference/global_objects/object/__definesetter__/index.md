---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
---

{{JSRef}}{{Deprecated_Header}}

> [!NOTE]
> 此特性已弃用，建议使用[对象初始化语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)或 {{jsxref("Object.defineProperty()")}} API 来定义 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。该方法的行为只针对 Web 兼容性进行了规定，在任何平台上都不需要实现该方法。它可能无法在所有地方正常工作。

**`__defineSetter__()`** 方法将一个对象的属性绑定到一个函数上，当该属性被赋值时，该函数将被调用。

## 语法

```js-nolint
__defineSetter__(prop, func)
```

### 参数

- `prop`
  - : `func` 所绑定的 setter 函数所对应的属性名称，以字符串形式表示。
- `func`
  - : 当试图设置指定属性时要调用的函数。该函数接收以下参数：
    - `val`
      - : 试图赋给 `prop` 的值。

### 返回值

{{jsxref("undefined")}}。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `func` 不是函数，则抛出。

## 描述

所有继承自 `Object.prototype` 的对象（也就是除了 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)的对象）都会继承 `__defineSetter__()` 方法。该方法允许在一个已存在的对象上定义一个 [setter](/zh-CN/docs/Web/JavaScript/Reference/Functions/set)。这相当于使用 [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 方法，这意味着该属性是可枚举和可配置的，而且如果存在，则保留任何现有的 getter。

`__defineSetter__()` 在规范中被定义为“可选规范”，这意味着不需要任何实现来实现它。然而，所有主要的浏览器都实现了它，并且由于它的持续使用，它不太可能被删除。如果一个浏览器实现了 `__defineSetter__()`，那么它还需要实现 [`__lookupGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)、[`__lookupSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) 和 [`__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) 方法。

## 示例

### 使用 \_\_defineSetter\_\_()

```js
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### 以标准方式定义 setter 属性

在对象首次初始化时，你可以使用 `set` 语法来定义一个 setter。

```js
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

你也可以使用 {{jsxref("Object.defineProperty()")}} 在对象创建后为其定义一个 setter。与 `__defineSetter__()` 相比，此方法允许你控制 setter 的可枚举性和可配置性，以及定义 [symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 属性。`Object.defineProperty()` 方法也适用于 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)，因为它们没有继承 `Object.prototype`，所以没有 `__defineSetter__()` 方法。

```js
const o = {};
Object.defineProperty(o, "value", {
  set(val) {
    this.anotherValue = val;
  },
  configurable: true,
  enumerable: true,
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.prototype.__defineSetter__` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__defineGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- {{jsxref("Functions/set", "set")}} 语法
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS 指南：定义 Getter 和 Setter](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#定义_getter_与_setter)
- [\[博文\] \_\_defineGetter\_\_ 和 \_\_defineSetter\_\_ 已被弃用](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- [Firefox bug 647423](https://bugzil.la/647423)
