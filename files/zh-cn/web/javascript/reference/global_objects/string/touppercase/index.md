---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef}}

**`toUpperCase()`** 方法将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。

{{EmbedInteractiveExample("pages/js/string-touppercase.html","shorter")}}

## 语法

```plain
str.toUpperCase()
```

### 返回值

一个新的字符串，表示转换为大写的调用字符串。

### 错误处理

- {{jsxref("TypeError(类型错误)")}}
  - : 在 {{jsxref("null")}} 或 {{jsxref("undefined")}}类型上调用，例如：`String.prototype.toUpperCase.call(undefined)`.

## 描述

`toUpperCase()` 返回转为大写形式的字符串。此方法不会影响原字符串本身的值，因为 JavaScript 中字符串的值是不可改变的。

## 示例

### 基本用法

```js
console.log('alphabet'.toUpperCase()); // 'ALPHABET'
```

### 将非字符串类型的 `this` （上下文）转为字符串

此方法会将任何非字符串类型的值转为字符串，当你将其上下文 `this` 值设置为非字符串类型

```js
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});

const b = String.prototype.toUpperCase.call(true);

// 输出 'ABCDEF TRUE'。
console.log(a, b);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
