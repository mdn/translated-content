---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
---

{{JSRef}}

**Reflect** 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 [proxy handler](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) 的方法相同。`Reflect` 不是一个函数对象，因此它是不可构造的。

## 描述

与大多数全局对象不同 `Reflect` 并非一个构造函数，所以不能通过 [new 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)对其进行调用，或者将 `Reflect` 对象作为一个函数来调用。`Reflect` 的所有属性和方法都是静态的（就像 {{jsxref("Math")}} 对象）。

`Reflect` 对象提供了以下静态方法，这些方法与 [proxy handler 方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)的命名相同。

## 静态方法

- {{jsxref("Reflect.apply()", "Reflect.apply(<var>target</var>, <var>thisArgument</var>, <var>argumentsList</var>)")}}
  - : 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 {{jsxref("Function.prototype.apply()")}} 功能类似。
- {{jsxref("Reflect.construct()", "Reflect.construct(<var>target</var>, <var>argumentsList</var>[, <var>newTarget</var>])")}}
  - : 对构造函数进行 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new) 操作，相当于执行 `new target(...args)`。
- {{jsxref("Reflect.defineProperty()", "Reflect.defineProperty(<var>target</var>, <var>propertyKey</var>, <var>attributes</var>)")}}
  - : 和 {{jsxref("Object.defineProperty()")}} 类似。如果设置成功就会返回 `true`
- {{jsxref("Reflect.deleteProperty()", "Reflect.deleteProperty(<var>target</var>, <var>propertyKey</var>)")}}
  - : 作为函数的[`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)操作符，相当于执行 `delete target[name]`。
- {{jsxref("Reflect.get()", "Reflect.get(<var>target</var>, <var>propertyKey</var>[, <var>receiver</var>])")}}
  - : 获取对象身上某个属性的值，类似于 `target[name]`。
- {{jsxref("Reflect.getOwnPropertyDescriptor()", "Reflect.getOwnPropertyDescriptor(<var>target</var>, <var>propertyKey</var>)")}}
  - : 类似于 {{jsxref("Object.getOwnPropertyDescriptor()")}}。如果对象中存在该属性，则返回对应的属性描述符，否则返回 {{jsxref("undefined")}}。
- {{jsxref("Reflect.getPrototypeOf()", "Reflect.getPrototypeOf(<var>target</var>)")}}
  - : 类似于 {{jsxref("Object.getPrototypeOf()")}}。
- {{jsxref("Reflect.has()", "Reflect.has(<var>target, propertyKey</var>)")}}
  - : 判断一个对象是否存在某个属性，和 [`in` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/in) 的功能完全相同。
- {{jsxref("Reflect.isExtensible()", "Reflect.isExtensible(<var>target</var>)")}}
  - : 类似于 {{jsxref("Object.isExtensible()")}}.
- {{jsxref("Reflect.ownKeys()", "Reflect.ownKeys(<var>target</var>)")}}
  - : 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 {{jsxref("Object.keys()")}}, 但不会受`enumerable` 影响).
- {{jsxref("Reflect.preventExtensions()", "Reflect.preventExtensions(<var>target</var>)")}}
  - : 类似于 {{jsxref("Object.preventExtensions()")}}。返回一个{{jsxref("Boolean")}}。
- {{jsxref("Reflect.set()", "Reflect.set(<var>target</var>, <var>propertyKey</var>, <var>value</var>[, <var>receiver</var>])")}}
  - : 将值分配给属性的函数。返回一个{{jsxref("Boolean")}}，如果更新成功，则返回`true`。
- {{jsxref("Reflect.setPrototypeOf()", "Reflect.setPrototypeOf(<var>target</var>, <var>prototype</var>)")}}
  - : 设置对象原型的函数。返回一个 {{jsxref("Boolean")}}，如果更新成功，则返回 `true`。

## Examples

### 检测一个对象是否存在特定属性

```plain
const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

Reflect.has(duck, 'color');
// true
Reflect.has(duck, 'haircut');
// false
```

### 返回这个对象自身的属性

```plain
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### 为这个对象添加一个新的属性

```plain
Reflect.set(duck, 'eyes', 'black');
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Proxy")}}
