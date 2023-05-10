---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---

{{JSRef("Global_Objects", "Object")}}

## 概述

**`Object.isExtensible()`** 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

## 语法

```plain
Object.isExtensible(obj)
```

### 参数

- obj
  - : 需要检测的对象

### 返回值

表示给定对象是否可扩展的一个 [`Boolean`](/zh-CN/docs/Web/JavaScript/Reference/Boolean)。

## 描述

默认情况下，对象是可扩展的：即可以为他们添加新的属性。以及它们的 [`Object.prototype.__proto__`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} 属性可以被更改。{{jsxref("Object.preventExtensions")}}，{{jsxref("Object.seal")}} 或 {{jsxref("Object.freeze")}} 方法都可以标记一个对象为不可扩展（non-extensible）。

## 示例

```js
// 新对象默认是可扩展的。
var empty = {};
Object.isExtensible(empty); // === true

// ...可以变的不可扩展。
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 密封对象是不可扩展的。
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展。
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

## 注意

在 ES5 中，如果参数不是一个对象类型，将抛出一个 {{jsxref("TypeError")}} 异常。在 ES6 中，non-object 参数将被视为一个不可扩展的普通对象，因此会返回 false。

```plain
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES6 code)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- **{{jsxref("Object.preventExtensions")}}**
- {{jsxref("Object.seal")}}
- {{jsxref("Object.isSealed")}}
- {{jsxref("Object.freeze")}}
- {{jsxref("Object.isFrozen")}}
