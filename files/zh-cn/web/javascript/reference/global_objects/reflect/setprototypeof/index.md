---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
---

除了返回类型以外，静态方法 **`Reflect.setPrototypeOf()`** 与 {{jsxref("Object.setPrototypeOf()")}} 方法是一样的。它可设置对象的原型（即内部的 `[[Prototype]]` 属性）为另一个对象或 {{jsxref("null")}}，如果操作成功返回 `true`，否则返回 `false`。

{{InteractiveExample("JavaScript Demo: Reflect.setPrototypeOf()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.setPrototypeOf(object1, Object.prototype));
// Expected output: true

console.log(Reflect.setPrototypeOf(object1, null));
// Expected output: true

const object2 = {};

console.log(Reflect.setPrototypeOf(Object.freeze(object2), null));
// Expected output: false
```

## 语法

```plain
Reflect.setPrototypeOf(target, prototype)
```

### 参数

- _`target`_
  - : 设置原型的目标对象。
- _`prototype`_
  - : 对象的新原型（一个对象或 {{jsxref("null")}}）。

### 返回值

返回一个 {{jsxref("Boolean")}} 值表明是否原型已经成功设置。

### 异常

如果 _`target`_ 不是 {{jsxref("Object")}} ，或 *`prototype` *既不是对象也不是 {{jsxref("null")}}，抛出一个 {{jsxref("TypeError")}} 异常。

## 描述

`Reflect.setPrototypeOf` 方法改变指定对象的原型（即，内部的 `[[Prototype]]` 属性值）。

## 示例

### 使用 `Reflect.setPrototypeOf()`

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
var target = {};
var proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
