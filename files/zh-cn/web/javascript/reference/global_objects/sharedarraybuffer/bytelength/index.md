---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
---

{{JSRef}}

**`byteLength`** 访问器属性表示以字节为单位的一个{{jsxref("SharedArrayBuffer")}}的长度。

## 语法

```plain
sab.byteLength
```

## 描述

`byteLength`属性是一个访问者属性，其 set 访问者函数为 `undefined`，这意味着您只能读取此属性。该值在构造共享数组时建立，并且无法更改。

## 例子

```js
var sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("SharedArrayBuffer")}}
