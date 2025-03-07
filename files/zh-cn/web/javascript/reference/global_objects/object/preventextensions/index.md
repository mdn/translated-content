---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef}}

**`Object.preventExtensions()`** 静态方法可以防止新属性被添加到对象中（即防止该对象被扩展）。它还可以防止对象的原型被重新指定。

{{InteractiveExample("JavaScript Demo: Object.preventExtensions()")}}

```js interactive-example
const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, "property1", {
    value: 42,
  });
} catch (e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}
```

## 语法

```js-nolint
Object.preventExtensions(obj)
```

### 参数

- `obj`
  - : 将要变得不可扩展的对象。

### 返回值

已经不可扩展的对象。

## 描述

如果一个对象可以添加新的属性，则这个对象是可扩展的。`Object.preventExtensions()` 将对象标记为不再可扩展，这样它将永远不会具有它被标记为不可扩展时持有的属性之外的属性。注意，一般来说，不可扩展对象的属性仍然可以被*删除*。尝试向不可扩展对象添加新属性将静默失败，或在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中抛出 {{jsxref("TypeError")}}。

与 [`Object.seal()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) 和 [`Object.freeze()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 不同，`Object.preventExtensions()` 调用了内在的 JavaScript 行为，不能用几个其他操作的组合替代。它还有它的 `Reflect` 对应方法（仅存在于内部操作中），[`Reflect.preventExtensions()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions)。

`Object.preventExtensions()` 只能防止添加自有属性。但其对象类型的原型依然可以添加新的属性。

该方法使得目标对象的 `[[Prototype]]` 不可变；任何重新赋值 `[[Prototype]]` 操作都会抛出 `TypeError` 。这种行为只针对内部的 `[[Prototype]]` 属性，目标对象的其他属性将保持可变。

一旦将对象变为不可扩展的对象，就再也不能使其可扩展。

## 示例

### 使用 Object.preventExtensions()

```js
// Object.preventExtensions 将原对象变的不可扩展，并且返回原对象。
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// 字面量方式定义的对象默认是可扩展的。
const empty = {};
Object.isExtensible(empty); // true

// 可以将其改变为不可扩展的。
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// 使用 Object.defineProperty 方法为一个不可扩展的对象添加新属性会抛出异常。
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // 抛出 TypeError

// 在严格模式中，为一个不可扩展对象的新属性赋值会抛出 TypeError 异常。
function fail() {
  "use strict";
  // 抛出 TypeError
  nonExtensible.newProperty = "FAIL";
}
fail();
```

不可扩展对象的原型是不可变的：

```js
const fixed = Object.preventExtensions({});
// 抛出 TypeError
fixed.__proto__ = { oh: "hai" };
```

## 非对象参数

在 ES5 中，如果提供给该方法的参数不是一个对象类型（而是原始类型），将抛出 {{jsxref("TypeError")}}。在 ES2015 中，非对象参数将被原样返回，因为原始类型是定义上不可变的。

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES2015 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
