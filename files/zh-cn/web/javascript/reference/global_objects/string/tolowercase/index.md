---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
---

{{JSRef}}

**`toLowerCase()`** 会将调用该方法的字符串值转为小写形式，并返回。

## 语法

```js
str.toLowerCase()
```

### 返回值

一个新的字符串，表示转换为小写的调用字符串。

## 描述

`toLowerCase` 会将调用该方法的字符串值转为小写形式，并返回。`toLowerCase` 不会影响字符串本身的值。

## 示例

### 例子：使用 `toLowerCase()`

```js
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans

​console.log( "ALPHABET".toLowerCase() );
// "alphabet"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
