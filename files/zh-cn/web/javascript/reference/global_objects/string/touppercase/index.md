---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
---

{{JSRef}}

{{jsxref("String")}} 的 **`toUpperCase()`** 方法将该字符串转换为大写形式。

{{EmbedInteractiveExample("pages/js/string-touppercase.html","shorter")}}

## 语法

```js-nolint
toUpperCase()
```

### 返回值

一个新的字符串，表示转换为大写的调用字符串。

## 描述

`toUpperCase()` 方法返回将字符串转换为大写形式后的值。由于 JavaScript 中的字符串是不可变的，因此此方法不会影响字符串本身的值。

## 示例

### 基本用法

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### 将非字符串类型的 `this` （上下文）转为字符串

此方法会将任何非字符串类型的值转为字符串，当你将其上下文 `this` 值设置为非字符串类型

```js
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return "abcdef";
  },
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
