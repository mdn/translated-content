---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---

**`Object.isExtensible()`** 静态方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

{{InteractiveExample("JavaScript Demo: Object.isExtensible()")}}

```js interactive-example
const object1 = {};

console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// Expected output: false
```

## 语法

```js-nolint
Object.isExtensible(obj)
```

### 参数

- `obj`
  - : 要检查的对象。

### 返回值

指示给定对象是否可扩展的一个{{jsxref("Boolean", "布尔值", "", 1)}}。

## 描述

默认情况下，对象是可扩展的：可以向它们添加新属性，并且它们的 `[[Prototype]]` 可以被重新赋值。可以使用 {{jsxref("Object.preventExtensions()")}}、{{jsxref("Object.seal()")}}、{{jsxref("Object.freeze()")}} 或 {{jsxref("Reflect.preventExtensions()")}} 中的任一方法将对象标记为不可扩展。

## 示例

### 使用 Object.isExtensible

```js
// 新对象是可拓展的。
const empty = {};
Object.isExtensible(empty); // true

// 它们可以变为不可拓展的
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// 根据定义，密封对象是不可拓展的。
const sealed = Object.seal({});
Object.isExtensible(sealed); // false

// 根据定义，冻结对象同样也是不可拓展的。
const frozen = Object.freeze({});
Object.isExtensible(frozen); // false
```

### 非对象参数

在 ES5 中，如果参数不是一个对象（即基本类型），将抛出 {{jsxref("TypeError")}}。在 ES2015 中，如果传入的参数不是一个对象，那么它将返回 `false` 而不会报错，因为按照定义，原始类型是不可变的。

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
